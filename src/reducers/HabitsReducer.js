const initialHabitList = [];

export const habits = (state = initialHabitList, action) => {
    const habitIds = state.map(habit => habit.id)
    switch (action.type) {
        case 'ADD_HABIT':
            if (state.length === 0){
                action.habit.id = 1
            } else {
                action.habit.id = Math.max(...habitIds) + 1
            }
            return [...state, action.habit];

        case 'EDIT_HABIT':
            const editIndex = habitIds.indexOf(action.habit.id)
            return [...state.slice(0,editIndex), action.habit, ...state.slice(editIndex+1)]

        case 'DELETE_HABIT':
            const deleteIndex = habitIds.indexOf(action.habit.id)
            return [...state.slice(0,deleteIndex), ...state.slice(deleteIndex+1)]

        default:
            return state;
    }
}