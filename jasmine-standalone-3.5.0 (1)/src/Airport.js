class AirPort {
  constructor(maxCap = 1){
    this.dock = [];
    this.maxCap = maxCap;
  }

  landPlane(plane){
    if (this.dock.length === this.maxCap) {
      return "This airport is full. Cannot land."
    }
    else {
      return this.dock.push(plane);
    }
  }

  takeOff(plane, weather) {
    var isStormy
    this.isStormy = weather

    if (this.isStormy == false){
       return this.dock.splice( this.dock.indexOf(plane), 1 );
    }else {
      return "Take-off denied: stormy weather.";
    }
  };

};
