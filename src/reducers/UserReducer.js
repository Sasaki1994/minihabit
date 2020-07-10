const initialUser = {name: "Guest"};

export const user = (state = initialUser, action) => {
    switch (action.type) {
        case 'REGISTER':
            return action.user;

        default:
            return state;
    }
}