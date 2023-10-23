//clearsettimeout
var x = 0;
var timer = setTimeout(function(){
    console.log("O x e = "+ x)
}, 3000
)
x = 5;
if(x>0){
    clearTimeout(timer);
    setTimeout((console.log(x)),30000);
}
//clearsetinterval

