function getDaysInMonth(month, year) {
    let date = new Date(year, month - 1, 1);
    date.setMonth(date.getMonth() + 1);//move to the next month
    date.setDate(date.getDate() - 1);//subtract 1 day from it
    console.log(date.getDate()); //amount of days
}
getDaysInMonth(1, 2012);
