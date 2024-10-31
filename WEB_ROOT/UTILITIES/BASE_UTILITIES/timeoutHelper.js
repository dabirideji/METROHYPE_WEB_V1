import { STORAGE,STORAGE_TYPE } from "./storageHelper";


/**
 * Sets up an inactivity timeout based on a condition function.
 * @param {number} timeoutDuration - Time in milliseconds for inactivity.
 * @param {function} conditionFn - Condition function to check before triggering timeout.
 * @param {function} onTimeout - Function to execute on timeout if condition is met.
 * @returns {Object} - Functions to reset or stop the inactivity handler.
 */
export function setupConditionalInactivityTimeout(timeoutDuration, conditionFn, onTimeout) {
    let inactivityTimer;

    function resetTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            if (conditionFn()) {
                onTimeout();
            }
        }, timeoutDuration);
    }

    function setupEventListeners() {
        const events = ['mousemove', 'keypress', 'click', 'scroll', 'touchstart'];
        events.forEach(event => window.addEventListener(event, resetTimer));
    }

    function removeEventListeners() {
        const events = ['mousemove', 'keypress', 'click', 'scroll', 'touchstart'];
        events.forEach(event => window.removeEventListener(event, resetTimer));
    }

    setupEventListeners();
    resetTimer();

    return {
        reset: resetTimer,  // manual reset
        stop: function() {
            clearTimeout(inactivityTimer);
            removeEventListeners();
        }
    };
}

/**
 * Example: Checks if a user is logged in by looking at the local storage.
 * @returns {boolean} - Returns true if the user is logged in.
 */
function isUserLoggedIn() {
    return !!STORAGE.get('userData', STORAGE_TYPE.LOCAL);
}


function logoutUser() {
    alert('You have been logged out due to inactivity.');
    STORAGE.remove('userLoginCredentials', STORAGE_TYPE.LOCAL);
    STORAGE.remove('userData', STORAGE_TYPE.SESSION);
    window.location.href = '/logout';
}

const inactivityDuration = 5 * 60 * 1000;  // 5 minutes

// Initialize the inactivity handler with the condition (user logged in) and the logout action
const inactivityHandler = setupConditionalInactivityTimeout(inactivityDuration, isUserLoggedIn, logoutUser);

// Optional: Functions to stop or manually reset the inactivity handler
// inactivityHandler.stop();
// inactivityHandler.reset();
