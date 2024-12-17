/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const ScriptURL = 'https://script.google.com/macros/s/AKfycbzgUURtX-SJ5JjyFv1_vMOSaYniS8j9e_1QqpO54fgdsB5vrpXv26rokX2SeoZ_LTTB/exec';

const form = document.forms['contactForm'];

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent form submission
    fetch(ScriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Thank you! Form submitted successfully");
            window.location.reload(); // Reload the page
        })
        .catch(error => console.error('Error!', error.message));
});
