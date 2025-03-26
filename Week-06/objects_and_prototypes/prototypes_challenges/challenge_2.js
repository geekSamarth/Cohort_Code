function Robot(name, batteryLife) {
    (this.name = name), (this.batteryLife = batteryLife);
  }
  
  Robot.prototype.charge = function () {
    return Math.min(this.batteryLife + 20, 100);
  };
  
  const robot = new Robot("Samarth", 50);
  console.log(robot)
  console.log(robot.charge());
  const robot1 = new Robot("Sid", 90);
  console.log(robot1.charge());
  const robot2 = new Robot("Samarth", 100);
  console.log(robot2.charge());
  