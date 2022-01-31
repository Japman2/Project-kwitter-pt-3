function adduser() {
    username = document.getElementById("Text_input").value;
    
    localStorage.setItem("username", username);
    window.location = "kwitter_project_room.html";
}