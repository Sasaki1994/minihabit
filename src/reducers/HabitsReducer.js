const initialHabitList = [];

export const habits = (state = initialHabitList, action) => {
    switch (action.type) {
        case 'ADD_HABIT':
            return [...state, action.habit];

        default:
            return state;
    }
}