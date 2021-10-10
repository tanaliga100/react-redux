import { SET_USERS_INFO } from "../types";

export function setUsersInfo(payload) {
    return {
        type: SET_USERS_INFO,
        payload
    }
}