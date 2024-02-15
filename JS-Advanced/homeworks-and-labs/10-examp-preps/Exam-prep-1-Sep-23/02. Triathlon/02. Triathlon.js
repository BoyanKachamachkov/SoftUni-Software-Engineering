class Triathlon {
  constructor(name) {
    this.name = name;
    this.participants = {};
    this.lisftOfFinalists = [];

  };
  addParticipant(participant, gender) {

    if (this.participants[participant] === undefined) {
      this.participants[participant] = gender;
      return `A new participant has been added - ${participant}`;
    } else {
      return `${participant} has already been added to the list`;
    }
  }

  completeness(participant, condition) {
    if (this.participants[participant] === undefined) {
      throw new Error(`${participant} is not in the current participants list`);
    } else if (condition < 30) {
      throw new Error(`${participant} is not well prepared and cannot finish any discipline`);
    }

    let completedCount = Math.floor(condition / 30);
    if (completedCount < 3) {
      return `${participant} could only complete ${completedCount} of the disciplines`;

    } else {
      let participantGender = this.participants[participant];
      this.lisftOfFinalists.push({
        name: participant,
        gender: participantGender,
      });
      delete this.participants[participant];
      return `Congratulations, ${participant} finished the whole competition`;
    }
  }

  rewarding(participant) {

    let completed = this.lisftOfFinalists.some(finalist => finalist.name === participant);
    if (!completed) {
      return `${participant} is not in the current finalists list`;
    } else {
      return `${participant} was rewarded with a trophy for his performance`;
    }
  }

  showRecord(criteria) { }


}


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
