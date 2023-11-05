document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('logged') === null) {
        this.location.assign('/logon/index.html');
    }

    
});