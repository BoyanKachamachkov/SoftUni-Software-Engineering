function getDaysInMonth(month, year) {
    /* 
    1. we start at first day of the given month
    2. we move to the first day of the next month and -1
    3. this way we know the amount of days
    
    */
    // Month is zero-based, so we subtract 1
    const date = new Date(year, month - 1, 1);

    // Move to the next month and subtract one day
    date.setMonth(date.getMonth() + 1); //move to the next month
    date.setDate(date.getDate() - 1); //subtract 1 day from it

    // The date now represents the last day of the desired month
    console.log(date.getDate());
}
getDaysInMonth(1, 2012);
getDaysInMonth(2, 2021);
