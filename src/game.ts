import Canvas from "Framework/canvas";
import p5 from "p5";

export default class Game extends Canvas {
  static LENGTH = 700;

  setup() {
    this.createCanvas(Game.LENGTH, Game.LENGTH);
    this.frameRate(60);
  }

  draw() {
    this.background(0);
  }
}
