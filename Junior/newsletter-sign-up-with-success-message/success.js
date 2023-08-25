document.addEventListener("DOMContentLoaded", function() {
    const emailplace = document.getElementById("emailplace");

    insertEmail();

    function insertEmail(){
        const email = localStorage.getItem("emailstorage"); 
        emailplace.textContent = email;
    }

});