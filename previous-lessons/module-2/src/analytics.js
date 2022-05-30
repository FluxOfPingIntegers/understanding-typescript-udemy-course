"use strict";
let logged; // variables are tracked as they are used, functions are tracked as they're defined.
function sendAnalytics(data) {
    console.log(data);
    logged = true;
}
sendAnalytics('The data');
