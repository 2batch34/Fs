document.addEventListener('DOMContentLoaded', function () {
    const schemeTypeSelect = document.getElementById('schemeType');
    const resultDiv = document.getElementById('result');

    schemeTypeSelect.addEventListener('change', function () {
        const selectedScheme = schemeTypeSelect.value;
        displaySchemeInfo(selectedScheme);
    });

    function displaySchemeInfo(scheme) {
        let info = '';

        switch (scheme) {
            case 'postOffice':
                info = 'Post Office Savings offer various schemes with competitive interest rates.';
                break;
            case 'fixedDeposit':
                info = 'Fixed Deposit provides a fixed interest rate for a fixed period.';
                break;
            case 'recurringDeposit':
                info = 'Recurring Deposit allows regular deposits at fixed intervals with a fixed interest rate';
                break;
            default:
                info = 'Select a saving scheme to get more information.';
        }

        resultDiv.textContent = info;
    }
});