
console.log(111)
function login(){
    const username = document.getElementById('name').value;
    const userpassword = document.getElementById('password').value;
    console.log(123)
    if(username =="boopathi@gmail.com" && userpassword == "booba"){
        alert("hello boob")
        window.open("https://www.youtube.com/")
    }
    else{
       alert("username or password may be wrong");
       window.location.reload()
    }
    
}