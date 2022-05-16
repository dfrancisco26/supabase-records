// import functions and grab DOM elements
import { getRecords } from './fetch-utils.js';
import { simpleRender } from './utils.js';

// let state

window.addEventListener('load', async () => {
    const records = await getRecords();
    for (let record of records) {
        const recordsDiv = document.getElementById('records');
        const recordDiv = simpleRender(record);
        recordsDiv.append(recordDiv);

    }
});

    
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
