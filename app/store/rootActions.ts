import { usersAC } from './user/slice';
import { gameAC } from "./game/slice";
import * as userActions from './user/actions';
import * as gameActions from './game/actions';
export const allActions = {
    ...gameActions,
    ...userActions,
    ...usersAC,
    ...gameAC
}