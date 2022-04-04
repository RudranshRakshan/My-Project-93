empty="";
function logIn(){
    if(document.getElementById("userName").value==empty){
        document.getElementById("errorText").innerHTML="#Please type a name!!";
    }else{
        user=document.getElementById("userName").value ;
        localStorage.setItem("UserName",user);
        window.location="home.html";
    }
    
}