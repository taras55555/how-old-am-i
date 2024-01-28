dateOfBirthday.addEventListener('input', () => {
    const currentDate = new Date();
    const currentDateYear = currentDate.getFullYear();

    const dateBirthday = new Date(dateOfBirthday.value);
    const birthdayDateYear = dateBirthday.getFullYear();
    const birthdayCurrentYear = new Date(dateBirthday);
    birthdayCurrentYear.setFullYear(currentDateYear);

    let age, birthdayIn, birthdayAfter;
    if (birthdayCurrentYear > currentDate) {
        age = currentDateYear - birthdayDateYear - 1;
        birthdayIn = (birthdayCurrentYear - currentDate) / 1000 / 86400;
        birthdayCurrentYear.setFullYear(currentDateYear - 1);
        birthdayAfter = (currentDate - birthdayCurrentYear) / 1000 / 86400;
    } else {
        age = currentDateYear - birthdayDateYear;
        birthdayAfter = (currentDate - birthdayCurrentYear) / 1000 / 86400;
        birthdayCurrentYear.setFullYear(currentDateYear + 1);
        birthdayIn = (birthdayCurrentYear - currentDate) / 1000 / 86400;

    }
    console.log('age =', age);
    console.log('birthdayIn =', birthdayIn);
    console.log('birthdayAfter =', birthdayAfter);

    console.log('========================================');
    const text = age + '<br>' + birthdayIn + '<br>' + birthdayAfter;
    myAgeInfo.innerHTML = text;
});