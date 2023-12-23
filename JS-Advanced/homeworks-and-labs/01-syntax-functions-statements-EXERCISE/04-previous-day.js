function previousDay(year, month, day) {
    let newDate = new Date(year, month - 1, day);
    console.log(newDate);
    console.log(`${newDate}-${month}-${day}`);
}

previousDay(2016, 9, 30);
