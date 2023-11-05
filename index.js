document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('logged') === null) {
        location.assign('MoanneCompany/web/logon/index.html');
    }

    
});