# WWCDC JavaScript First Timer's Guide

This guide is for people who understand the basics of HTML and CSS and want an introduction to Javascript. 

You should review the [HTML & CSS First Timer's Guide](https://github.com/womenwhocodedc/front-end-community/blob/master/first-timers-guides/first_timers_guide.md) before proceeding.

## JavaScript Review

* The behavior layer of the web
* A programming language that can carry out operations, functions, and calculations
* Create sliders, quizzes, dynamic forms, alert boxes, and modal dialogs on websites
* JavaScript files have a `.js` file extension, for example, `main.js`
* A web site or web application can have one or multiple `.js` files
* JavaScript is NOT Java

## Guide Overview

This guide will teach you the following concepts:

* Creating JavaScript files
* Adding JavaScript to web pages
* Variables
* Browser JavaScript consoles
* Methods
* Functions - anonymous and named
* Event handlers
* Alert boxes
* Logging to the console

## Setting Up Your Files

### Project Folder

Create a folder for this project called `wwcdc-javascript` - this will host all of the files for this lesson, including `index.html`, `styles.css`, and `main.js`.

### HTML Page - `index.html`

Let's create a basic HTML file that will eventually host our JavaScript. Open up an editor, such as Sublime Text, and type out the code below. Save the file as `index.html`.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>WWCDC JavaScript First Timer's Guide</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>JavaScript First Timer's Guide</h1>
    </body>
</html>
```

Our `index.html` file will be using an external stylesheet called `styles.css`.

![Basic HTML page](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/BasicHTML.png)

### External Stylesheet - `styles.css`

Create a file called `styles.css` in the `wwcdc-javascript` folder and type in the following CSS:

```
body {
    background-color: #D3D3D3;
    font-family: Sans-Serif;
}
```

The above CSS sets the background color to `#D3D3D3`, the hexadecimal value for `lightgrey` and changes all text to a modern sans-serif font.

Refresh your `index.html` page to verify the new styles before moving on to the next steps of the guide.

![Add some CSS](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/AddSomeCSS.png)

### Adding a button to `index.html`

Add the `button` and `div` elements to the `body` tag of `index.html`, below the `h1` element. This will add a clickable button and a paragraph with a top secret message.

```
<button id="reveal">Click to reveal Top Secret message</button>
<div id="text">
    <p>TOP SECRET - Cats are taking over the Internet</p>
</div>
```

For right now the top secret message is visible, but we will be writing JavaScript code that will display the message only after clicking on the button.

![Add a button](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/AddButton.png)

### Hiding the message using CSS

Add the following code to `styles.css`. Our `div` element that contains the `p` element with the top secret message has an id of `text`. We use an id selector (`#text`) to obtain the `div` element, then set it the `display` property to `none` in order to hide it when first loading the page.

```
#text {
    display: none;
}
```

![Message hidden](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/MessageHidden.png)

### External JavaScript file - `main.js`

Create a new file called `main.js` and add the following JavaScript code:

`var text = document.getElementById("text");`

This code does not do anything yet. Nevertheless, let's add it to our `index.html` page using a `script` element. The `script` element is similar to the `link` element for external stylesheets.

Add the following to the very bottom of the `body` element.

`<script src="main.js"></script>`

The entire code for your `index.html` should look like the following:

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>WWCDC JavaScript First Timer's Guide</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>JavaScript First Timer's Guide</h1>
        <button id="reveal">Click to reveal Top Secret message</button>
        <div id="text">
             <p>TOP SECRET - Cats are taking over the Internet</p>
        </div>
        <script src="main.js"></script>
    </body>
</html>
```

The `script` element is added to the bottom of the page so that the browser can load all of the HTML elements before interpreting the JavaScript in `main.js`. Browsers interpret HTML documents in a top to bottom fashion - starting with the first line and ending with the last line. This allows the browser to create the entire Document Object Model (DOM) - a tree of all the HTML elements on a web page. 

Often JavaScript will manipulate HTML elements in the DOM. If the elements do not exist yet (because the DOM tree has not yet been created) then the JavaScript will throw errors.

![DOM Tree](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/DOM.gif)

Diagram courtesy of [w3schools](http://www.w3schools.com/js/js_htmldom.asp).

## Learning JavaScript

### Variables

Let's review the JavaScript code we added to `main.js`.

`var text = document.getElementById("text");`

The keyword `var` declares a *variable* in JavaScript. A variable is a container for storing values. These values can be text (usually called strings), numbers (usually called integers), or complex data called objects (such as HTML elements).

You could create a variable called `myAge` and give it value of `18`.

`var myAge = 18;`

You could then do mathematical operations with this variable:

`var oldAge = myAge + 100`

This would return a value of `118` for the `oldAge` variable.

In our `main.js` file, we created a variable called `text` (`var text`) that contains an HTML object (`document.getElementById("text")`) containing the following HTML code:

```
<div id="text">
     <p>TOP SECRET - Cats are taking over the Internet</p>
</div>
```

### Debugging with Web Developer Tools

We can use the JavaScript console in our browser's web development tools to check the value of JavaScript variables. Though web developer tools exist in Firefox, Safari, and Internet Explorer/Edge, we will be using Google Chrome for this example as it works well on all operating systems. 

In Google Chrome, type `ctrl + shift + J` (Windows, Linux, or Chromebook) or `cmd + opt + J` (Mac) to open the JavaScript console.

![Google Chrome JavaScript console](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/ChromeBlankConsole.png)

Copy and paste `var text = document.getElementById("text");` into the console window and press enter. You should see the text `undefined` - this is OK. Then type `text` and press enter - this examines the content of the `text` variable. Click on the arrow next to `div` to expand it - you should see the entire `div` element with our top secret paragraph.

![Div element in Developer Tools](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/DivTextConsole.png)

### The Document Object

`var text = document.getElementById("text");`

`document` in the above code refers to the Document Object Model (DOM), which is created by a web browser when it interprets `index.html`. We can access the entire DOM of an HTML page via the root `document` object. 

If we type `document` into the console we can expand all of the arrows to reveal all of the HTML on `index.html`.

![Document object in the console](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/DocumentObjectConsole.png)

In summary, `document` = all of the HTML elements on a web page.

### Methods

`var text = document.getElementById("text");`

`.getElementById()` in the above code is a method. Methods are actions that can be taken on objects in JavaScript - in this case, the `document` object. The `getElementById()` method looks for any HTML element in the DOM with a given ID. In our example, we are looking for any elements with an ID of `text`. The value of `text` is called an *argument*. You can pass different arguments into the `getElementById()` method to get elements with different IDs.

### Events - Displaying our secret message on click

Add the following JavaScript to `main.js`. This gets a `button` element using `getElementById()`. It also add an `onclick` event handler to the `button` element. This code will execute when the button is clicked.

```
var button = document.getElementById("reveal");

button.onclick = function() {
    text.style.display = "inline";
}
```

An *event handler* waits for an event (such as a mouse click) before executing certain code. In this case we used an `onlick` event handler to then execute a function (`function()`) to change the CSS for the `text` element. It changed the `display` property from `none` to `inline`. 

![Display changed from none to inline](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/DisplayInlineDevTools.png)

Using the console, we can see that `text.style` is accessing the CSS properties for the `text` variable (our `div` with an ID of `text`). Using `text.style.display` accesses the `display` property in the CSS for `text`.

![text.style.display in Chrome Dev Tools](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/text-style-display.png)

### Functions

Functions (`function()`) execute repeatable tasks or jobs in the form of defined blocks of code. They prevent you from repeating yourself and make your code much easier to read.

In the above example we executed an anonymous function (`function()`) - a function with no name - when a user clicked our button. We can convert this to a regular function with a name. In the example below, our function is named `showText`. It is execute when the button is clicked. Since I gave our function a name, I can use `showText` for `button.onclick` instead of the entire function.

```
var button = document.getElementById("reveal");

button.onclick = showText;

function showText() {

    var text = document.getElementById("text");

    text.style.display = "inline";

}
```

Functions are the heart and soul of JavaScript but are still quite complicated! Whole books have been devoted to explaining functions in JavaScript. Do not get discouraged if you do not understand JavaScript functions yet - they take practice. Right now it's more important to know function syntax and that they are used to repeat blocks of code.

## Extras

### Alert boxes

Alert boxes can be useful when debugging code. To add an alert, use the `alert()` method and pass your text, numbers, or variable as an argument.

Try adding the following code for alert boxes to `main.js` and see what happens:

`alert("This is an alert box");`

`alert(1234)`

`alert(text)`

### Logging to the console

Logging text to the console (`console.log()`) is also useful for debugging, and less obtrusive than alert boxes. 

Edit `main.js` to contain the following code that features console logging. Then open Chrome Developer tools and refresh the page. Make sure to click on the button. You should see various messages logged to the browser JavaScript console!

```
console.log("Starting main.js");

var button = document.getElementById("reveal");

console.log("button is an object of type " + button);

button.onclick = showText;

function showText() {

    console.log("I clicked the button!");

    var text = document.getElementById("text");

    text.style.display = "inline";

    console.log(text);

    console.log("This is the HTML for text after clicking");

}

console.log("Ending main.js");
```

![Console logging](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/js-first-timers-guide/ConsoleLogging.png)

### What's next?

Check out our [JavaScript Study Guide](https://github.com/womenwhocodedc/front-end-community/blob/master/study-guides/javascript_study_guide.md) for intermediate and advanced resources for mastering JavaScript.

### Additional Resources

* [Front End Resources](https://github.com/womenwhocodedc/front-end-community/blob/master/front_end_guide.md)
* [Intro to JS](http://nupurkapoor.github.io/js-study-group/#/)
* [Intro to Git and Github](http://nupurkapoor.github.io/intro-to-git/#/)

### Keep in touch!
* Meet with us via [Meetup](http://www.meetup.com/Women-Who-Code-DC/).
* [Tweet](https://twitter.com/WomenWhoCodeDC) us.
* Email us - WWCodeDC@gmail.com
* Check us out on [Github](https://github.com/womenwhocodedc).
* Check out our [website](http://womenwhocodedc.github.io/).
* Join our [Slack](https://docs.google.com/forms/d/1BXxIJuCawYt3pEzN7-6CgdT6XrhvG0KYQpOqdmv98DY/viewform) group.
