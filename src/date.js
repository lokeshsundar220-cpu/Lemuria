// src/date.js

/**
 * Formats a date into a specified format.
 * @param {Date} date - The date object to format.
 * @param {string} format - The format string.
 * @returns {string} - The formatted date string.
 */
function formatDate(date, format) {
    // Implement formatting logic
    return date.toISOString(); // Default to ISO format
}

/**
 * Parses a time string into a Date object.
 * @param {string} timeString - The time string to parse.
 * @returns {Date} - The parsed Date object.
 */
function parseTime(timeString) {
    return new Date(timeString);
}

/**
 * Generates a greeting based on the current time.
 * @returns {string} - The greeting message.
 */
function generateGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return 'Good Morning!';
    } else if (hour < 18) {
        return 'Good Afternoon!';
    } else {
        return 'Good Evening!';
    }
}

/**
 * Formats a duration in seconds to a human-readable string.
 * @param {number} seconds - The duration in seconds.
 * @returns {string} - The formatted duration string.
 */
function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
}

module.exports = { formatDate, parseTime, generateGreeting, formatDuration };