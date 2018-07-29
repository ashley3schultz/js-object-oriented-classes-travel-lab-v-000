class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return (year - this.startDate.getFullYear() -1)
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
  this.beginningLocation = beginningLocation
  this.endingLocation = endingLocation
  }

  blocksTravelled(){
    s = this.beginningLocation.vertical
    e = this.endingLocation.vertical
    return s > e ? s - e : e - s
  }

  estimatedTime(){


  }

  estimatedTime(){

  }
}
