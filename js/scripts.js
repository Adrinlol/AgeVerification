$("#ageForm").submit(function(){
    let day = $("#birthDay").val();
    let month = $("#birthMonth").val();
    let year = $("#birthYear").val();
    let age  = $("#requiredAge").val();
    if (day == "" || month == "" || year == "" || month > 12 || year < 1900) {
        document.getElementById('mybox').style.display = "block";
        event.preventDefault();
        return false;
    }
    let mydate = new Date();
    mydate.setFullYear(year, month-1, day);

    let currdate = new Date();
    currdate.setFullYear(currdate.getFullYear() - age);
    if ((currdate - mydate) < 0){
        document.getElementById('mybox').style.display = "block";
        event.preventDefault();
        return false;
    }
    window.location.assign("https://www.flatrocktech.com/");  
    event.preventDefault();
    return true;  
});

