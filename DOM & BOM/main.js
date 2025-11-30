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
document.getElementsByClassName('para')[1].style.color = 'red';
//3-getElementsByTagName
document.getElementsByTagName('p');// selects <-all-> elements with the tag name 'p'
document.getElementsByTagName('p')[1].style.fontWeight = 'bold';

//----------------------------------------------------------------------------------\\
//4-querySelector ((select the first element that matches))
let x = document.querySelector('.para');// selects the first element that matches the CSS selector '.para'(class name-->.)
let y = document.querySelector('#head');//(id-->#)
let z = document.querySelector('h1');//(the element)
z.style.fontWeight = 'bold';//accessing any element using queryselector
//5-querySelectorAll ((select all element))
let a = document.querySelectorAll('.para'); //that returns an array so we can access the first match using ([0]after the () )
document.querySelectorAll('.para')[2].style.color = 'green';
//----------------------------------------------------------------------------------\\

//accessing the body
console.log(document.body);
//accessing the title
console.log(document.title);
//changing the title
document.title = "New Title";
//accessing the images
console.log(document.images);
console.log(document.images[0]);//accessing the first image
console.log(document.images[1].src);//accessing the src of the second images
//accessing the links
console.log(document.links);
console.log(document.links[0]);//accessing the href of the first link
console.log(document.links[1].href);//accessing the href of the second link
document.links[1].style.color = 'red';//changing the color of the second link
document.links[0].href = "https://www.google.com";//changing the href of the first link
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
img2.alt = "This is a new alt text";//setting a new alt attribute
img2.setAttribute('title', 'This is a title attribute');//setting a new title attribute
img2.title = "This is another title attribute";//setting a new title attribute
//remove attribute
img2.removeAttribute('title');//removing the title attribute
// if this element has attributes
console.log(img2.hasAttributes());
console.log(img2.hasAttribute('alt'));
console.log(img2.hasAttribute('title'));
//display all attributes
console.log(img2.attributes);
console.log(img2.attributes[0]);
//----------------------------------------------------------------------------------\\
// innerhtml vs outerhtml , innertext vs outer text
let container = document.getElementById('container');
console.log(container.outerHTML);//return the whole element
console.log(container.innerHTML);//return the inner element of the the element itself
container.innerHTML+='<p>hello</p>';//ADD to it this element
console.log(container.outerHTML);

//the innertext and the outertext add text not an element
container.innerText ='<p>hello</p>';
console.log(container); //<div id="container"> <p>hello</p> </div> as text
container.textContent ='<p>hello</p>';//like inner text 

//----------------------------------------------------------------------------------\\
//sibling and parent
let head = document.getElementById('second');
console.log(head.nextElementSibling);//get the next sibling
console.log(head.previousElementSibling);//get the previous sibling
//so we can access it , then we can manipulate it like 
head.nextElementSibling.style.color = 'red';

//previous element sibling vs pervious sibling
console.log(head.previouSibling);//get the previous sibling even if it is not an element (comments or word without element)

console.log(head.parentElement);//get the parent element (the element that contains this element) => div in this case


//----------------------------------------------------------------------------------\\

//css style
let value = document.getElementById('cssstyle');
value.innerText ='hello world';
//1- element.style.peroperty = value;
value.style.backgroundColor = 'lightblue';
value.style.borderLeft = '30px solid #2ab590ff';
//2- element.style.cssText =  '  ';
value.style.cssText = 'font-size: 30px; color: red; background-color: lightblue; border-left: 30px solid #acbb26ff;';
// ----> the csstext remove all the styles and add the new styles 
//3-element.setperoperty(''); or element.removeperoperty(''); 
value.style.removeProperty('color');
value.style.setProperty('color', 'orange');
// ----> the setproperty remove the property and add the new property

//----------------------------------------------------------------------------------\\

//create elements by javascript
let newElement = document.createElement('p');//create a new element (انشاء عنصر جديد) (1)
newElement.innerText = 'This is a new paragraph.';//add text to the new element (اضافة نص للعنصر الجديد) (2)
let content = document.createTextNode('This is a new text node.'); //create a new text node (انشاء عنصر نصي جديد)(2)
//the two ways correct of adding content to an element
document.body.appendChild(newElement);//add the new element to the body
newElement.appendChild(content);//add the new text node to the body

//----------------------------------------------------------------------------------\\
//card example
let nelement = document.createElement('div');
document.body.appendChild(nelement);
nelement.style.textAlign = 'center';

function eleeemeent (name ,age ,imgsrc){
    const card = document.createElement('div');
    const img = document.createElement('img');
    const p1 = document.createElement('h2');
    const p2 = document.createElement('p');

    img.src = imgsrc;
    p1.textContent = name;
    p2.textContent = age;

    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(img);

    card.style.cssText = `
        width: 200px;
        background: #b64545ff;
        padding: 10px;
        margin: 2px;
        display: inline-block;
    `;

    img.style.width = '100%';

    container.appendChild(card);
}
eleeemeent('emad','22','img/143aa5b314b738ac89806627ee9d8e25.jpg');
eleeemeent('ahmed','22','img/143aa5b314b738ac89806627ee9d8e25.jpg');
eleeemeent('mohammed','22','img/143aa5b314b738ac89806627ee9d8e25.jpg');

//----------------------------------------------------------------------------------\\