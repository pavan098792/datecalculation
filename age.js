// Age Calculator
document.getElementById('btn-age').addEventListener('click', () => {
    const birthday = document.getElementById('birthday').value;
    const resultAge = document.getElementById('result-age');

    if (birthday) {
        const age = calculateAge(birthday);
        resultAge.textContent = `You are ${age} ${age > 1 ? 'years' : 'year'} old.`;
    } else {
        resultAge.textContent = 'Please enter your date of birth.';
    }
});

function calculateAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Date Difference Calculator
document.getElementById('btn-date').addEventListener('click', () => {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const resultDate = document.getElementById('result-date');

    if (startDate && endDate) {
        const diff = calculateDateDifference(startDate, endDate);
        resultDate.textContent = `Difference: ${diff.years} year(s), ${diff.months} month(s), and ${diff.days} day(s).`;
    } else {
        resultDate.textContent = 'Please select both start and end dates.';
    }
});

function calculateDateDifference(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    // Adjust for negative days
    if (days < 0) {
        months--;
        const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0); // Last day of the previous month
        days += prevMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}
