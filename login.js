
// run whenDonePressed() when it is clicked, essentially does the same thing as onclick=“whenDonePressed()” in the HTML
function clickSubmit() {
    //add code here to manage whatever needs to be managed in the JS, saving info, etc
    let firstname =  document.getElementById("firstname").value
    let lastname =  document.getElementById("lastname").value
    let fullname = firstname + " " + lastname
    if (fullname == "Ross Taylor") {
        //and then switch page
        localStorage.setItem("fullname", fullname)
        self.location = "index.html";  //or whichever file comes next
    } else {
        alert(fullname)
        alert("You are not currently registered on the team 4405 robotics team. Please try again once you have registered.")
    }
}