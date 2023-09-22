function learning(numPages, pagesPerHour, numDaysToReadTheBook) {
  //how many hours he needs to read EACH day;
  let totalTimeNeeded = numPages / pagesPerHour;
  let pagesPerDay = totalTimeNeeded / numDaysToReadTheBook;

  console.log(pagesPerDay);
}

learning(212, 20, 2); //5.3
learning(432, 15, 4); //7.2
