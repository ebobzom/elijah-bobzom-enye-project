export const ADD_USER = 'ADD_USER';

export const addUserActionCreator = (user) => {
    return ({
        type: ADD_USER,
        user
    });
}