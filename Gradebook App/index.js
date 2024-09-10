let students = [];

function getAverage (scores) {
    let total = 0; 

    for (let i = 0; i < scores.length; i++) {
        total += scores[i]; 
    }

    let average = total / scores.length;

    return average;

}
  
function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90 && score <= 99) {  
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B"; 
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else if (score >= 0 && score <= 59) {
        return "F";
    }
}

function hasPassingGrade(score) {
    // Use the getGrade function to determine the letter grade
    let grade = getGrade(score);

    // Return true if the grade is not "F", otherwise return false
    if (grade !== "F") {
        return true;
    } else {
        return false;
    }
}

function studentMsg(totalScores, studentScore) {
    let classAverage = getAverage(totalScores);
  
    let studentGrade = getGrade(studentScore);
  
    if (studentGrade === "F") {
      return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You failed the course.";
    } else {
      return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You passed the course.";
    }
  }