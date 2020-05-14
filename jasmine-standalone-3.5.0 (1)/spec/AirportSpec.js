describe("An Airport", function() {

  var airPort, plane

  beforeEach(function () {
    airPort = new AirPort();
    plane = jasmine.createSpy('plane');
    plane2 = jasmine.createSpy('plane');
  });

  describe("When a plane lands", function() {
    it("Pushes plane into dock array", function() {
      airPort.landPlane(plane)
      expect(airPort.dock).toContain(plane);
    });
  });

  describe("When cap is full", function(){
    it("Doesnt dock plane", function(){
      airPort.landPlane(plane)
      airPort.landPlane(plane2)
      expect(airPort.dock.length).toBe(1);
    });
  });

  describe("When a plane takes off", function () {
    it("Deletes plane from dock array", function () {
      airPort.takeOff(plane)
      expect(airPort.dock).not.toContain(plane);
    });
  });

  describe("When it is stormy", function() {
    var isStormy
      beforeEach(function() {
        isStormy = jasmine.createSpy('isStormy');
        isStormy = function() {
            return true;
        };
      });

    it("plane remains in dock", function() {
      airPort.landPlane(plane)
      airPort.takeOff(plane, isStormy)
      expect(airPort.dock).toContain(plane);
    });

    it("returns message denying take-off", function() {
      airPort.landPlane(plane)
      airPort.takeOff(plane, isStormy)
      expect(airPort.takeOff).toMatch("Take-off denied: stormy weather.");
    });

  });

});
