const initialUser = {name: "Guest", email:'', password:''};

export const user = (state = initialUser, action) => {
    switch (action.type) {
        case 'REGISTER':
            const {user} = action
            if (user.password === user.confirmation) {
                return action.user;
            } else {
                return initialUser;
            }

        default:
            return initialUser;
    }
}