
export const registerUser = (name) => {
    return {
        type: 'REGISTER',
        user: {name: name}
    }
}