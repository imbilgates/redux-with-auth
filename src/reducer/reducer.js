
const initialState = {
    isAuthenticated: false,
    user: null,
    showInput: false,
};

export default function countReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true, user: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null };
        case 'EDIT':
            return { ...state, showInput: action.payload };
        default: return state
    }
}