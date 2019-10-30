import { ADD_USER } from '../actions/action';
export const reducer = (state = {users: []}, action) => {
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            }

        default:
            return state;
    }
}