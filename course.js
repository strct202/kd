export class Course {
    constructor(name,period,teacher,students) {
        this.name = name;
        this.period = period;
        this.teacher = teacher;
        this.students = students;
    }

    getName() {
        return this.name;
    }

    getPeriod() {
        return this.period;
    }

    getTeacher() {
        return this.teacher;
    }
}   

let template = [];

function newCourse(name,period,teacher,students) {
    template.push(new Course(name,period,teacher,students));
}

init();

function init() {
    newCourse("Geom AB","0","Aguilera, M", "25");
    newCourse("Pre-Calculus AB","1","Aguilera, M", "25");
    newCourse("Geom AB","2","Aguilera, M", "25");
    newCourse("Algebra 2 AB Hon","3","Aguilera, M", "25");
    newCourse("Algebra 2 AB Hon","4","Aguilera, M", "25");
    newCourse("Pre-Calculus AB","5","Aguilera, M", "25");

    newCourse("Government","1","Andrade, M", "25")
    newCourse("Government","2","Andrade, M", "25")
    newCourse("Psychology","4","Andrade, M", "25")
    newCourse("World Geo","5","Andrade, M", "25")
    newCourse("Government","5","Andrade, M", "25")

    newCourse("English 2 CT","2","Aparicio, Y", "25")
    newCourse("English 2 CT","3","Aparicio, Y", "25")
    newCourse("English 4 CT","4","Aparicio, Y", "25")
    newCourse("English 3 CT","5","Aparicio, Y", "25")
    newCourse("HS Resource","6","Aparicio, Y", "25")

    newCourse("AP Statistics","1","Baraclough, G", "25");
    newCourse("AP Statistics","2","Baraclough, G", "25");
    newCourse("AP Statistics","3","Baraclough, G", "25");
    newCourse("AP Comp Sci","5","Baraclough, G", "25");
    newCourse("AP Comp Sci","6","Baraclough, G", "25");
    
    newCourse("Algebra 1 CT","1","Bravo, J", "25");
    newCourse("HS Alg Ready","3","Bravo, J", "25");
    newCourse("HS Algebra","4","Bravo, J", "25");
    newCourse("HS Algebra","5","Bravo, J", "25");
    newCourse("HS Alg Ready","6","Bravo, J", "25");

    newCourse("Badminton Fund","1","Brummett, S", "25");
    newCourse("Badminton Fund","2","Brummett, S", "25");
    newCourse("Bball Fund","3","Brummett, S", "25");
    newCourse("WT Train AB","4","Brummett, S", "25");
    newCourse("9th Grade PE AB","5","Brummett, S", "25");
    newCourse("Athletics","6","Brummett, S", "25");
      
    newCourse("Peer Helping 1","1","Budde, C", "25");
    newCourse("Peer Helping 2","2","Budde, C", "25");
    newCourse("Peer Helping 1","3","Budde, C", "25");
    newCourse("Peer Helping 1","4","Budde, C", "25");
    newCourse("Peer Helping 1","6","Budde, C", "25");

    newCourse("Python","1","Cameron, D", "25");
    newCourse("Python","2","Cameron, D", "25");
    newCourse("Chemistry AB","3","Cameron, D", "25");
    newCourse("Chemistry AB","4","Cameron, D", "25");
    newCourse("Chemistry AB","5","Cameron, D", "25");
    newCourse("Chemistry AB","6","Cameron, D", "25");

    newCourse("US History","2","Carney, J", "25");
    newCourse("US History AB","3","Carney, J", "25");
    newCourse("Economics","4","Carney, J", "25");
    newCourse("US History AB","5","Carney, J", "25");
    newCourse("Athletics","6","Carney, J", "25");

    newCourse("Eng 2 AB Hon","1","Chang, L", "25");
    newCourse("Eng 2 AB Hon","2","Chang, L", "25");
    newCourse("ELD 11","3","Chang, L", "25");

    newCourse("Algebra 1 AB","1","Chao, B", "25");
    newCourse("Algebra 1 AB","2","Chao, B", "25");
    newCourse("Geom AB","3","Chao, B", "25");
    newCourse("Algebra 1 AB","4","Chao, B", "25");
    newCourse("Algebra 1 AB","5","Chao, B", "25");

    newCourse("9th Grade Trans","2","Cruz, M", "25");
    newCourse("9th Grade Trans","3","Cruz, M", "25");
    newCourse("9th Grade Trans","4","Cruz, M", "25");
    newCourse("9th Grade Trans","5","Cruz, M", "25");
    newCourse("9th Grade Trans","6","Cruz, M", "25");

    newCourse("Span 3 AB","1","Del Palacio, P", "25");
    newCourse("Span 2 AB","2","Del Palacio, P", "25");
    newCourse("Span 1 AB","3","Del Palacio, P", "25");
    newCourse("Span 1 AB","5","Del Palacio, P", "25");
    newCourse("Span 1 AB","6","Del Palacio, P", "25");

    newCourse("Eng 2 AB Hon","0","Diaz, L", "25");
    newCourse("Eng 2 AB","1","Diaz, L", "25");
    newCourse("Eng 1 AB","3","Diaz, L", "25");
    newCourse("LTEL 9","4","Diaz, L", "25");
    newCourse("Eng 2 AB","5","Diaz, L", "25");

    newCourse("Algebra 2 AB","0","Diosdado, A", "25");
    newCourse("Algebra 2 AB","1","Diosdado, A", "25");
    newCourse("AP Calculus AB","3","Diosdado, A", "25");
    newCourse("AP Calculus AB","4","Diosdado, A", "25");
    newCourse("Algebra 2 AB","5","Diosdado, A", "25");
    newCourse("Algebra 2 AB","6","Diosdado, A", "25");

    newCourse("AP Eng Lang","1","Doring, J", "25");
    newCourse("VISP","2","Doring, J", "25");
    newCourse("Eng 4 AB","3","Doring, J", "25");
    newCourse("Eng 3 AB","5","Doring, J", "25");
    newCourse("Eng 4 AB","6","Doring, J", "25");

    newCourse("Eng 1 AB","2","Drew, M", "25");
    newCourse("AP Eng Lit AB","3","Drew, M", "25");
    newCourse("Eng 1 AB","4","Drew, M", "25");
    newCourse("Jour 1 AB","5","Drew, M", "25");
    
    newCourse("Eng 1 AB","1","Facher, S", "25");
    newCourse("Eng 4 AB","2","Facher, S", "25");
    newCourse("Eng 4 AB","3","Facher, S", "25");
    newCourse("Eng 4 AB","4","Facher, S", "25");
    newCourse("Eng 1 AB","5","Facher, S", "25");
    newCourse("Eng 1 AB","6","Facher, S", "25");

    newCourse("ECR","1","Gafford, J", "25");
    newCourse("APEX","2","Gafford, J", "25");
    newCourse("APEX","3","Gafford, J", "25");
    newCourse("Drama 1/2","4","Gafford, J", "25");
    newCourse("Stagecraft 1/2","6","Gafford, J", "25");

    newCourse("Woodcraft 1 AB","1","Gilmour, M", "25");
    newCourse("Woodcraft 1 AB","2","Gilmour, M", "25");
    newCourse("Woodcraft 1 AB","3","Gilmour, M", "25");
    newCourse("Woodcraft 1 AB","4","Gilmour, M", "25");
    newCourse("woodcraft 2 AB","5","Gilmour, M", "25");
    
    newCourse("ELD TOSA","1","Gomez, K", "25");
    newCourse("ELD TOSA","2","Gomez, K", "25");
    newCourse("ELD TOSA","3","Gomez, K", "25");
    newCourse("ELD TOSA","4","Gomez, K", "25");
    newCourse("ELD TOSA","5","Gomez, K", "25");

    newCourse("9th Grade PE AB","1","Gonzales, E", "25");
    newCourse("9th Grade PE AB","2","Gonzales, E", "25");
    newCourse("Co-Ed PE AB","3","Gonzales, E", "25");
    newCourse("Leadership ASB","4","Gonzales, E", "25");
    newCourse("ASB Prep/Colab","5","Gonzales, E", "25");

    newCourse("AP Span Lang AB","1","Gurrola, A", "25");
    newCourse("AP Span Lang AB","2","Gurrola, A", "25");
    newCourse("Span 2 AB","3","Gurrola, A", "25");
    newCourse("Span 2 AB","4","Gurrola, A", "25");
    newCourse("Span 3 AB","5","Gurrola, A", "25");
    newCourse("Span 2 AB","6","Gurrola, A", "25");

    newCourse("HS World His","1","Hernandez, G", "25");
    newCourse("HS Resource","2","Hernandez, G", "25");
    newCourse("HS US History","3","Hernandez, G", "25");
    newCourse("HS Resource","5","Hernandez, G", "25");
    newCourse("US History CT","6","Hernandez, G", "25");

    newCourse("Goem AB","1","Ho, L", "25");
    newCourse("Geom AB","2","Ho, L", "25");
    newCourse("Pre Cal AB Hon","3","Ho, L", "25");
    newCourse("Pre Cal AB Hon","4","Ho, L", "25");
    
    newCourse("AP Art 2D","1","Hopper, T", "25");
    newCourse("Graphic Des 1/2","2","Hopper, T", "25");
    newCourse("Intro Art AB","4","Hopper, T", "25");
    newCourse("Caramics","5","Hopper, T", "25");
    newCourse("Ceramics","6","Hopper, T", "25");

    newCourse("AP Psychology","2","Kammerman, R", "25");
    newCourse("AP Psychology","3","Kammerman, R", "25");
    newCourse("US History","4","Kammerman, R", "25");
    newCourse("AP Psychology","5","Kammerman, R", "25");
    newCourse("US History","6","Kammerman, R", "25");

    newCourse("Algebra 1 AB","1","Kawai, L", "25");
    newCourse("AVID-9","3","Kawai, L", "25");
    newCourse("Statistics","4","Kawai, L", "25");
    newCourse("Algebra 1 AB","5","Kawai, L", "25");
    newCourse("AVID-9","6","Kawai, L", "25");

    newCourse("Intro to Art","1","Le, C", "25");
    newCourse("Intro to Art","3","Le, C", "25");
    newCourse("Art in Motion 1/2","4","Le, C", "25");
    newCourse("Intro to Art","5","Le, C", "25");
    newCourse("Intro to Art","6","Le, C", "25");

    newCourse("Bio AB Hon","0","Leyda, L", "25");
    newCourse("Human Anatomy","1","Leyda, L", "25");
    newCourse("Bio AB Hon","2","Leyda, L", "25");
    newCourse("Bio AB Hon","3","Leyda, L", "25");
    newCourse("Human Anatomy","5","Leyda, L", "25");
    
    newCourse("Co-Ed PE AB","1","Lopez, M", "25");
    newCourse("9th Grade PE AB","2","Lopez, M", "25");
    newCourse("Modified PE AB","3","Lopez, M", "25");
    newCourse("AD Period","4","Lopez, M", "25");
    newCourse("9th Grade PE AB","5","Lopez, M", "25");
    newCourse("Athletics","6","Lopez, M", "25");

    newCourse("Eng 3 AB","2","Lopez, P", "25");
    newCourse("Eng 3 AB","3","Lopez, P", "25");
    newCourse("Eng 4 AB","4","Lopez, P", "25");
    newCourse("Eng 4 AB","5","Lopez, P", "25");
    newCourse("Eng 1 AB","6","Lopez, P", "25");

    newCourse("ELD 1","1","Lydon, K", "25");
    newCourse("Eng 1 AB","2","Lydon, K", "25");
    newCourse("Eng 1 AB","4","Lydon, K", "25");
    newCourse("ELD 1","5","Lydon, K", "25");
    newCourse("ELD 9","6","Lydon, K", "25");

    newCourse("Mandarin 2","1","Mao, Y", "25");
    newCourse("AP Chinese","2","Mao, Y", "25");
    newCourse("Mandarin 3","3","Mao, Y", "25");
    newCourse("Mandarin 1","4","Mao, Y", "25");
    newCourse("Mandarin 1","5","Mao, Y", "25");
    newCourse("Mandarin 2","6","Mao, Y", "25");

    newCourse("HS Eng 1","1","Mateo, S", "25");
    newCourse("HS Eng 4","2","Mateo, S", "25");
    newCourse("Eng 1 CT","3","Mateo, S", "25");
    newCourse("HS Eng 3","4","Mateo, S", "25");
    newCourse("HS Eng 3","6","Mateo, S", "25");

    newCourse("AP Govt","2","Matthews, P", "25");
    newCourse("Economics","3","Matthews, P", "25");
    newCourse("Intro to Econ","4","Matthews, P", "25");
    newCourse("Economics","5","Matthews, P", "25");
    newCourse("AP Govt","6","Matthews, P", "25");

    newCourse("AP Phys C Mech","1","McClure, K", "25");
    newCourse("Conceptual Phys","3","McClure, K", "25");
    newCourse("AP Physics 1","4","McClure, K", "25");
    newCourse("Applied Physics","5","McClure, K", "25");
    newCourse("AP Physics 1","6","McClure, K", "25");

    newCourse("Eng 3 AB","1","Mendez, J", "25");
    newCourse("Eng 1 AB Hon","2","Mendez, J", "25");
    newCourse("Eng 1 AB","3","Mendez, J", "25");
    newCourse("Eng 1 AB Hon","5","Mendez, J", "25");
    newCourse("Eng 3 AB","6","Mendez, J", "25");

    newCourse("Biology AB","1","Merica, N", "25");
    newCourse("Biology AB","2","Merica, N", "25");
    newCourse("Biology AB","3","Merica, N", "25");
    newCourse("Biology AB","4","Merica, N", "25");
    newCourse("Biology AB","6","Merica, N", "25");

    newCourse("CBI 1","1","Mitchell, T", "25");
    newCourse("CBI 1","2","Mitchell, T", "25");
    newCourse("CBI 1","4","Mitchell, T", "25");
    newCourse("CBI 1","5","Mitchell, T", "25");
    newCourse("CBI 1","6","Mitchell, T", "25");

    newCourse("US History","1","Monahan, K", "25");
    newCourse("AP US Hist AB","2","Monahan, K", "25");
    newCourse("AP US Hist AB","3","Monahan, K", "25");
    newCourse("AP US Hist AB","5","Monahan, K", "25");
    newCourse("AP US Hist AB","6","Monahan, K", "25");

    newCourse("Health","2","Monteleone, K", "25");
    newCourse("Health","3","Monteleone, K", "25");
    newCourse("Health","4","Monteleone, K", "25");
    newCourse("Health","5","Monteleone, K", "25");
    newCourse("Health","6","Monteleone, K", "25");

    newCourse("ELD Credit Rec","1","Nguyen, S", "25");
    newCourse("ELD 10","2","Nguyen, S", "25");
    newCourse("Eng 2 AB","4","Nguyen, S", "25");
    newCourse("LTEL 10","5","Nguyen, S", "25");
    newCourse("Eng 2 AB","6","Nguyen, S", "25");

    newCourse("Life Skills","1","Pech, A", "25");
    newCourse("Life Skills","2","Pech, A", "25");
    newCourse("Life Skills","4","Pech, A", "25");
    newCourse("Life Skills","5","Pech, A", "25");
    newCourse("Life Skills","6","Pech, A", "25");

    newCourse("World Hist AB","1","Peters, S", "25");
    newCourse("AP World Hist","2","Peters, S", "25");
    newCourse("AP World Hist","3","Peters, S", "25");
    newCourse("AP World Hist","4","Peters, S", "25");
    newCourse("AP World Hist","5","Peters, S", "25");
    
    newCourse("Music Appreciation","1","Pitts, D", "25");
    newCourse("Concert Choir","2","Pitts, D", "25");
    newCourse("Chamber Choir","3","Pitts, D", "25");
    newCourse("Women Chorus","4","Pitts, D", "25");
    newCourse("Vocal Ensemble","6","Pittts, D", "25");

    newCourse("Biology AB","1","Ratliff, S", "25");
    newCourse("Biology AB","3","Ratliff, S", "25");
    newCourse("Biology AB","4","Ratliff, S", "25");
    newCourse("Biology AB","5","Ratliff, S", "25");
    newCourse("Biology AB","6","Ratliff, S", "25");

    newCourse("HS Phys Science","1","Rivas, S", "25");
    newCourse("HS Life Science","2","Rivas, S", "25");
    newCourse("HS Phys Science","3","Rivas, S", "25");
    newCourse("HS Life Science","5","Rivas, S", "25");
    newCourse("Chemistry CT","6","Rivas, S", "25");

    newCourse("Span 1 AB","1","Rivera, X", "25");
    newCourse("Span 1 AB","2","Rivera, X", "25");
    newCourse("Span/Sp 2 AB","3","Rivera, X", "25");
    newCourse("Span 1 AB","4","Rivera, X", "25");
    newCourse("Span 1 AB","5","Rivera, X", "25");
    newCourse("Span/Sp 3 AB","6","Rivera, X", "25");

    newCourse("March/Conc","0","Romero, M", "25");
    newCourse("Music Apprec","2","Romero, M", "25");
    newCourse("Orchestra AB","3","Romero, M", "25");
    newCourse("Jass Band","4","Romero, M", "25");
    newCourse("Orchestra AB","5","Romero, M", "25");
    
    newCourse("Algebra 2 AB","1","Salas, C", "25");
    newCourse("Algebra 2 AB","2","Salas, C", "25");
    newCourse("Algebra 2 AB","3","Salas, C", "25");
    newCourse("Calculus AB","4","Salas, C", "25");

    newCourse("AP Calculus BC","2","Salas, J", "25");
    newCourse("AP Comp Sci A","3","Salas, J", "25");
    newCourse("AP Comp Sci A","4","Salas, J", "25");
    newCourse("AP Comp Sci A","5","Salas, J", "25");
    newCourse("Algebra 1 AB","6","Salas, J", "25");

    newCourse("Chemistry AB","1","Salcedo, J", "25");
    newCourse("Chemistry AB","2","Salcedo, J", "25");
    newCourse("Chemistry AB","3","Salcedo, J", "25");
    newCourse("Chemistry AB","4","Salcedo, J", "25");
    newCourse("AP Chemistry AB","6","Salcedo, J", "25");

    newCourse("9th Grade PE AB","1","Sanin, H", "25");
    newCourse("Wt Train AB","3","Sanin, H", "25");
    newCourse("9th Grade PE AB","4","Sanin, H", "25");
    newCourse("AD Period","5","Sanin, H", "25");
    newCourse("Athletics","6","Sanin, H", "25");

    newCourse("Government","1","Shima, T", "25");
    newCourse("Wor Hist AB","2","Shima, T", "25");
    newCourse("Wor Hist AB","3","Shima, T", "25");
    newCourse("Wor Hist AB","4","Shima, T", "25");
    newCourse("Wor Hist AB","5","Shima, T", "25");
    newCourse("Wor Hist AB","6","Shima, T", "25");

    newCourse("Eng 4 AB","1","Straker, T", "25");
    newCourse("Eng 2 AB","2","Straker, T", "25");
    newCourse("Eng 2 AB","3","Straker, T", "25");
    newCourse("ELD 12","5","Straker, T", "25");
    newCourse("Eng 4 AB","6","Straker, T", "25");

    newCourse("AP Chemistry AB","1","Strom, C", "25");
    newCourse("Applied Chem","2","Strom, C", "25");
    newCourse("Applied Chem","3","Strom, C", "25");
    newCourse("Leadership ASB","4","Strom, C", "25");
    newCourse("ASB Prep/Colab","5","Strom, C", "25");
    
    newCourse("Intro Art AB","0","Suess, E", "25");
    newCourse("Intro Art AB","2","Suess, E", "25");
    newCourse("Intro Art AB","3","Suess, E", "25");
    newCourse("Draw Paint AB","4","Suess, E", "25");
    newCourse("Intro Art AB","6","Suess, E", "25");

    newCourse("Co/Ed Ath","0","Swanson, S", "25");
    newCourse("Alt Fitness","1","Swanson, S", "25");
    newCourse("Wt Train AB","2","Swanson, S", "25");
    newCourse("9th Grade PE AB","3","Swanson, S", "25");
    newCourse("Wt Train AB","5","Swanson, S", "25");
    newCourse("Athletics","6","Swanson, S", "25");

    newCourse("Dance 1","5","Tacandong, M", "25");
    newCourse("Dance 1","6","Tacandong, M", "25");

    newCourse("Algebra 1 AB","1","Tang, I", "25");
    newCourse("Algebra 1 AB","2","Tang, I", "25");
    newCourse("Pre Calculus AB","3","Tang, I", "25");
    newCourse("Pre Calculus AB","4","Tang, I", "25");
    newCourse("Algebra 1 AB","5","Tang, I", "25");
    newCourse("Algebra 1 AB","6","Tang, I", "25");

    newCourse("Business Mgmt 2","1","Thorp, J", "25");
    newCourse("Business Mgmt 1","2","Thorp, J", "25");
    newCourse("Bueiness Mgmt 1","3","Thorp, J", "25");
    newCourse("Business Mgmt 1","4","Thorp, J", "25");
    newCourse("Business Mgmt 1","6","Thorp, J", "25");

    newCourse("Biology AB","0","Traeger, D", "25");
    newCourse("AP Environ Sci","1","Traeger, D", "25");
    newCourse("AP Environ Sci","2","Traeger, D", "25");
    newCourse("AP Environ Sci","4","Traeger, D", "25");
    newCourse("AP Environ Sci","5","Traeger, D", "25");
    
    newCourse("AP Biology AB","1","Velekei, T", "25");
    newCourse("AP Biology AB","2","Velekei, T", "25");
    newCourse("Chemistry AB","4","Velekei, T", "25");
    newCourse("Chemistry AB","5","Velekei, T", "25");
    newCourse("Chemistry AB","6","Velekei, T", "25");

    newCourse("Geom AB Hon","1","Yee, K", "25");
    newCourse("Alg Readiness","2","Yee, K", "25");
    newCourse("Geom AB Hon","3","Yee, K", "25");
    newCourse("Alg Readiness","4","Yee, K", "25");
    
    newCourse("Adv Sp AB/Oral","0","Yuill, D", "25");
    newCourse("Begin Speech AB","1","Yuill, D", "25");
    newCourse("Adv Sp AB/Oral","2","Yuill, D", "25");
    newCourse("Adv Sp AB/Oral","3","Yuill, D", "25");
    newCourse("Adv Sp AB/Oral","4","Yuill, D", "25");
    newCourse("Adv Sp AB/Oral","5","Yuill, D", "25");

    newCourse("AP Eng Lang","0","Zamora, P", "25");
    newCourse("Eng 3 AB","1","Zamora, P", "25");
    newCourse("AP Eng Lang","2","Zamora, P", "25");
    newCourse("Eng 3 AB","4","Zamora, P", "25");
    newCourse("Yearbook AB","5","Zamora, P", "25");
}

export {
    template
}
