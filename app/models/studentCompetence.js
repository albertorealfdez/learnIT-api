import { Competence } from './competence';

export class StudentCompetence extends Competence {
  constructor(key, title, minThreshold, maxThreshold, force, completed, locked) {
    super(key, title, minThreshold, maxThreshold);
    this.force = force;
    this.completed = completed;
    this.locked = locked;
  }
}
