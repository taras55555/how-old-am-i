const daysHoursFromSeconds = (seconds) => {
    const remainderHours = seconds % 86400;
    const reminderMinutes = seconds % 3600;
    const hours = Math.floor(remainderHours / 3600);
    const minutes = Math.floor(reminderMinutes / 60);
    const days = Math.floor(seconds / 86400);
    return [days, hours, minutes];
}

const pluralizeTime = (digit, timeTemplate) => {
    return `${digit} ${timeTemplate}${digit >= 5 && digit <= 20
        ? ''
        : lastDigit(digit) >= 2 && lastDigit(digit) <= 4
            ? 'и'
            : lastDigit(digit) === 1
                ? 'a'
                : ''
        } `;
}

function lastDigit(inputDigit) {
    if (inputDigit >= 10) return inputDigit % 10;
    return inputDigit;
}

function updateInfoBlock() {
    const currentDate = new Date();
    const currentDateYear = currentDate.getFullYear();

    const dateBirthday = new Date(dateOfBirthday.value);
    dateBirthday.setHours(0, 0, 0, 0)
    console.log(dateBirthday)
    const birthdayDateYear = dateBirthday.getFullYear();
    const birthdayCurrentYear = new Date(dateBirthday);
    birthdayCurrentYear.setFullYear(currentDateYear);

    let age, birthdayIn, birthdayAfter;
    if (birthdayCurrentYear > currentDate) {
        age = currentDateYear - birthdayDateYear - 1;

        birthdayIn = daysHoursFromSeconds((birthdayCurrentYear - currentDate) / 1000);
        birthdayCurrentYear.setFullYear(currentDateYear - 1);
        birthdayAfter = daysHoursFromSeconds((currentDate - birthdayCurrentYear) / 1000);
    } else {
        age = currentDateYear - birthdayDateYear;
        birthdayAfter = daysHoursFromSeconds((currentDate - birthdayCurrentYear) / 1000);
        birthdayCurrentYear.setFullYear(currentDateYear + 1);
        birthdayIn = daysHoursFromSeconds((birthdayCurrentYear - currentDate) / 1000);
    }
    myAgeInfo.classList.add('block-area');
    myBirthdayIn.classList.add('block-area');
    myAgeInfo.innerHTML = '<p class="title">вік</p><p>' + age + ' років ' + birthdayAfter[0] + ' днів ' + pluralizeTime(birthdayAfter[1], 'годин') + ' ' + pluralizeTime(birthdayAfter[2], 'хвилин') + '</p>';
    myBirthdayIn.innerHTML = '<p class="title">наступний день народження</p><p>' + birthdayIn[0] + ' днів ' + pluralizeTime(birthdayIn[1], 'годин') + ' ' + pluralizeTime(birthdayIn[2], 'хвилин') + '</p>';
}

let intervaUpdate;
dateOfBirthday.addEventListener('input', () => {
    updateInfoBlock()
    clearInterval(intervaUpdate);
    // intervaUpdate = setInterval(updateInfoBlock, 1000);
});