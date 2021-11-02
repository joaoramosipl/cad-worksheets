$(function() {
    'use strict';
    
    var viewsCounter =
        sessionStorage.getItem('viewsCounter');

    if (!viewsCounter) {
        viewsCounter = 0;
    }

    viewsCounter++;
    sessionStorage.setItem('viewsCounter', viewsCounter);
    console.log('viewscounter = ' + viewsCounter);
    sessionStorage.removeItem('viewsCounter');
    console.log('viewscounter = ' + sessionStorage.getItem('viewsCounter'));
    
});