let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};
/*
input: array of student objects (all score data)
output: summary object (grades)
*/

function generateClassRecordSummary(scores) {
  const studentGrades = calculateGrades(scores);
  const examInfo = calculateExamInfo(scores);
  const mappedStudentGrades = studentGrades.map((grade) => `${grade} (${calculateLetterGrade(grade)})` );

  return summary(mappedStudentGrades, examInfo)
}

function summary(mappedStudentGrades, examInfo) {
  const gradeSummary = {};
  gradeSummary.studentGrades = mappedStudentGrades;
  gradeSummary.exams = examInfo;

  return gradeSummary;
}

function calculateLetterGrade(grade) {
  if (grade <= 59) {
    return 'F';
  } else if (grade <= 68) {
    return 'E';
  } else if (grade <= 76) {
    return 'D';
  } else if (grade <= 84) {
    return 'C';
  } else if (grade <= 92) {
    return 'B';
  } else {
    return 'A';
  }''
}

function calculateExamInfo(scores) {
  const examStudentAverage = [];

  for (let student in scores) {
    let studentExamGrades = scores[student].scores.exams;
    let counter = 0

    studentExamGrades.forEach(grade => {
      if (examStudentAverage[counter] === undefined) {
        examStudentAverage.push([grade]);
      } else {
        examStudentAverage[counter].push(grade);
      }
      counter += 1;
    });
  }

  return examStudentAverage.map(grades => {
    return {
      average: grades.reduce((acc, curr) => acc + curr) / grades.length,
      minimum: Math.min(...grades),
      maximum: Math.max(...grades),
    };
  });
}

function calculateGrades(scores) {
  const studentGrades = [];
  const examWeight = 65;
  const exerciseWeight = 35;
  const divisor = 100;

  let numberGrade;

  for (let student in scores) {
    let examScores = scores[student].scores.exams;
    let examAverage = Math.round(examScores.reduce((acc, curr) => acc + curr) / examScores.length);

    let exerciseScores = scores[student].scores.exercises;
    let exerciseAverage = exerciseScores.reduce((acc, curr) => acc + curr);

    numberGrade = Math.round(((examWeight * examAverage) + (exerciseWeight * exerciseAverage)) / divisor);
    studentGrades.push(numberGrade);
  }

  return studentGrades;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
