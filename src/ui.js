// src/ui.js

/**
 * Utility module for shared UI helper functions
 */

/**
 * Function to show an element
 * @param {HTMLElement} element - The element to show
 */
export function showElement(element) {
    element.style.display = 'block';
}

/**
 * Function to hide an element
 * @param {HTMLElement} element - The element to hide
 */
export function hideElement(element) {
    element.style.display = 'none';
}

/**
 * Function to render a list of items
 * @param {Array} items - Array of items to render
 * @param {HTMLElement} container - The container element to render the list
 */
export function renderList(items, container) {
    container.innerHTML = '';
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        container.appendChild(listItem);
    });
}

/**
 * Function to manage modals
 * @param {HTMLElement} modal - The modal element
 * @param {boolean} isOpen - Whether to open or close the modal
 */
export function toggleModal(modal, isOpen) {
    if (isOpen) {
        showElement(modal);
    } else {
        hideElement(modal);
    }
}

/**
 * Function to display a toast notification
 * @param {string} message - The message to display
 * @param {number} duration - Duration to show the toast in milliseconds
 */
export function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'toast';
    document.body.appendChild(toast);
    setTimeout(() => {
        document.body.removeChild(toast);
    }, duration);
}