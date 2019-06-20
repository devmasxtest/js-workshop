const Status = {
  PLAYING: "PLAYING",
  STOP: "STOP",
  PAUSE: "PAUSE"
};

var Player = function(path) {
  this.path = path;
  var _status = Status.STOP;
  // this.status = Status.STOP;
  Object.defineProperty(this, "status", {
    set: function(newValue) {
      if (Object.keys(Status).includes(newValue)) _status = newValue;
    },
    get: function() {
      return _status;
    }
  });
};

Player.prototype.open = function() {
  console.log("Player#open", this.path);
};

Player.prototype.play = function() {
  if (this.status === Status.STOP) {
    this.status = Status.PLAYING;
  }
  console.log("Player#play");
};

Player.prototype.pause = function() {
  if (this.status === Status.PLAYING) {
    this.status = Status.PAUSE;
  }
  console.log("Player#pause");
};

var Mp4Driver = function(path) {
  Player.call(this, path);
};

// extends
Mp4Driver.prototype = Object.create(Player.prototype);

Mp4Driver.prototype.play = function() {
  console.log("Mp4Driver#play");
  Player.prototype.play.call(this);
};

Mp4Driver.prototype.decode = function() {
  console.log("Mp4Driver#decode");
};

var mp4DriverPlayer = new Mp4Driver("/mypath.mp4");
mp4DriverPlayer.open(); // player method
mp4DriverPlayer.decode(); // driver method
console.log(mp4DriverPlayer.path);
console.log(mp4DriverPlayer.status);

mp4DriverPlayer.play();
console.log(mp4DriverPlayer.status);
mp4DriverPlayer.pause();
console.log(mp4DriverPlayer.status);

mp4DriverPlayer.status = "ERROR";

console.log(mp4DriverPlayer.status);
