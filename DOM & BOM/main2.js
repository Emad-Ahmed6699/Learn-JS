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
let x = document.getElementById('input');
let i =0;
x.onkeypress = function print9(){
    console.log('click '+ i++);
}
//------------------------------------------احداث الفورم-----------------------------------------
//onfocus : when the element is focused
//onblur : when the element is unfocused
//onchange : when the value of the element changes
//oncut : when text is cut from the element
//oncopy : when text is copied from the element
//onpaste : when text is pasted into the element
//oninput : when the value of the element changes
x.onfocus = function print10(){
    x.style.border ='3px solid orange';
    x.style.color ='red';
}
x.onblur = function print11(){
    x.style.border ='3px solid green';
    x.style.color ='blue';
}
//------------------------------------------احداث الصفحة-----------------------------------------
//onbeforeunload : when the page is about to be unloaded
//onunload : when the page is unloaded
//onload : when the page is loaded
//onbeforeprint : when the page is about to be printed
//onafterprint : when the page has been printed
//onhashchange : when the hash of the URL changes
//onpagehide : when the page is hidden
//onpageshow : when the page is shown
//onpopstate : when the history stack changes
//onresize : when the window is resized
//onscroll : when the window is scrolled
//onvisibilitychange : when the visibility of the window changes
// we can use wondow event or we not use window event
window.onload = function print12(){
    this.document.body.style.background = 'lightblue';
}
onresize = function print13(){
    this.document.body.style.background = 'purple';
}

//example of dolar
let dolar =document.getElementById('dolar');
let pound =document.getElementById('pound');
dolar.oninput = function print14(){
    pound.value = dolar.value*50;
}
pound.oninput = function print15(){
    dolar.value = pound.value/50;
}
// example of paragraph and the div
let afterbtn = document.getElementById('after');
let beforebtn = document.getElementById('before');
let insidebtn = document.getElementById('inside');
let content = document.getElementById('content');
let container = document.getElementById('container');
container.style.background = 'yellow';
container.style.height = '100px';
afterbtn.onclick = function print16(){
    container.after(content);
}
beforebtn.onclick = function print17(){
    container.before(content);
}
insidebtn.onclick = function print18(){
    container.append(content);
}

//example of paragraph (add class and remove class and toggle class and onclick event)
let par = document.getElementById('paraa');
console.log(par.classList);//return the class list of the element
par.classList.add('myclass','name');
console.log(par.classList);
par.classList.remove('myclass');
console.log(par.classList);
par.classList.toggle('myclass');//if the class is not exist it will add it
console.log(par.classList);
par.classList.toggle('myclass');
par.onclick = function print19(){
    par.classList.add('classeses');
}
par.oncontextmenu = function print20(){
    par.classList.remove('classeses');
}
par.onclick = function print21(){ //toggle : if the class is not exist it will add it (click to add and click to remove)
    par.classList.toggle('classeses');
}