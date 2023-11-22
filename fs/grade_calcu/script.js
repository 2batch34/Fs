function calculateGrade() {
    const marks = parseFloat(document.getElementById("marks").value);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        displayResult("Invalid input. Enter a valid mark between 0 and 100.");
    } else {
        const grade = calculateLetterGrade(marks);
        const percentage = calculatePercentage(marks);
        displayResult(`Your grade is: ${grade} (${percentage}%)`);
    }
}

function calculateLetterGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function calculatePercentage(marks) {
    return ((marks / 100) * 100).toFixed(2);
}

function displayResult(message) {
    document.getElementById("result").innerText = message;
}

function resetCalculator() {
    document.getElementById("marks").value = "";
    document.getElementById("result").innerText = "";
}

