
export const registerHabit = (habit) => {
    return {
        type: 'ADD_HABIT',
        habit
    }
}

export const editHabit = (habit) => {
    return {
        type: 'EDIT_HABIT',
        habit
    }
}