import { Course, template } from './course.js'
import { findSolutions, sortSolutions, configureC } from './schedule.js'

//Get from database
let courses = [...template];
let uniqueCourses;
let uniqueTeachers;

window.onload = () => {
    let preloader = document.querySelector('.wrap');
    let loading = document.getElementById('loading')

    loading.classList.add('show');
    loading.classList.remove('hide');

    setTimeout(() => {
        preloader.classList.add('fadeout')
        console.log("loaded");
    },800)
}

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

    let scteachers = []

    for (let i=0; i<6; i++) {
        scteachers[i] = document.getElementById(`c${i+1}teacher`); 

        scteachers[i].addEventListener("keyup", (event) => {
            removeElement();
            let count = 0;

            uniqueTeachers.forEach((element) => {
                if (element.toLowerCase().startsWith(scteachers[i].value.toLowerCase()) && scteachers[i].value.length > 0 && count <= 4) {

                    let listItem = document.createElement("li");
                    listItem.classList.add("list-items");
                    listItem.style.cursor = "pointer";

                    let word = "<b>" + element.substr(0,scteachers[i].value.length) + "</b>";
                    word += element.substr(scteachers[i].value.length);
                    
                    listItem.innerHTML = word;
                    document.querySelector(`.listT${i+1}`).appendChild(listItem);

                    listItem.addEventListener("click",function(event){
                        scteachers[i].value = element;
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
    let tschedule = [];

    let scSubmit = document.querySelector(".scsubmit");

    this.document.getElementById("c1input").value = "Eng 3 AB";
    this.document.getElementById("c2input").value = "AP US Hist AB";
    this.document.getElementById("c3input").value = "AP Calculus AB";
    this.document.getElementById("c4input").value = "Art in Motion 1/2";
    this.document.getElementById("c5input").value = "AP Comp Sci A";
    this.document.getElementById("c6input").value = "AP Physics 1";
    this.document.getElementById("c7input").value = "ELD 11";
    this.document.getElementById("c8input").value = "Art in Motion 1/2";

    this.document.getElementById("c1teacher").value = "Zamora, P"
    this.document.getElementById("c2teacher").value = "Monahan, K"
    this.document.getElementById("c3teacher").value = "Diosdado, A"
    this.document.getElementById("c4teacher").value = "Le, C"
    this.document.getElementById("c5teacher").value = "Salas, J"
    this.document.getElementById("c6teacher").value = "McClure, K"

    scSubmit.innerHTML = "Find Solution"

    scSubmit.addEventListener("click",function(event) {
        schedule = [];

        tschedule = [];
        for (let i=0; i<6; i++) {
            tschedule.push(document.getElementById("c" + (i+1) + "teacher").value);
        }

        let invalidIndexT = [];
        
        for (let i=0; i<tschedule.length; i++) {
            let iter = true;

            for (let j=0; j<courses.length; j++) {
                if (courses[j].teacher == tschedule[i]) {
                    iter = false;
                }
            }
            
            if (iter) {
                invalidIndexT.push(i + 1);
            }
        }

        cschedule = [];

        for (let i=0; i<6; i++) {
            cschedule.push(document.getElementById("c" + (i+1) + "input").value);
        }

        let invalidIndex = [];
        console.log(tschedule)
        for (let i=0; i<cschedule.length; i++) {
            let iter = true;

            for (let j=0; j<courses.length; j++) {
                if (courses[j].name == cschedule[i] && iter && courses[j].period == i+1 && courses[j].teacher == tschedule[i]) {
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
            let currentTeacher = document.getElementById("c" + (i + 1) + "teacher");

            currentInput.style.borderColor = "rgb(183, 183, 183)";
            currentTeacher.style.borderColor = "rgb(183, 183, 183)";
        }

        for (let i = 0; i < invalidIndex.length; i++) {
          let currentInput = document.getElementById("c" + invalidIndex[i] + "input");

          currentInput.style.borderColor = "red";
        }

        for (let i = 0; i < invalidIndexT.length; i++) {
            let currentInput = document.getElementById("c" + invalidIndexT[i] + "teacher");
  
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

        if (invalidIndex.length != 0 || wr != true || er != true || invalidIndexT.length != 0) {
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

            sortSolutions(solutions);

            console.log(schedule)

            errorMsg.style.color = "black";
            errorMsg.innerText = "Validating schedule...";

            for (let i=0; i<routes+1; i++) {
                await new Promise(resolve => setTimeout(() => {
                    errorMsg.innerText = `Loading routes (${i+1}/${routes})...`;
                    resolve();
                }, Math.random()*60));
            }

            errorMsg.innerText = `Finalizing schedule...`

            let solutionsBox = document.querySelector(".scroll");

            setTimeout(() => {
                createSolutionBox(solutions,schedule);
                errorMsg.innerText = ``
                scSubmit.innerHTML = `Find Solution`
                solutionsBox.scrollIntoView({behavior: 'smooth'});
            },500)
        }

    });
});

let solutionsBox = document.querySelector(".solutionbox");
solutionsBox.style.display = "none";

function createSolutionBox(solutions,oriSchedule) {
    solutionsBox.style.display = "grid";

    let cardsBox = document.querySelector('.cardsbox');
    let psolutions = solutions.possibleSchedules
    let csolutions = solutions.changes
    let dsolutions = solutions.details

    cardsBox.innerHTML = "";

    let numOfS = document.getElementById('numOf')
    let max;

    if (solutions.changes.length == 0) {
        numOfS.innerHTML = `There is no possible schedule :(`
        max = 0;
    } else if (solutions.changes.length == 1) {
        numOfS.innerHTML = `Showing ${solutions.changes.length} out of ${solutions.changes.length} possible schedule`
        max = psolutions.length;
    } else if (solutions.changes.length < 8) {
        numOfS.innerHTML = `Showing ${solutions.changes.length} out of ${solutions.changes.length} possible schedules`
        max = psolutions.length;
    } else {
        numOfS.innerHTML = `Showing 8 out of ${solutions.changes.length} possible schedules`
        max = 8;
    }

    let configure = configureC(solutions.details);

    for (let i=0; i<max; i++) {
        let card = `<div class="scard js-scroll">
        <div class="sqtitle">Schedule #${i+1}</div>
        <div class="scardheader">
            <div class="scardheadername">
                Period
            </div>
            <div class="scardheaderperiod">
                Course
            </div>
        </div>`

        for (let j=0; j<6; j++) {
            if (j == configure[i][0]-1) {
                card += `<div class="scardcourse" id="scard${j+1}">
                <div>${j+1}</div>
                <div class="wantedS">${psolutions[i][j].name}</div>
                </div>`

            } else {
                let contained = false;

                for (let k=1; k<configure[i].length; k++) {
                    if (j == configure[i][k]-1) {
                        contained = true;
                    }
                }

                if (contained) {
                    card += `<div class="scardcourse" id="scard${j+1}">
                    <div>${j+1}</div>
                    <div class="changedS">${psolutions[i][j].name}</div>
                    </div>`
                } else {
                    card += `<div class="scardcourse" id="scard${j+1}">
                    <div>${j+1}</div>
                    <div>${psolutions[i][j].name}</div>
                    </div>`
                }
            }
        }

        card += `<div class="changesMade">Changes made: ${csolutions[i]}</div><ul class="dsolutions">`

        for (let j=0; j<dsolutions[i].length; j++) {
            card += `<li class="ditem">${dsolutions[i][j]}</li>`
        }

        card += `</ul>`;

        cardsBox.innerHTML += card;
    }

    const scrollOffset = 0;

    const scrollElements = document.querySelectorAll(".js-scroll");

    function elementInView(el, offset = 0) {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) - offset)
        );
    };

    function displayScrollElement(index) {
        if (index % 2 == 0) {
            scrollElements[index].classList.add('scrolled');
        } else {
            scrollElements[index].classList.add('scrolledAlt');
        }
    }

    function hideScrollElement(index) {
        if (index % 2 == 0) {
            scrollElements[index].classList.remove('scrolled');
        } else {
            scrollElements[index].classList.remove('scrolledAlt');
        }
    }

    function handleScrollAnimation() {
        for (let i=0; i<scrollElements.length; i++) {
            if (elementInView(scrollElements[i], scrollOffset)) {
                displayScrollElement(i);
            } else {
                hideScrollElement(i);
            }
        }
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    })

    let solutionCards = document.querySelectorAll('.scard');
    let solutionM = solutions.modified;

    let classChoices = [];
    
    for (let i=0; i<solutionCards.length; i++) {
        solutionCards[i].addEventListener('click', event => {     
            classChoices = [];      
            for (let j=0; j<solutionM[i].length; j++) {
                let currentChoices = [];

                for (let k=0; k<courses.length; k++) {
                    if (courses[k].name == solutionM[i][j][1] && courses[k].period == solutionM[i][j][0]) {
                        currentChoices.push(courses[k]);
                    }
                }

                classChoices.push(currentChoices);
            }

            promptSwitch(classChoices,oriSchedule);
        });
    }

    function promptSwitch(currentChoices,oriSchedule) {
        console.log(currentChoices)

        let switchBox = document.querySelector('.switchbox');
        let switchCourses = document.querySelector('.switchlist');
        let close = document.querySelector('.close');

        let droppedCourse = [];

        for (let i=0; i<currentChoices.length; i++) {
            console.log("e")
            for (let j=0; j<oriSchedule.length; j++) {
                if (currentChoices[i][0].period == oriSchedule[j].period) {
                    droppedCourse.push(oriSchedule[j]);
                }
            }
        }

        

        close.addEventListener('click', event => {
            switchBox.classList.remove("active");
        });

        switchBox.classList.add("active");

        switchCourses.innerHTML = `<li class="switchtop">
        <div class="switchperiods">Period</div>
        <div>Course</div>
        <div>Teacher</div>
        <div>Updated Students</div>
        </li>`;

        for (let i=0; i<currentChoices.length; i++) {
            let newListItem = document.createElement('li');
            newListItem.classList.add('switchcourses')
            
            newListItem.innerHTML += 
            `<div class="switchperiods">${currentChoices[i][0].getPeriod()}</div>
            <div>${currentChoices[i][0].getName()}</div>`

            let dropdown = document.createElement('select');
            dropdown.classList.add('sdropdown');
                
            for (let j=0; j<currentChoices[i].length; j++) {
                dropdown.innerHTML += `<option>${currentChoices[i][j].getTeacher()}</option>`
            }

            newListItem.appendChild(dropdown);

            newListItem.innerHTML += `<div>${Number(currentChoices[i][0].students)+1}  (+1)</div>`

            switchCourses.appendChild(newListItem);
        }

        for (let i=0; i<droppedCourse.length; i++) {
            let newListItem = document.createElement('li');
            newListItem.classList.add('switchcourses')
            
            newListItem.innerHTML += 
            `<div class="switchperiods">${droppedCourse[i].period}</div>
            <div>${droppedCourse[i].name}</div>
            <div>${droppedCourse[i].teacher}</div>`

            newListItem.innerHTML += `<div>${Number(droppedCourse[i].students)-1}  (-1)</div>`

            switchCourses.appendChild(newListItem);
        }
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
            <div class="coursestudents">${courses[i].students}</div>
        <div>`
    }

    uniqueCourses = new Set();
    uniqueTeachers = new Set();

    for (let i=0; i<courses.length; i++) {
        uniqueCourses.add(courses[i].name);
    }

    for (let i=0; i<courses.length; i++) {
        uniqueTeachers.add(courses[i].teacher)
    }
}

