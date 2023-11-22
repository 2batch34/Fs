function calculateEPF() {
    const experience = parseFloat(document.getElementById('experience').value);
    const relievingAmount = parseFloat(document.getElementById('relieving').value);
    const monthlySalary = parseFloat(document.getElementById('salary').value);

    // Assuming a simplified EPF contribution formula
    const employeeContribution = 0.12 * monthlySalary; // 12% of the monthly salary
    const employerContribution = 0.12 * monthlySalary; // Employer contribution is typically the same

    // Total EPF amount considering years of experience and relieving amount
    const totalEPFAmount = (experience * 1000) + relievingAmount + employeeContribution + employerContribution;

    document.getElementById('result').innerText = `Total EPF Amount: $${totalEPFAmount.toFixed(2)}`;
}