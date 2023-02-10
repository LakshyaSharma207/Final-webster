const form = document.getElementById("profile-form");
form.addEventListener("submit", function(event
    ) {
        event.preventDefault();
        
        const firstName = form.elements["first-name"].value;
        const lastName = form.elements["last-name"].value;
        const dob = form.elements.dob.value;
        const phone = form.elements.phone.value;
        const email = form.elements.email.value;
        const address = form.elements.address.value;
        const pincode = form.elements.pincode.value;
        
        // Do something with the data here, such as sending it to a server or storing it in local storage
        
        
        alert("Profile data submitted successfully!");
        });