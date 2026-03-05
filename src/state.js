// src/state.js

class RoutineFlowState {
    constructor() {
        this.days = {};  // To store day instances
        this.tasks = {}; // To store task completion status
        this.streaks = {}; // To calculate streaks
    }

    addDay(date) {
        this.days[date] = { tasks: {}, completed: false }; // Initialize a new day
    }

    completeTask(date, taskId) {
        if (this.days[date]) {
            this.days[date].tasks[taskId] = true; // Mark task as complete
            this.checkBlockCompletion(date);
        }
    }

    checkBlockCompletion(date) {
        const day = this.days[date];
        const allTasksCompleted = Object.values(day.tasks).every(completed => completed);
        day.completed = allTasksCompleted;
    }

    calculateStreak(date) {
        // Implement streak calculation logic here
        // Use the current date and the previously recorded days to calculate streaks
    }

    generateGuidance(date) {
        const day = this.days[date];
        if (day.completed) {
            return 'Great job! Keep the momentum going!';
        } else {
            return 'You have tasks pending. Stay focused!';
        }
    }
}

// Export the state manager for use in other parts of the application
export default RoutineFlowState;