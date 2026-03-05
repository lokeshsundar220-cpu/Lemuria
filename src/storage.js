// src/storage.js

const ROUTINEFLOW_STORAGE_KEY = 'routineflow_data';

function getStoredData() {
    const data = localStorage.getItem(ROUTINEFLOW_STORAGE_KEY);
    return data ? JSON.parse(data) : {};
}

function saveData(data) {
    localStorage.setItem(ROUTINEFLOW_STORAGE_KEY, JSON.stringify(data));
}

export function saveTemplate(template) {
    const data = getStoredData();
    data.template = template;
    saveData(data);
}

export function getTemplate() {
    return getStoredData().template || null;
}

export function saveDailyHistory(history) {
    const data = getStoredData();
    data.dailyHistory = history;
    saveData(data);
}

export function getDailyHistory() {
    return getStoredData().dailyHistory || [];
}

export function saveSettings(settings) {
    const data = getStoredData();
    data.settings = settings;
    saveData(data);
}

export function getSettings() {
    return getStoredData().settings || {};
}

export function importData(data) {
    saveData(data);
}

export function exportData() {
    return getStoredData();
}