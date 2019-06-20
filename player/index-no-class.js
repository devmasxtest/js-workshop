const Status = {
  PLAYING: "PLAYING",
  STOP: "STOP",
  PAUSE: "PAUSE"
};

const open = function(state) {
  console.log("Player#open", state.path);
  return state;
};

const play = function(state) {
  if (state.status === Status.STOP) {
    state.status = Status.PLAYING;
  }
  console.log("Player#play");
  return state;
};

const pause = function(state) {
  if (state.status === Status.PLAYING) {
    state.status = Status.PAUSE;
  }
  console.log("Player#pause");
  return state;
};

const playMp4Driver = function(state) {
  console.log("Mp4Driver#play");
  open(state);
  return state;
};

decodeMp4Driver = function(state) {
  console.log("Mp4Driver#decode");
  return state;
};

var mp4DriverPlayer = new Mp4Driver("/mypath.mp4");
let state = {
  path: "",
  status: Status.STOP
};

state = open(state); // player method

decode(state); // driver method
console.log(mp4DriverPlayer.path);
console.log(mp4DriverPlayer.status);

mp4DriverPlayer.play();
console.log(mp4DriverPlayer.status);
mp4DriverPlayer.pause();
console.log(mp4DriverPlayer.status);
