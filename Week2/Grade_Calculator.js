// This is a grade calculator.

function calculateGrade(grade) {
    gradeAsPercentage = (grade / 100) * 100;
    
    if (gradeAsPercentage >= 90) {
        console.log('You got an A with ' + gradeAsPercentage + '%');
    }
    if (gradeAsPercentage >= 80 && gradeAsPercentage <= 89) {
        console.log('You got a B with ' + gradeAsPercentage + '%');
    }
    if (gradeAsPercentage >= 70 && gradeAsPercentage <= 79) {
        console.log('You got a C with ' + gradeAsPercentage + '%');
    }
    if (gradeAsPercentage >= 60 && gradeAsPercentage <= 69) {
        console.log('You got a D with ' + gradeAsPercentage + '%');
    }
    if (gradeAsPercentage >= 50 && gradeAsPercentage <= 59) {
        console.log('You got an E with ' + gradeAsPercentage + '%');
    }
    if (gradeAsPercentage >= 0 && gradeAsPercentage <= 49) {
        console.log('You got an F with ' + gradeAsPercentage + '%');
    }
}

calculateGrade(98);
calculateGrade(88);
calculateGrade(78);
calculateGrade(68);
calculateGrade(58);
calculateGrade(48);


/*```markdown
Grade A (90% - 100%)
Grade B (80% - 89%)
Grade C (70% - 79%)
Grade D (60% - 69%)
Grade E (50% - 59%)
Grade F (0% - 49%)*/