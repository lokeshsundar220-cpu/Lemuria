class PomodoroTimer {
    constructor(workDuration = 25, breakDuration = 5) {
        this.workDuration = workDuration * 60; // in seconds
        this.breakDuration = breakDuration * 60; // in seconds
        this.currentDuration = this.workDuration;
        this.isRunning = false;
        this.timer = null;
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.timer = setInterval(() => {
            if (this.currentDuration <= 0) {
                this._notify();
                this.reset();
                return;
            }
            this.currentDuration--;
        }, 1000);
    }

    pause() {
        this.isRunning = false;
        clearInterval(this.timer);
    }

    reset() {
        this.pause();
        this.currentDuration = this.workDuration; // Reset to work duration
    }

    setWorkDuration(minutes) {
        this.workDuration = minutes * 60;
        this.reset();
    }

    setBreakDuration(minutes) {
        this.breakDuration = minutes * 60;
        this.reset();
    }

    _notify() {
        console.log('Pomodoro time is up! Take a break.');
        // You can implement additional notification logic here,.
        // e.g., using browser notifications or UI alerts
    }
}

// Example usage:
const timer = new PomodoroTimer(25, 5);
timer.start();