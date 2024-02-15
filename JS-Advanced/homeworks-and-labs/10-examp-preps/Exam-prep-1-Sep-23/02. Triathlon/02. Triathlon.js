class Triathlon {
  competitionName;
  participants;
  lisftOfFinalists;

  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.lisftOfFinalists = [];

  };
  addParticipant(participantName, participantGender) { }

  completeness(participantName, condition) { }

  rewarding(participantName) { }

  showRecord(criteria) { }


}


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));
