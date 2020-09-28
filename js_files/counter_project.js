
var rank = document.querySelector(".container .counter .rank");
// document.write("the document is : " +  rank);

var num = parseInt(rank.innerHTML);
// document.write(num);
var count = 0;
setInterval(()  => {
    if(count < num){
        count++;
        rank.innerHTML = count;
    }
},1);

var stat = document.querySelector(".container .counter .status");
document.write("the result is :" + status);


setTimeout(() => {
    if(num < 7000){
        stat.innerHTML = "QUALIFIED";
    }else{
        stat.innerHTML = "Better Luck Next Time ! ";
    }
} ,5000);


