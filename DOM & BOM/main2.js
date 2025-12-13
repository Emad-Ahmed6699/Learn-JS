//<<<<<<<<<<<<<<<<<<<<<Events>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function print() {
    console.log('hello');
}
//1-onclick
let thirdbtn = document.getElementById('thirdbtn');
thirdbtn.onclick = print;
//or
thirdbtn.onclick = function print2() {
    console.log('hello');
}

//2-add event listener
thirdbtn.addEventListener('click', print);
//or
thirdbtn.addEventListener('click', function print3() {
    console.log('hello');
});

//what is the difference between onclick and addEventListener
//onclick is used to add a single event listener while addEventListener is used to add multiple event listeners
let fourthbtn = document.getElementById('fourthbtn');
fourthbtn.addEventListener('click', function print4() {
    fourthbtn.style.background = 'orange';
});
fourthbtn.addEventListener('click', function print5() {
    fourthbtn.style.color = 'red';
});
//the last event listener will override the previous event listener
let fivethbtn = document.getElementById('fivethbtn');
fivethbtn.onclick = function print6() {
    fivethbtn.style.background = 'orange';
    fivethbtn.style.color = 'red';
};
fivethbtn.onclick = function print7() {
    fivethbtn.style.background = 'green';
    fivethbtn.style.color = 'blue';
}
////--------------------------------احداث الماوس-----------------------------------------
//onclick 
let mouseupbtn = document.getElementById('btn');
mouseupbtn.onmouseup = function print8() {
    mouseupbtn.style.background = 'orange';
    mouseupbtn.style.color = 'red';
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
let i = 0;
x.onkeypress = function print9() {
    console.log('click ' + i++);
}
//------------------------------------------احداث الفورم-----------------------------------------
//onfocus : when the element is focused
//onblur : when the element is unfocused
//onchange : when the value of the element changes
//oncut : when text is cut from the element
//oncopy : when text is copied from the element
//onpaste : when text is pasted into the element
//oninput : when the value of the element changes
x.onfocus = function print10() {
    x.style.border = '3px solid orange';
    x.style.color = 'red';
}
x.onblur = function print11() {
    x.style.border = '3px solid green';
    x.style.color = 'blue';
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
window.onload = function print12() {
    this.document.body.style.background = 'lightblue';
}
onresize = function print13() {
    this.document.body.style.background = 'purple';
}

//example of dolar
let dolar = document.getElementById('dolar');
let pound = document.getElementById('pound');
dolar.oninput = function print14() {
    pound.value = dolar.value * 50;
}
pound.oninput = function print15() {
    dolar.value = pound.value / 50;
}
// example of paragraph and the div
let afterbtn = document.getElementById('after');
let beforebtn = document.getElementById('before');
let insidebtn = document.getElementById('inside');
let content = document.getElementById('content');
let container = document.getElementById('container');
container.style.background = 'yellow';
container.style.height = '100px';
afterbtn.onclick = function print16() {
    container.after(content);
}
beforebtn.onclick = function print17() {
    container.before(content);
}
insidebtn.onclick = function print18() {
    container.append(content);
}

//example of paragraph (add class and remove class and toggle class and onclick event)
let par = document.getElementById('paraa');
console.log(par.classList);//return the class list of the element
par.classList.add('myclass', 'name');
console.log(par.classList);
par.classList.remove('myclass');
console.log(par.classList);
par.classList.toggle('myclass');//if the class is not exist it will add it
console.log(par.classList);
par.classList.toggle('myclass');
par.onclick = function print19() {
    par.classList.add('classeses');
}
par.oncontextmenu = function print20() {
    par.classList.remove('classeses');
}
par.onclick = function print21() { //toggle : if the class is not exist it will add it (click to add and click to remove)
    par.classList.toggle('classeses');
}

// navbar example
let container2 = document.querySelector('.containert');
let openbtn = document.getElementById('open');
let closebtn = document.getElementById('close');
openbtn.onclick = function print22() {
    container2.style.display = 'block';
    openbtn.classList.add('hide');
    closebtn.classList.remove('hide');
}
closebtn.onclick = function print23() {
    container2.classList.add('hide');
    closebtn.classList.add('hide');
    openbtn.classList.remove('hide');
}
//focus example 
let focus = document.getElementById('focus');
let txt = document.getElementById('clicks');
focus.focus();
//or 
focus.onload = function print24() {
    focus.focus();
    focus.placeholder = 'anything'; //change the placeholder
    focus.value = 'anything'; //change the value
    txt.click();//click on the element
}
focus.oncontextmenu = function print25() {
    focus.blur();   //remove the focus
}

//picture example
let pic = document.getElementById('img1');
let pic2 = document.getElementById('img2');
let pic3 = document.getElementById('img3');
pic.onclick = function print26() {
    pic3.src = pic.src;

}
pic2.onclick = function print27() {
    pic3.src = pic2.src;
}

//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//---------------------------------------BOM--------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//-------------------------------Browser Object Model-----------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

window.scroll(0, 0); //scroll to the top of the page ---> window.scroll(x,y)
window.scroll(0, 200); //scroll to the bottom of the page (to y axis)
window.scroll(200, 0); //scroll to the right of the page (to x axis)
window.scroll(200, 200); //scroll to the bottom right of the page

window.scrollBy(0, 200); //scroll to the bottom of the page (to y axis)
window.scrollBy(200, 0); //scroll to the right of the page (to x axis)
window.scrollBy(200, 200); //scroll to the bottom right of the page
//scollBy : scroll the window by a specified amount
window.scrollX; //returns the horizontal scroll position of the window
window.scrollY; //returns the vertical scroll position of the window

//so we will create the buttom that will scroll the page to the top (famous button)
let topbtn = document.getElementById('top');
topbtn.onclick = function print28() {
    window.scroll(0, 0);
}
topbtn.onscroll = function print29() {
    if (window.scrollY > 0) {
        topbtn.style.display = 'block';
    } else {
        topbtn.style.display = 'none';
    }
}
//// window screen 
window.screenX; //returns the horizontal position of the screen
window.screenY; //returns the vertical position of the screen
window.screen.width; //returns the width of the screen
window.screen.height; //returns the height of the screen

///// window location
window.location.href; //returns the URL of the current page
window.location.hostname; //returns the hostname of the current page
window.location.pathname; //returns the path of the current page
window.location.port; //returns the port number of the current page
window.location.protocol; //returns the protocol of the current page

let link = document.getElementById('link');
link.onclick = function print29() {
    window.location.href = 'https://www.google.com';
}
//window history
window.history.length; //returns the number of entries in the history stack
//history example
let backbtn = document.getElementById('back');
let forwardbtn = document.getElementById('foreward');
backbtn.onclick = function print30() {
    window.history.back(); //back to the previous page
}
forwardbtn.onclick = function print31() {
    window.history.forward();//forward to the next page
}
//window reload
let reloadbtn = document.getElementById('relaod');
reloadbtn.onclick = function print32() {
    window.location.reload(); //reload the current page
}
//window assign
let assignbtn = document.getElementById('assign');
assignbtn.onclick = function print33() {
    window.location.assign('https://www.google.com'); //assign a new URL to the current page(we can go back to the previous page)
}
//window replace
let replacebtn = document.getElementById('replace');
replacebtn.onclick = function print34() {
    window.location.replace('https://www.google.com'); //replace the current page with a new URL(we can't go back to the previous page)
}
//window settimeout
window.setTimeout(function () {
    console.log('Hello35');
}, 1000);//after 3 seconds print hello (settimeout take milliseconds)
function print35() {
    console.log('Hello35');
}
//window setinterval
let hh =window.setInterval(print36, 3000);//after 3 seconds print hello (settimeout take milliseconds)
let h =0 ;
function print36() {
    console.log('Hello36');
    i++;
    if (i == 5) {
        clearInterval(hh);//stop the interval
        //to stop the interval we have to use clearInterval and must pass the interval id
        //so we have to store the interval id in a variable
    }
}
//the difference between settimeout and setinterval
//settimeout is used to execute a function once after a specified time
//setinterval is used to execute a function repeatedly at a specified interval

//---------------------------------------------------------------------------
//session storage 
//session storage is used to store data in the browser (-- just in the current tab--)
//session storage is not secure
//session storage is not persistent
//session storage is not shared between different websites

//so we have to use local storage
//local storage is used to store data in the browser(-- just in all tabs--)
//local storage is secure
//local storage is persistent
//local storage is shared between different websites
//local storage is cleared when the browser is closed
//local storage is cleared when the user logs out

localStorage.setItem('name', 'Emad');//we store the value using the key and value.
localStorage.name = 'Emad Ahmed'; //set the value of the name key to 'Emad Ahmed'

localStorage.getItem('name'); //get the value of the name key
localStorage.name; //get the value of the name key (we can use this method instead of getItem)

localStorage.setItem('age', 23); // the key and the value must be strings even if the value is a number
localStorage.user = { name: 'Emad', age: 23 }; //we can store objects in local storage
//the object will be converted to a string and stored in local storage (this is called serialization in javascript)
//to solve this problem we have to use JSON.stringify
localStorage.setItem('user', JSON.stringify({ name: 'Emad', age: 23 }));// the type of the value must be string
console.log(JSON.parse(localStorage.getItem('user')));//the type of the value must be object
//.key(); returns an array of all the keys in local storage
console.log(localStorage.key(0)); //returns the first key in local storage
console.log(localStorage.key(1)); //returns the second key in local storage
//.clear(); clears all the data in local storage
//.removeItem('key'); removes the key from local storage
localStorage.removeItem('name')
//localStorage.clear(); //clears all the data in local storage



//the application on localstorage
let t = document.getElementById('txt');

t.onkeyup =function print37() {
    localStorage.setItem('name', t.value);
}

if(localStorage.length > 0) {
    t.value = localStorage.getItem('name');
}
//when the user refresh the page we have to save the data in localstorage
