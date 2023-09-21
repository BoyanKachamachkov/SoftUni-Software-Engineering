function numberHours(input) {
  let archName = input[0];
  let numberProjects = Number(input[1]);
  let totalTime = numberProjects * 3;
  console.log(
    `The architect ${archName} will need ${totalTime} hours to complete ${numberProjects} project/s.`
  );
}
