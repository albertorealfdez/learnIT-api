import Competence from './competence';


class StudentCompetence extends Competence {
  constructor(key, title, minThreshold, maxThreshold, force, completed, locked) {
    super(key, title, minThreshold, maxThreshold);
    this.force = force;
    this.completed = completed;
    this.locked = locked;
  }
}

export default StudentCompetence;