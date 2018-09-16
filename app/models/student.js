import User from './user'; 

class Student extends User {
  constructor(name, email, password, courses, activities, maps) {
    super(name, email, password, courses);
    this.activities = activities;
    this.maps = maps;
  }
}

export default Student;