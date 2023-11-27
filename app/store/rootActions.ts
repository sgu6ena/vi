import {usersAC} from './user/slice';
import {gameAC} from "./game/slice";
import {mainAC} from "./main/slice";
import {bonusTreeAC} from "./bonusTree/slice";
import * as userActions from './user/actions';
import * as mainActions from './main/actions';
import * as gameActions from './game/actions';
import * as bonusTreeActions from './bonusTree/actions';

export const allActions = {
  ...gameActions,
  ...userActions,
  ...bonusTreeActions,
  ...mainActions,
  ...bonusTreeAC,
  ...usersAC,
  ...gameAC,
  ...mainAC
}