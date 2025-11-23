document.querySelector('h1').style.color = 'red';

onload = function() {
    console.log('Page is fully loaded');
    document.body.style.backgroundColor = 'lightblue';
    // this onload function ensures that after the page is fully loaded, the background color of the body changes to light blue
    //the onload event is useful for executing code that depends on the complete loading of the page content
}


document.writeln('This will cause an error because document.log is not a function');//in the document
console.log('This will work because console.log is a valid function');//in the console

window.alert('This is an alert box!');//shows an alert dialog box with the specified message
//<<<window is the global object in browsers,And it have the document object as a property and  console as well>>>>
window.confirm('Do you want to proceed?');//shows a confirmation dialog box with OK and Cancel buttons

document.write('<h2>This text is written using document.write()</h2>');//writes the specified HTML content directly to the document
//Note: Using document.write() after the page has loaded will overwrite the entire document content

console.error('This is an error message');//logs an error message to the console
console.warn('This is a warning message');//logs a warning message to the console

window.print();//opens the print dialog to print the current document

window.document.title = 'New Title';//window object's is used to access and modify the document 

//the browser know i am using it so we can omit the window object and just use document.title = 'New Title';
//or print() instead of window.print() or alert() instead of window.alert() etc.