//<<<<<<<<<<<<<<<<<<<<<Events>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function print(){
    console.log('hello');
}
//1-onclick
let thirdbtn = document.getElementById('thirdbtn');
thirdbtn.onclick = print;
//or
thirdbtn.onclick = function print2 (){
    console.log('hello');
}

//2-add event listener
thirdbtn.addEventListener('click', print);
//or
thirdbtn.addEventListener('click', function print3(){
    console.log('hello');
});

//what is the difference between onclick and addEventListener
//onclick is used to add a single event listener while addEventListener is used to add multiple event listeners
let fourthbtn = document.getElementById('fourthbtn');
fourthbtn.addEventListener('click', function print4(){
    fourthbtn.style.background ='orange';
});
fourthbtn.addEventListener('click', function print5(){
    fourthbtn.style.color ='red';
});
//the last event listener will override the previous event listener
let fivethbtn = document.getElementById('fivethbtn');
fivethbtn.onclick = function print6(){
    fivethbtn.style.background ='orange';
    fivethbtn.style.color ='red';
};
fivethbtn.onclick =function print7 (){
    fivethbtn.style.background ='green';
    fivethbtn.style.color ='blue';
}
////--------------------------------احداث الماوس-----------------------------------------
//onclick 
let mouseupbtn = document.getElementById('btn');
mouseupbtn.onmouseup = function print8(){
    mouseupbtn.style.background ='orange';
    mouseupbtn.style.color ='red';
};
//onmouseup : when the mouse button is released
//onmousedown : when the mouse button is pressed (من غير ما اسيب ضغطه الماوس)
//onmouseover : when the mouse enters the element (اول الماوس يعدي علي الزرار)
//onmouseout : when the mouse leaves the element (اول الماوس يطلع من الزرار)
//onmousemove : when the mouse is moved (مدام مواي في الزرار هيشتغل لل مالنهايه)
//onmouseenter : when the mouse enters the element (من غير ما اسيب ضغطه الماوس)
//onmouseleave : when the mouse leaves the element (من غير ما اسيب ضغطه الماوس)
//onmousewheel : when the mouse wheel is scrolled

//--------------------------------احداث الكيبورد-----------------------------------------
//onkeydown : when a key is pressed (من غير ما اسيب ضغطه الماوس)
//onkeypress : when a key is pressed and released (من غير ما اسيب ضغطه الماوس)
//onkeyup : when a key is released (من غير ما اسيب ضغطه الماوس)
