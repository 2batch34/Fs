let totalLeaves = 12; 

function calculateSalary() {
    const leaveInput = parseInt(document.getElementById('leaveInput').value);
    
    if (leaveInput >= 0 && leaveInput <= totalLeaves) {
        const remainingLeaves = totalLeaves-leaveInput;
        const salary = calculateSalaryBasedOnLeaves(remainingLeaves);
        
        document.getElementById('displayRemaining').innerText = remainingLeaves;
        document.getElementById('displaySalary').innerText = salary;
    } else {
        alert('Invalid leave input. Please enter a valid number.');
    }
}

function calculateSalaryBasedOnLeaves(remainingLeaves) {
 
    return 1000 + remainingLeaves * 50;
}