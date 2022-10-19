import { Course, template } from './course.js'
import { findSolutions } from './schedule.js'

let courses = [...template];
let uniqueCourses;

window.addEventListener("DOMContentLoaded", function() {
    //Courses box
    if (localStorage.getItem("courses")) 
        courses = JSON.parse(localStorage.getItem("courses"));

    updateCoursesList();  

    let courseSubmit = document.querySelector('.submit');
    let listBox = document.querySelector('.listbox');

    courseSubmit.addEventListener("click",function(){
        let name = document.querySelector('.formname');
        let period = document.querySelector('.formperiod');
        let teacher = document.querySelector('.formteacher');

        let status = document.querySelector('.status');

        if (name.value == '' || period.value == '' || teacher.value == '') {    
            status.innerText = "All text fields must be filled out";
        } else if (parseInt(period.value) < 0 || parseInt(period.value) > 6) {
            status.innerText = "Period cannot exceed 0-6 range";
        } else {
            status.innerText = "";
            courses.push(new Course(name.value, period.value, teacher.value));
            updateValues();
            updateCoursesList();

            name.value = "";
            period.value = "";
            teacher.value = "";
        }
    });

    listBox.addEventListener("click",function(event){
        let currentCourse = event.target.parentElement.parentElement;

        if (event.target.getAttribute("id") == 'delete-icon') {
            courses.splice(currentCourse.dataset.id,1);
            
            updateValues();
            updateCoursesList();
        }
    });

    //TBD: sorting

    let scinputs = []

    for (let i=0; i<8; i++) {
        scinputs[i] = document.getElementById(`c${i+1}input`); 

        scinputs[i].addEventListener("keyup", (event) => {

            removeElement();
            let count = 0;

            uniqueCourses.forEach((element) => {
                if (element.toLowerCase().startsWith(scinputs[i].value.toLowerCase()) && scinputs[i].value.length > 0 && count <= 4) {

                    let listItem = document.createElement("li");
                    listItem.classList.add("list-items");
                    listItem.style.cursor = "pointer";

                    let word = "<b>" + element.substr(0,scinputs[i].value.length) + "</b>";
                    word += element.substr(scinputs[i].value.length);
                    
                    listItem.innerHTML = word;
                    document.querySelector(`.list${i+1}`).appendChild(listItem);

                    listItem.addEventListener("click",function(event){
                        scinputs[i].value = element;
                        removeElement();
                    });

                    count++;
                }
            });
        });
    }

    function removeElement() {
        let items = document.querySelectorAll(".list-items");
        items.forEach((item) => {
            item.remove();
        });
    }

    //Schedule
    let schedule = [];
    let cschedule = [];

    let scSubmit = document.querySelector(".scsubmit");

    /*
    this.document.getElementById("c1input").value = "Eng 3 AB";
    this.document.getElementById("c2input").value = "AP US Hist AB";
    this.document.getElementById("c3input").value = "AP Calculus AB";
    this.document.getElementById("c4input").value = "Art in Motion 1/2";
    this.document.getElementById("c5input").value = "AP Comp Sci A";
    this.document.getElementById("c6input").value = "AP Physics 1";
    this.document.getElementById("c7input").value = "AP Statistics";
    this.document.getElementById("c8input").value = "Art in Motion 1/2";
    */

    scSubmit.innerHTML = "Find Solution"

    scSubmit.addEventListener("click",function(event) {
        cschedule = [];
        for (let i=0; i<6; i++) {
            cschedule.push(document.getElementById("c" + (i+1) + "input").value);
        }

        let invalidIndex = [];
        
        for (let i=0; i<cschedule.length; i++) {
            let iter = true;

            for (let j=0; j<courses.length; j++) {
                if (courses[j].name == cschedule[i] && iter && courses[j].period == i+1) {
                    iter = false;
                    schedule.push(courses[j]);
                }
            }
            
            if (iter) {
                invalidIndex.push(i + 1);
            }
        }
        
        let wanted = document.querySelector('.wantedInput');
        let unwanted = document.querySelector('.unwantedInput');

        //Resetting border color
        for (let i = 0; i < 6; i++) {
          let currentInput = document.getElementById("c" + (i + 1) + "input");

          currentInput.style.borderColor = "rgb(183, 183, 183)";
        }

        for (let i = 0; i < invalidIndex.length; i++) {
          let currentInput = document.getElementById("c" + invalidIndex[i] + "input");

          currentInput.style.borderColor = "red";
        }

        let er = false;

        for (let j=0; j<courses.length; j++) {
            if (courses[j].name == wanted.value && er != true) {
                er = true;
            }
        }

        let wr = false;

        for (let j=0; j<courses.length; j++) {
            if (courses[j].name == unwanted.value && wr != true) {
                wr = true;
            }
        }

        let errorMsg = document.querySelector('.errormsg');

        if (er) {
            wanted.style.borderColor = "rgb(183, 183, 183)";
        } else {
            wanted.style.borderColor = "red";
        }

        if (wr) {
            unwanted.style.borderColor = "rgb(183, 183, 183)";
        } else {
            unwanted.style.borderColor = "red";
        }

        if (invalidIndex.length != 0 || wr != true || er != true) {
            errorMsg.style.color = "red";
            errorMsg.innerText = "Error: Please make sure all red-outlined inputs are filled in correctly."
        } else {
            errorMsg.innerText = "";
            process();
        }

        async function process() {
            scSubmit.innerHTML = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`
            let solutions = findSolutions(wanted.value,unwanted.value,schedule,courses);
            let routes = solutions.possibleSchedules.length;

            errorMsg.style.color = "black";
            errorMsg.innerText = "Calculating...";

            for (let i=0; i<routes+1; i++) {
                await new Promise(resolve => setTimeout(() => {
                    errorMsg.innerText = `Loading routes (${i+1}/${routes})...`;
                    resolve();
                }, Math.random()*120));
            }

            errorMsg.innerText = `Finalizing schedule...`

            let solutionsBox = document.querySelector(".solutionbox");

            setTimeout(() => {
                createSolutionBox(solutions);
                errorMsg.innerText = ``
                scSubmit.innerHTML = `Find Solution`
                solutionsBox.scrollIntoView({behavior: 'smooth'});
            },1000)
        }

    });
});

let solutionsBox = document.querySelector(".solutionbox");
solutionsBox.style.display = "none";

function createSolutionBox(solutions) {
    solutionsBox.style.display = "grid";

    let cardsBox = document.querySelector('.cardsbox');
    let psolutions = solutions.possibleSchedules

    cardsBox.innerHTML = "";

    for (let i=0; i<psolutions.length; i++) {
        let card = `<div class="scard">
        <div class="sqtitle">Schedule #${i+1}</div>
        <div class="scardheader">
            <div class="scardheadername">
                Period
            </div>
            <div class="scardheaderperiod">
                Course
            </div>
        </div>
        <div class="scardcourse" id="scard1">
            <div>1</div>
            <div>${psolutions[i][0].name}</div>
        </div>
        <div class="scardcourse" id="scard2">
            <div>2</div>
            <div>${psolutions[i][1].name}</div>
        </div>
        <div class="scardcourse" id="scard3">
            <div>3</div>
            <div>${psolutions[i][2].name}</div>
        </div>
        <div class="scardcourse" id="scard4">
            <div>4</div>
            <div>${psolutions[i][3].name}</div>
        </div>
        <div class="scardcourse" id="scard5">
            <div>5</div>
            <div>${psolutions[i][4].name}</div>
        </div>
        <div class="scardlast" id="scard6">
            <div>6</div>
            <div>${psolutions[i][5].name}</div>
        </div>
        </div>`
        cardsBox.innerHTML += card;
    }
}

function updateValues() {
    localStorage.setItem("courses",JSON.stringify(courses));
}

function updateCoursesList() {
    let coursesList = document.querySelector('.listbox')
    
    coursesList.innerHTML = "";

    for (let i=0; i<courses.length; i++) {
        coursesList.innerHTML += 
        `<div class="course" data-id="${i}">
            <div class="courseperiod">${courses[i].period}</div>
            <div class="coursename">${courses[i].name}</div>
            <div class="courseteacher">${courses[i].teacher}</div>
            <div class="courseaction">
                <i class="fa-solid fa-trash" id="delete-icon"></i>
            </div>
        <div>`
    }

    uniqueCourses = new Set();

    for (let i=0; i<courses.length; i++) {
        uniqueCourses.add(courses[i].name);
    }
}

