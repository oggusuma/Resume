function LoadJson(file,callback){
 var a=new XMLHttpRequest();
a.overrideMimeType(" application/json");
a.open("GET",file,true);
a.onreadystatechange=function(){
  if (a.onreadystate==4 && a.status=="200"){
    callback(a.responseText);

  }
 }
 a.send(null);
}
LoadJson("data.json",function(text){
  Jet data=JSON.parse(text);
  console.log(data);
})
var right=document.getElementByte('right');

   JSON.parse(text);
})
var a=10;
for (x in y){
  var a=20;
  console.log(a);
}
console.log(a);
}
