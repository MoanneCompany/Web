jQuery.ajax({
    url: 'mysql.php',
    method: 'GET',
    success: function(response){
        alert(response);
    },
    error: function(err) {
        alert(err);
    }
});