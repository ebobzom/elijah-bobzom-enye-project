// import { ADD_USER } from '../actions/action';
export const reducer = (state = {users: [], error: ''}, action) => {
    switch(action.type){
        case 'ERROR':
            return {
                error: action.error
            }
        case 'DBUSERS':
            return {
                ...state,
                users: [...state.users, ...Object.values(action.values)]
            }
        default:
            return state;
    }
}