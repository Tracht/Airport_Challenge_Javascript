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
    var isStormy = weather

    if ( isStormy === "isStormy" ){
      return "Take-off denied: stormy weather.";
    }else {
      "Take-off permitted."
      return this.dock.splice( this.dock.indexOf(plane), 1 );
    }
  };

};
