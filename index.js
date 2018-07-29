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
    const vs = this.beginningLocation.vertical
    const ve = this.endingLocation.vertical
    return ve > vs ? ve - vs : vs - ve
  }

  estimatedTime(){


  }

  estimatedTime(){

  }
}
