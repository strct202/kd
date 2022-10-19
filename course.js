export class Course {
    constructor(name,period,teacher) {
        this.name = name;
        this.period = period;
        this.teacher = teacher;
    }

    getName() {
        return this.name;
    }

    getPeriod() {
        return this.period;
    }
}   

let template = [];

function newCourse(name,period,teacher) {
    template.push(new Course(name,period,teacher));
}

init();

function init() {
    newCourse("Geom AB","0","Aguilera, M");
    newCourse("Pre-Calculus AB","1","Aguilera, M");
    newCourse("Geom AB","2","Aguilera, M");
    newCourse("Algebra 2 AB Hon","3","Aguilera, M");
    newCourse("Algebra 2 AB Hon","4","Aguilera, M");
    newCourse("Pre-Calculus AB","5","Aguilera, M");

    newCourse("Government","1","Andrade, M")
    newCourse("Government","2","Andrade, M")
    newCourse("Psychology","4","Andrade, M")
    newCourse("World Geo","5","Andrade, M")
    newCourse("Government","5","Andrade, M")

    newCourse("English 2 CT","2","Aparicio, Y")
    newCourse("English 2 CT","3","Aparicio, Y")
    newCourse("English 4 CT","4","Aparicio, Y")
    newCourse("English 3 CT","5","Aparicio, Y")
    newCourse("HS Resource","6","Aparicio, Y")

    newCourse("AP Statistics","1","Baraclough, G");
    newCourse("AP Statistics","2","Baraclough, G");
    newCourse("AP Statistics","3","Baraclough, G");
    newCourse("AP Comp Sci","5","Baraclough, G");
    newCourse("AP Comp Sci","6","Baraclough, G");
    
    newCourse("Algebra 1 CT","1","Bravo, J");
    newCourse("HS Alg Ready","3","Bravo, J");
    newCourse("HS Algebra","4","Bravo, J");
    newCourse("HS Algebra","5","Bravo, J");
    newCourse("HS Alg Ready","6","Bravo, J");

    newCourse("Badminton Fund","1","Brummett, S");
    newCourse("Badminton Fund","2","Brummett, S");
    newCourse("Bball Fund","3","Brummett, S");
    newCourse("WT Train AB","4","Brummett, S");
    newCourse("9th Grade PE AB","5","Brummett, S");
    newCourse("Athletics","6","Brummett, S");
      
    newCourse("Peer Helping 1","1","Budde, C");
    newCourse("Peer Helping 2","2","Budde, C");
    newCourse("Peer Helping 1","3","Budde, C");
    newCourse("Peer Helping 1","4","Budde, C");
    newCourse("Peer Helping 1","6","Budde, C");

    newCourse("Python","1","Cameron, D");
    newCourse("Python","2","Cameron, D");
    newCourse("Chemistry AB","3","Cameron, D");
    newCourse("Chemistry AB","4","Cameron, D");
    newCourse("Chemistry AB","5","Cameron, D");
    newCourse("Chemistry AB","6","Cameron, D");

    newCourse("US History","2","Carney, J");
    newCourse("US History AB","3","Carney, J");
    newCourse("Economics","4","Carney, J");
    newCourse("US History AB","5","Carney, J");
    newCourse("Athletics","6","Carney, J");

    newCourse("Eng 2 AB Hon","1","Chang, L");
    newCourse("Eng 2 AB Hon","2","Chang, L");
    newCourse("ELD 11","3","Chang, L");

    newCourse("Algebra 1 AB","1","Chao, B");
    newCourse("Algebra 1 AB","2","Chao, B");
    newCourse("Geom AB","3","Chao, B");
    newCourse("Algebra 1 AB","4","Chao, B");
    newCourse("Algebra 1 AB","5","Chao, B");

    newCourse("9th Grade Trans","2","Cruz, M");
    newCourse("9th Grade Trans","3","Cruz, M");
    newCourse("9th Grade Trans","4","Cruz, M");
    newCourse("9th Grade Trans","5","Cruz, M");
    newCourse("9th Grade Trans","6","Cruz, M");

    newCourse("Span 3 AB","1","Del Palacio, P");
    newCourse("Span 2 AB","2","Del Palacio, P");
    newCourse("Span 1 AB","3","Del Palacio, P");
    newCourse("Span 1 AB","5","Del Palacio, P");
    newCourse("Span 1 AB","6","Del Palacio, P");

    newCourse("Eng 2 AB Hon","0","Diaz, L");
    newCourse("Eng 2 AB","1","Diaz, L");
    newCourse("Eng 1 AB","3","Diaz, L");
    newCourse("LTEL 9","4","Diaz, L");
    newCourse("Eng 2 AB","5","Diaz, L");

    newCourse("Algebra 2 AB","0","Diosdado, A");
    newCourse("Algebra 2 AB","1","Diosdado, A");
    newCourse("AP Calculus AB","3","Diosdado, A");
    newCourse("AP Calculus AB","4","Diosdado, A");
    newCourse("Algebra 2 AB","5","Diosdado, A");
    newCourse("Algebra 2 AB","6","Diosdado, A");

    newCourse("AP Eng Lang","1","Doring, J");
    newCourse("VISP","2","Doring, J");
    newCourse("Eng 4 AB","3","Doring, J");
    newCourse("Eng 3 AB","5","Doring, J");
    newCourse("Eng 4 AB","6","Doring, J");

    newCourse("Eng 1 AB","2","Drew, M");
    newCourse("AP Eng Lit AB","3","Drew, M");
    newCourse("Eng 1 AB","4","Drew, M");
    newCourse("Jour 1 AB","5","Drew, M");
    
    newCourse("Eng 1 AB","1","Facher, S");
    newCourse("Eng 4 AB","2","Facher, S");
    newCourse("Eng 4 AB","3","Facher, S");
    newCourse("Eng 4 AB","4","Facher, S");
    newCourse("Eng 1 AB","5","Facher, S");
    newCourse("Eng 1 AB","6","Facher, S");

    newCourse("ECR","1","Gafford, J");
    newCourse("APEX","2","Gafford, J");
    newCourse("APEX","3","Gafford, J");
    newCourse("Drama 1/2","4","Gafford, J");
    newCourse("Stagecraft 1/2","6","Gafford, J");

    newCourse("Woodcraft 1 AB","1","Gilmour, M");
    newCourse("Woodcraft 1 AB","2","Gilmour, M");
    newCourse("Woodcraft 1 AB","3","Gilmour, M");
    newCourse("Woodcraft 1 AB","4","Gilmour, M");
    newCourse("woodcraft 2 AB","5","Gilmour, M");
    
    newCourse("ELD TOSA","1","Gomez, K");
    newCourse("ELD TOSA","2","Gomez, K");
    newCourse("ELD TOSA","3","Gomez, K");
    newCourse("ELD TOSA","4","Gomez, K");
    newCourse("ELD TOSA","5","Gomez, K");

    newCourse("9th Grade PE AB","1","Gonzales, E");
    newCourse("9th Grade PE AB","2","Gonzales, E");
    newCourse("Co-Ed PE AB","3","Gonzales, E");
    newCourse("Leadership ASB","4","Gonzales, E");
    newCourse("ASB Prep/Colab","5","Gonzales, E");

    newCourse("AP Span Lang AB","1","Gurrola, A");
    newCourse("AP Span Lang AB","2","Gurrola, A");
    newCourse("Span 2 AB","3","Gurrola, A");
    newCourse("Span 2 AB","4","Gurrola, A");
    newCourse("Span 3 AB","5","Gurrola, A");
    newCourse("Span 2 AB","6","Gurrola, A");

    newCourse("HS World His","1","Hernandez, G");
    newCourse("HS Resource","2","Hernandez, G");
    newCourse("HS US History","3","Hernandez, G");
    newCourse("HS Resource","5","Hernandez, G");
    newCourse("US History CT","6","Hernandez, G");

    newCourse("Goem AB","1","Ho, L");
    newCourse("Geom AB","2","Ho, L");
    newCourse("Pre Cal AB Hon","3","Ho, L");
    newCourse("Pre Cal AB Hon","4","Ho, L");
    
    newCourse("AP Art 2D","1","Hopper, T");
    newCourse("Graphic Des 1/2","2","Hopper, T");
    newCourse("Intro Art AB","4","Hopper, T");
    newCourse("Caramics","5","Hopper, T");
    newCourse("Ceramics","6","Hopper, T");

    newCourse("AP Psychology","2","Kammerman, R");
    newCourse("AP Psychology","3","Kammerman, R");
    newCourse("US History","4","Kammerman, R");
    newCourse("AP Psychology","5","Kammerman, R");
    newCourse("US History","6","Kammerman, R");

    newCourse("Algebra 1 AB","1","Kawai, L");
    newCourse("AVID-9","3","Kawai, L");
    newCourse("Statistics","4","Kawai, L");
    newCourse("Algebra 1 AB","5","Kawai, L");
    newCourse("AVID-9","6","Kawai, L");

    newCourse("Intro to Art","1","Le, C");
    newCourse("Intro to Art","3","Le, C");
    newCourse("Art in Motion 1/2","4","Le, C");
    newCourse("Intro to Art","5","Le, C");
    newCourse("Intro to Art","6","Le, C");

    newCourse("Bio AB Hon","0","Leyda, L");
    newCourse("Human Anatomy","1","Leyda, L");
    newCourse("Bio AB Hon","2","Leyda, L");
    newCourse("Bio AB Hon","3","Leyda, L");
    newCourse("Human Anatomy","5","Leyda, L");
    
    newCourse("Co-Ed PE AB","1","Lopez, M");
    newCourse("9th Grade PE AB","2","Lopez, M");
    newCourse("Modified PE AB","3","Lopez, M");
    newCourse("AD Period","4","Lopez, M");
    newCourse("9th Grade PE AB","5","Lopez, M");
    newCourse("Athletics","6","Lopez, M");

    newCourse("Eng 3 AB","2","Lopez, P");
    newCourse("Eng 3 AB","3","Lopez, P");
    newCourse("Eng 4 AB","4","Lopez, P");
    newCourse("Eng 4 AB","5","Lopez, P");
    newCourse("Eng 1 AB","6","Lopez, P");

    newCourse("ELD 1","1","Lydon, K");
    newCourse("Eng 1 AB","2","Lydon, K");
    newCourse("Eng 1 AB","4","Lydon, K");
    newCourse("ELD 1","5","Lydon, K");
    newCourse("ELD 9","6","Lydon, K");

    newCourse("Mandarin 2","1","Mao, Y");
    newCourse("AP Chinese","2","Mao, Y");
    newCourse("Mandarin 3","3","Mao, Y");
    newCourse("Mandarin 1","4","Mao, Y");
    newCourse("Mandarin 1","5","Mao, Y");
    newCourse("Mandarin 2","6","Mao, Y");

    newCourse("HS Eng 1","1","Mateo, S");
    newCourse("HS Eng 4","2","Mateo, S");
    newCourse("Eng 1 CT","3","Mateo, S");
    newCourse("HS Eng 3","4","Mateo, S");
    newCourse("HS Eng 3","6","Mateo, S");

    newCourse("AP Govt","2","Matthews, P");
    newCourse("Economics","3","Matthews, P");
    newCourse("Intro to Econ","4","Matthews, P");
    newCourse("Economics","5","Matthews, P");
    newCourse("AP Govt","6","Matthews, P");

    newCourse("AP Phys C Mech","1","McClure, K");
    newCourse("Conceptual Phys","3","Mcclure, K");
    newCourse("AP Physics 1","4","McClure, K");
    newCourse("Applied Physics","5","McClure, K");
    newCourse("AP Physics 1","6","McClure, K");

    newCourse("Eng 3 AB","1","Mendez, J");
    newCourse("Eng 1 AB Hon","2","Mendez, J");
    newCourse("Eng 1 AB","3","Mendez, J");
    newCourse("Eng 1 AB Hon","5","Mendez, J");
    newCourse("Eng 3 AB","6","Mendez, J");

    newCourse("Biology AB","1","Merica, N");
    newCourse("Biology AB","2","Merica, N");
    newCourse("Biology AB","3","Merica, N");
    newCourse("Biology AB","4","Merica, N");
    newCourse("Biology AB","6","Merica, N");

    newCourse("CBI 1","1","Mitchell, T");
    newCourse("CBI 1","2","Mitchell, T");
    newCourse("CBI 1","4","Mitchell, T");
    newCourse("CBI 1","5","Mitchell, T");
    newCourse("CBI 1","6","Mitchell, T");

    newCourse("US History","1","Monahan, K");
    newCourse("AP US Hist AB","2","Monahan, K");
    newCourse("AP US Hist AB","3","Monahan, K");
    newCourse("AP US Hist AB","5","Monahan, K");
    newCourse("AP US Hist AB","6","Monahan, K");

    newCourse("Health","2","Monteleone, K");
    newCourse("Health","3","Monteleone, K");
    newCourse("Health","4","Monteleone, K");
    newCourse("Health","5","Monteleone, K");
    newCourse("Health","6","Monteleone, K");

    newCourse("ELD Credit Rec","1","Nguyen, S");
    newCourse("ELD 10","2","Nguyen, S");
    newCourse("Eng 2 AB","4","Nguyen, S");
    newCourse("LTEL 10","5","Nguyen, S");
    newCourse("Eng 2 AB","6","Nguyen, S");

    newCourse("Life Skills","1","Pech, A");
    newCourse("Life Skills","2","Pech, A");
    newCourse("Life Skills","4","Pech, A");
    newCourse("Life Skills","5","Pech, A");
    newCourse("Life Skills","6","Pech, A");

    newCourse("World Hist AB","1","Peters, S");
    newCourse("AP World Hist","2","Peters, S");
    newCourse("AP World Hist","3","Peters, S");
    newCourse("AP World Hist","4","Peters, S");
    newCourse("AP World Hist","5","Peters, S");
    
    newCourse("Music Appreciation","1","Pitts, D");
    newCourse("Concert Choir","2","Pitts, D");
    newCourse("Chamber Choir","3","Pitts, D");
    newCourse("Women Chorus","4","Pitts, D");
    newCourse("Vocal Ensemble","6","Pittts, D");

    newCourse("Biology AB","1","Ratliff, S");
    newCourse("Biology AB","3","Ratliff, S");
    newCourse("Biology AB","4","Ratliff, S");
    newCourse("Biology AB","5","Ratliff, S");
    newCourse("Biology AB","6","Ratliff, S");

    newCourse("HS Phys Science","1","Rivas, S");
    newCourse("HS Life Science","2","Rivas, S");
    newCourse("HS Phys Science","3","Rivas, S");
    newCourse("HS Life Science","5","Rivas, S");
    newCourse("Chemistry CT","6","Rivas, S");

    newCourse("Span 1 AB","1","Rivera, X");
    newCourse("Span 1 AB","2","Rivera, X");
    newCourse("Span/Sp 2 AB","3","Rivera, X");
    newCourse("Span 1 AB","4","Rivera, X");
    newCourse("Span 1 AB","5","Rivera, X");
    newCourse("Span/Sp 3 AB","6","Rivera, X");

    newCourse("March/Conc","0","Romero, M");
    newCourse("Music Apprec","2","Romero, M");
    newCourse("Orchestra AB","3","Romero, M");
    newCourse("Jass Band","4","Romero, M");
    newCourse("Orchestra AB","5","Romero, M");
    
    newCourse("Algebra 2 AB","1","Salas, C");
    newCourse("Algebra 2 AB","2","Salas, C");
    newCourse("Algebra 2 AB","3","Salas, C");
    newCourse("Calculus AB","4","Salas, C");

    newCourse("AP Calculus BC","2","Salas, J");
    newCourse("AP Comp Sci A","3","Salas, J");
    newCourse("AP Comp Sci A","4","Salas, J");
    newCourse("AP Comp Sci A","5","Salas, J");
    newCourse("Algebra 1 AB","6","Salas, J");

    newCourse("Chemistry AB","1","Salcedo, J");
    newCourse("Chemistry AB","2","Salcedo, J");
    newCourse("Chemistry AB","3","Salcedo, J");
    newCourse("Chemistry AB","4","Salcedo, J");
    newCourse("AP Chemistry AB","6","Salcedo, J");

    newCourse("9th Grade PE AB","1","Sanin, H");
    newCourse("Wt Train AB","3","Sanin, H");
    newCourse("9th Grade PE AB","4","Sanin, H");
    newCourse("AD Period","5","Sanin, H");
    newCourse("Athletics","6","Sanin, H");

    newCourse("Government","1","Shima, T");
    newCourse("Wor Hist AB","2","Shima, T");
    newCourse("Wor Hist AB","3","Shima, T");
    newCourse("Wor Hist AB","4","Shima, T");
    newCourse("Wor Hist AB","5","Shima, T");
    newCourse("Wor Hist AB","6","Shima, T");

    newCourse("Eng 4 AB","1","Straker, T");
    newCourse("Eng 2 AB","2","Straker, T");
    newCourse("Eng 2 AB","3","Straker, T");
    newCourse("ELD 12","5","Straker, T");
    newCourse("Eng 4 AB","6","Straker, T");

    newCourse("AP Chemistry AB","1","Strom, C");
    newCourse("Applied Chem","2","Strom, C");
    newCourse("Applied Chem","3","Strom, C");
    newCourse("Leadership ASB","4","Strom, C");
    newCourse("ASB Prep/Colab","5","Strom, C");
    
    newCourse("Intro Art AB","0","Suess, E");
    newCourse("Intro Art AB","2","Suess, E");
    newCourse("Intro Art AB","3","Suess, E");
    newCourse("Draw Paint AB","4","Suess, E");
    newCourse("Intro Art AB","6","Suess, E");

    newCourse("Co/Ed Ath","0","Swanson, S");
    newCourse("Alt Fitness","1","Swanson, S");
    newCourse("Wt Train AB","2","Swanson, S");
    newCourse("9th Grade PE AB","3","Swanson, S");
    newCourse("Wt Train AB","5","Swanson, S");
    newCourse("Athletics","6","Swanson, S");

    newCourse("Dance 1","5","Tacandong, M");
    newCourse("Dance 1","6","Tacandong, M");

    newCourse("Algebra 1 AB","1","Tang, I");
    newCourse("Algebra 1 AB","2","Tang, I");
    newCourse("Pre Calculus AB","3","Tang, I");
    newCourse("Pre Calculus AB","4","Tang, I");
    newCourse("Algebra 1 AB","5","Tang, I");
    newCourse("Algebra 1 AB","6","Tang, I");

    newCourse("Business Mgmt 2","1","Thorp, J");
    newCourse("Business Mgmt 1","2","Thorp, J");
    newCourse("Bueiness Mgmt 1","3","Thorp, J");
    newCourse("Business Mgmt 1","4","Thorp, J");
    newCourse("Business Mgmt 1","6","Thorp, J");

    newCourse("Biology AB","0","Traeger, D");
    newCourse("AP Environ Sci","1","Traeger, D");
    newCourse("AP Environ Sci","2","Traeger, D");
    newCourse("AP Environ Sci","4","Traeger, D");
    newCourse("AP Environ Sci","5","Traeger, D");
    
    newCourse("AP Biology AB","1","Velekei, T");
    newCourse("AP Biology AB","2","Velekei, T");
    newCourse("Chemistry AB","4","Velekei, T");
    newCourse("Chemistry AB","5","Velekei, T");
    newCourse("Chemistry AB","6","Velekei, T");

    newCourse("Geom AB Hon","1","Yee, K");
    newCourse("Alg Readiness","2","Yee, K");
    newCourse("Geom AB Hon","3","Yee, K");
    newCourse("Alg Readiness","4","Yee, K");
    
    newCourse("Adv Sp AB/Oral","0","Yuill, D");
    newCourse("Begin Speech AB","1","Yuill, D");
    newCourse("Adv Sp AB/Oral","2","Yuill, D");
    newCourse("Adv Sp AB/Oral","3","Yuill, D");
    newCourse("Adv Sp AB/Oral","4","Yuill, D");
    newCourse("Adv Sp AB/Oral","5","Yuill, D");

    newCourse("AP Eng Lang","0","Zamora, P");
    newCourse("Eng 3 AB","1","Zamora, P");
    newCourse("AP Eng Lang","2","Zamora, P");
    newCourse("Eng 3 AB","4","Zamora, P");
    newCourse("Yearbook AB","5","Zamora, P");
}

export {
    template
}
