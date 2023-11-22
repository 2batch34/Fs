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