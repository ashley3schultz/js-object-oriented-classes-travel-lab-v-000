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
    const s = this.beginningLocation.vertical
    const e = this.endingLocation.vertical
    return e > s ? e - s : s - e
  }

  estimatedTime(){


  }

  estimatedTime(){

  }
}
