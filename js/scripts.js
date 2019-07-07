// Select the form with the id of ageForm
$("#ageForm").submit(() => {
    // Stire the input for each period of time in a variable
    let day = $("#birthDay").val();
    let month = $("#birthMonth").val();
    let year = $("#birthYear").val();
    let age  = $("#requiredAge").val();
    // If there is no input,if the input for month is > 12 , or for some weird reason the user is over 119 years old, display the error. 
    if (day == "" || month == "" || year == "" || month > 12 || year < 1900) {
        // On default this p elemet is hidden
        document.getElementById('hidden').style.display = "block";
        // Prevent reloading the page
        event.preventDefault();
        return false;
    }
    // Counting starts from 0, so we use 01
    let mydate = new Date();
    mydate.setFullYear(year, month-1, day);
    // Calculate the age of the user, using the current year, month and day
    let currdate = new Date();
    currdate.setFullYear(currdate.getFullYear() - age);
    // if the user is younger than 18 years, show the error
    if ((currdate - mydate) < 18){
        document.getElementById('hidden').style.display = "block";
        event.preventDefault();
        return false;
    }
    // At this point, we only have one option left: the user is => 18
        window.location.assign("https://www.flatrocktech.com/");  
        event.preventDefault();
        return true;  
});

