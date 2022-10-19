let debug = true;

export function findSolutions(wantedId, unwantedId, schedule,courses) {
    //Array for possible schedules (solutions)
    var solutions = {
      possibleSchedules: [],
      changes: []
    };

    let emptyPeriod = checkEmptyPeriod(unwantedId,schedule);
  

    //When input is valid:
    if (emptyPeriod != -1) {
      //Get all of the periods for the wanted class, then loop through it
      let periods = allPeriods(wantedId,courses);
  
      for (let i = 0; i < periods.length; i++) {
        //Other classes won't be able to replace this period later on
        let taken = [periods[i]];
  
        //Makes a copy of the original schedule for modification
        let altSchedule = schedule.slice();
  
        let changesMade = 0;
  
        //Put the wanted course at the specified period in (new) schedule
        let wantedCourse = findCourse(wantedId, periods[i],courses);
  
        altSchedule[periods[i] - 1] = wantedCourse;

        replaceCourse(
          periods[i],
          taken,
          emptyPeriod,
          wantedId,
          unwantedId,
          solutions,
          schedule,
          altSchedule,
          wantedCourse,
          changesMade,
          courses
        );
      }
    } else {
      //If input is invalid
      console.log(
        "Error, course: " + unwantedId + " is not found in current schedule"
      );
    }
  
    return solutions;
}

function replaceCourse(
    period,
    taken,
    emptyPeriod,
    wantedId,
    unwantedId,
    solutions,
    schedule,
    altSchedule,
    replacingCourse,
    changesMade,
    courses
    ) {
    //Get the course that was at that period, that course will go somewhere else (if possible)
    let replacedCourse = checkPeriod(period,schedule);

    let newAltSchedule = altSchedule.slice();
    let newChangesMade = changesMade;

    newAltSchedule[period - 1] = replacingCourse;

    newChangesMade += 1;

    //Checks first if the course is the unwanted course
    if (replacedCourse.name == unwantedId) {
        if (debug) {
            console.log("A solution is found");
        }

        solutions.possibleSchedules.push(newAltSchedule);
        solutions.changes.push(newChangesMade);
    } else {
        //Get all the periods the course has
        let altPeriods = allPeriods(replacedCourse.getName(),courses);

        //Remove all the taken periods from the possible periods the replaced course can go
        removeSimilarity(altPeriods, taken);

        if (debug) {
        console.log(
            "Since " +
            replacedCourse.getName() +
            " is at period " +
            period +
            ", they are being replaced"
        );
        }

        //If there is nowhere else to go, this version of the schedule is not a solution
        if (altPeriods.length == 0) {
        if (debug) {
            console.log("Dead end is reached");
        }
        //Loops through the rest of the possible periods
        } else {
        for (let i = 0; i < altPeriods.length; i++) {
            //If the course can replace an empty time
            if (altPeriods[i] == emptyPeriod) {
                if (debug) {
                    console.log("A solution is found");
                }

                newAltSchedule[emptyPeriod - 1] = replacedCourse;
                newChangesMade += 1;

                solutions.possibleSchedules.push(newAltSchedule);
                solutions.changes.push(newChangesMade);
            } else {
                let currentTaken = taken.slice();

                currentTaken.push(altPeriods[i]);

                if (debug) {
                    console.log(
                    replacedCourse.getName() + " is now at period " + altPeriods[i]);
                }

                replaceCourse(
                    altPeriods[i],
                    currentTaken,
                    emptyPeriod,
                    wantedId,
                    unwantedId,
                    solutions,
                    schedule,
                    newAltSchedule,
                    replacedCourse,
                    newChangesMade,
                    courses
                );
                }
            }
        }
    }
}

function checkPeriod(period,schedule) {
    return schedule[period - 1];
}



function checkEmptyPeriod(unwantedId,schedule) {
    let emptyPeriod;
  
    for (let i = 0; i < schedule.length; i++) {

      if (schedule[i].getName() == unwantedId) {
        emptyPeriod = i + 1;
        break;
      }
  
      emptyPeriod = -1;
    }
  
    return emptyPeriod;
}

function allPeriods(courseId,courses) {
    let periods = [];
  
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].getName() == courseId) {
            periods.push(courses[i].getPeriod());
        }
    }

    //Temp: preventing 0 periods
    for (let i=0; i<periods.length; i++) {
        if (periods[i] == 0) {
            periods.splice(i,1);
        }
    }

    
    return periods;
}

function findCourse(id, period, courses) {
    let wantedCourse;
  
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].getName() == id && courses[i].getPeriod() == period) {
        wantedCourse = courses[i];
        break;
      }
    }
  
    return wantedCourse;
}

function removeSimilarity(original, reference) {
    for (let i = 0; i < reference.length; i++) {
        for (let j = 0; j < original.length; j++) {
            if (original[j] == reference[i]) {
                original.splice(j, 1);
            }
        }
    }
}

