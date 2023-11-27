import {usersAC} from './user/slice';
import {gameAC} from "./game/slice";
import {bonusTreeAC} from "./bonusTree/slice";
import * as userActions from './user/actions';
import * as gameActions from './game/actions';
import * as bonusTreeActions from './bonusTree/actions';

export const allActions = {
  ...gameActions,
  ...userActions,
  ...bonusTreeActions,
  ...bonusTreeAC,
  ...usersAC,
  ...gameAC
}