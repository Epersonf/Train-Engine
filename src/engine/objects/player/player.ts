import { Vector2 } from "../../../types/vector";

export interface IPlayer {
  x: number;
  y: number;
  rotation: number;
}

export class Player {
  private pos: Vector2;
  private rotation: number;

  constructor(pos: Vector2, rotation: number) {
    this.pos = pos;
    this.rotation = rotation;
  }
}