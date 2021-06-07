import { Player, IPlayer } from "../objects/player/player";
import Wall from "../objects/wall/wall";
import fs from "fs";
import { IVector2 } from "../../types/vector";

export interface ISceneInfo {
  player: IPlayer;
  walls: IVector2[][];
}

export class Scene {
  private player: Player;
  private walls: Wall[];

  constructor(scenePath: string) {
    const sceneInfo: ISceneInfo = JSON.parse(fs.readFileSync(scenePath, "utf8"));
  }
}