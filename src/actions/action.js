export const login = (user) => ({
    type: 'LOGIN',
    payload: user
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const updateUser = (userUpdates) => ({
    type: 'UPDATE_USER',
    payload: userUpdates
});
