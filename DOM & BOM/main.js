// Dom (Document Object Model)

//--------------------------------------------------------------------------------\\
//1-getElementById 
document.getElementById('head');// selects the element with the specific ID 'head'
// we can use this method to access and manipulate the element directly.
console.log(document.getElementById('head')); // Output: <h1 id="head">Emad Ahmed</h1>
console.log(document.getElementById('head').innerText); // Output: Emad Ahmed
console.log(document.getElementById('head').innerHTML); // Output: Emad Ahmed 
console.log(document.getElementById('head').id); // Output: head
console.log(document.getElementById('head').tagName); // Output: H1
// we can also change the content of the element
document.getElementById('head').innerText = "Welcome to DOM Manipulation";
console.log(document.getElementById('head').innerText); // Output: Welcome to DOM Manipulation
document.getElementById('head').style.color = "blue"; // changes the text color to blue

//===> from accessing the element using its id ,we can manipulate it in various ways 
// such as changing its style, attributes, and content.
//--------------------------------------------------------------------------------\\

//2-getElementsByClassName
document.getElementsByClassName('para');// selects <-all-> elements with the class name 'para'\
// we can use this method to access and manipulate multiple elements that share the same class name.
console.log(document.getElementsByClassName('para')); // Output: HTMLCollection(3) [p.para, p.para, p.para] (array-like object)
console.log(document.getElementsByClassName('para')[0]);//accessing the first element that have a class para
document.getElementsByClassName('para')[0].innerText = "This is the updated first paragraph.";
document.getElementsByClassName('para')[1].style.color='red';
//3-getElementsByTagName
document.getElementsByTagName('p');// selects <-all-> elements with the tag name 'p'
document.getElementsByTagName('p')[1].style.fontWeight='bold';

//----------------------------------------------------------------------------------\\
//4-querySelector ((select the first element that matches))
let x =document.querySelector('.para');// selects the first element that matches the CSS selector '.para'(class name-->.)
let y =document.querySelector('#head');//(id-->#)
let z =document.querySelector('h1');//(the element)
z.style.fontWeight='bold';//accessing any element using queryselector
//5-querySelectorAll ((select all element))
let a =document.querySelectorAll('.para'); //that returns an array so we can access the first match using ([0]after the () )
document.querySelectorAll('.para')[2].style.color='green';
//----------------------------------------------------------------------------------\\

//accessing the body
console.log(document.body);
//accessing the title
console.log(document.title);
//changing the title
document.title="New Title";
//accessing the images
console.log(document.images);
console.log(document.images[0]);//accessing the first image
console.log(document.images[1].src);//accessing the src of the second images
//accessing the links
console.log(document.links);
console.log(document.links[0]);//accessing the href of the first link
console.log(document.links[1].href);//accessing the href of the second link
document.links[1].style.color='red';//changing the color of the second link
document.links[0].href="https://www.google.com";//changing the href of the first link
//accessing the forms
console.log(document.forms);//HTMLCollection[]
console.log(document.forms[0]);//accessing the first form
//----------------------------------------------------------------------------------\\
//attributes(get ,set,remove)
let img2 = document.getElementById('img2');
//get attribute
console.log(img2.src);//getting the src attribute of the image
console.log(img2.alt);//getting the alt attribute of the image
console.log(img2.getAttribute('src'));//getting the src attribute of the image
//set attribute
img2.alt="This is a new alt text";//setting a new alt attribute
img2.setAttribute('title','This is a title attribute');//setting a new title attribute
img2.title="This is another title attribute";//setting a new title attribute
//remove attribute
img2.removeAttribute('title');//removing the title attribute
// if this element has attributes
console.log(img2.hasAttributes());
console.log(img2.hasAttribute('alt'));
console.log(img2.hasAttribute('title'));
//display all attributes
console.log(img2.attributes);
console.log(img2.attributes[0]);
