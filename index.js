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
    return this.beginningLocation.horizontal === 'Park' ? 4 : 1
    const he = this.endingLocation.horizontal === 'Park' ? 4 : 1

  }

  estimatedTime(){


  }

  estimatedTime(){

  }
}
