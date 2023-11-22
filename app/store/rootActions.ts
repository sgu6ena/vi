import { usersAC } from './user/slice';
import {gameAC} from "./game/game.slice";
import * as userActions from './user/actions'
export const allActions = {
    ...userActions,
    ...usersAC,
    ...gameAC
}