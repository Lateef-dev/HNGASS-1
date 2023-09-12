'use strict';

const mySlackUserName = "Hiler";
const myTrack = "FRONTEND TRACK";
const currentDayText = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');
const slackUserName = document.querySelector('[data-testid="slackUserName"]');

slackUserName.textContent = mySlackUserName;

const updateDayOfWeekAndTime = () => {
    const currentDate = new Date();
    const dayOfWeekOptions = {
        weekday: 'long'
    }

    const timeOptions = { 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric'
    };

    const dayOfWeek = currentDate.toLocaleString(undefined,  dayOfWeekOptions);
    const time = currentDate.toLocaleString(undefined, timeOptions)

    currentDayText.textContent = `Current Day: ${dayOfWeek}`;
    currentTime.textContent = ` Current Time: ${time}`;

}

updateDayOfWeekAndTime();
setInterval(updateDayOfWeekAndTime, 1000);