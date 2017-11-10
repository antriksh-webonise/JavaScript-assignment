
document.getElementById("set").addEventListener("click", function(exp){
    
    var type = exp.target.id; 
   
    if(type=="b1" && document.getElementById("key1").value.length != 0){
        sessionStorage.setItem(document.getElementById("key1").value,document.getElementById("value1").value);
        alert("Stored in session storage");
        
    }
    else if(type=="b2" && document.getElementById("key1").value.length != 0){
        localStorage.setItem(document.getElementById("key1").value,document.getElementById("value1").value);
        alert("Stored in local storage");

    }
    else if(type=="b3" && document.getElementById("key1").value.length != 0){
        var cookieKey = document.getElementById("key1").value;
        var cookieValue = document.getElementById("value1").value;
        console.log(document.cookie = cookieKey + " " + cookieValue + " stored in cookie");
        alert("Stored in cookie");
    }
},false);

document.getElementById("get").addEventListener("click", function(exp){
    var type = exp.target.id; 
    //console.log(exp);
    if(type=="b3" && document.getElementById("key2").value.length != 0){
        var result = sessionStorage.getItem(document.getElementById("key2").value);
        alert(result);
    }
    else if(type=="b4" && document.getElementById("key2").value.length != 0){
        var result = localStorage.getItem(document.getElementById("key2").value);
        alert(result);

    }
},false);

document.getElementById("list").addEventListener("click", function(exp){
    var type = exp.target.id; 
    if(type=="b5"){
        for(var i = 0; i < sessionStorage.length; i++){
         console.log(sessionStorage.getItem(sessionStorage.key(i)));    
        }
    }
    else if(type=="b6"){
        for(var i = 0; i < localStorage.length; i++){
         console.log(localStorage.getItem(localStorage.key(i)));    
        }
    }
},false);

document.getElementById("clear").addEventListener("click", function(exp){
    var type = exp.target.id; 
    //console.log(x);
    if(type=="b7"){
        sessionStorage.clear();
        alert("Session storage cleared")
    }
    else if(type=="b8"){
        localStorage.clear();
        alert("Local storage cleared")

    }
},false);

document.getElementById("remove").addEventListener("click", function(exp){
    var type = exp.target.id; 
    //console.log(x);
    if(type=="b9" && document.getElementById("key3").value.length!=0){
        sessionStorage.removeItem(document.getElementById("key3").value);
        alert("Item removed");
    }
    else if(type=="b10" && document.getElementById("key3").value.length!=0){
        localStorage.removeItem(document.getElementById("key3").value);
        alert("Item removed");
    }
},false);



