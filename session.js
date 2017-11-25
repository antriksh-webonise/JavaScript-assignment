var session = {storage: sessionStorage};
var local = {storage: localStorage};


var setVal = function() {
    var keyval = document.getElementById('key').value;
    var value = document.getElementById('value').value;
    this.storage.setItem(keyval,value);
    alert("Data added!");
}

var setInLocal=setVal.bind(local);
var setInSession=setVal.bind(session);


var getItems = function() {
  var a = document.getElementById('key1').value;
  console.log(a);
  var p = this.storage.getItem(a);
  console.log(p);
  if (!p)
      alert("Key-value pair does not exist!");
  else
      console.log("Key" + " " + a + " " + "has value" + " " + p);
}

var getSingleFromLocal=getItems.bind(local);
var getSingleFromSession=getItems.bind(session);


var clearStorage = function() {
   this.storage.clear();
   alert("The storage is cleared!");
}

var clearLocalStorage=clearStorage.bind(local);
var clearSessionStorage=clearStorage.bind(session);


var getVal = function() {
      var x = this.storage.length;
      if (x == 0)
          alert("Storage is already empty");
   else
        for(var i = 0; i < x; i++) {
            var key = this.storage.key(i);
            var value = this.storage[key];
            console.log("Key " + "" + key + " " +  "has value " + " " + value);
        }
}

var getFromLocal=getVal.bind(local);
var getFromSession=getVal.bind(session);


var remItem = function(){
  var a = document.getElementById('key2').value;
  this.storage.removeItem(a);
  alert("Item removed");
}

var remFromLocal=remItem.bind(local);
var remFromSession = remItem.bind(session);
