class Play {
  play() {
    if (this.status == "STOP") {
      this.status = "PLAY";
    }
  }
}
const Player = KlassDriver =>
  class {
    constructor() {
      this.status = "STOP";
    }

    play() {
      if (this.status == "STOP") {
        this.status = "PLAY";
      }
    }

    decode() {
      KlassDriver.decode();
    }
  };

const PlayerKool = KlassDriver =>
  class extends KlassDriver {
    constructor() {
      super();
      this.status = "STOP";
    }

    playKool() {
      console.log(this.status, "KOOL");
    }
  };

const Mp4Driver = {
  decode() {
    console.log("Mp4Driver#decode");
  }
};

const Mp4Player = PlayerKool(Player(Mp4Driver));

new Mp4Player().decode();
new Mp4Player().play();
new Mp4Player().playKool();
