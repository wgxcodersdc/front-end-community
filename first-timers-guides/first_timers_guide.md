# WWCDC Front End First Timer's Guide

## What's a "front end"?

The "front end" is the user or "front" facing portion of a website or web application. This is also called the "client-side" of a website, with the web browser (e.g. Chrome, Firefox, Internet Explorer) being the "client." Users interact with the information, elements, controls, and graphics on the "front" of an application.

The following aspects make up the front end of an application:

* Design - aesthetics, arrangement, visuals, graphics, colors, and fonts

* User Interface (UI) and User Experience (UX) - the psychology and reasoning behind the layout and information architecture on the front end of a web application

* Development - the HTML, CSS, and JavaScript code interpreted by a web browser to create the front end

This guide focuses on the development aspect of the front end, or front end development.

Front end developers may work on teams with web designers and UI/UX professionals or they may work solo. If they work alone they may have to integrate aspects of web and UI/UX into their development work. If they work on a team, then the web designer will create a mock up of the site using Adobe Photoshop or a similar tool. The front end developer will then convert the design into HTML, CSS, and JavaScript code that will load in a web browser. The UI/UX specialist will work at all stages of the process to make sure the site design, layout, and information make sense for the user or customer.

## What about the "back end"?

By contrast, the user never directly interacts with the "back end" or "server-side" of a web application. The back end is composed of the web servers and systems that run the web site or web application and the programming languages that interact with those systems. The back end often includes a database such as MongoDB, MySQL, or Microsoft SQL Server to store and manage large amounts of user information. Popular back end web development languages and frameworks include Node.js (Javascript language), Ruby on Rails (Ruby language), Django (python language), and ASP.NET (C# or VB.NET languages).

## What tools do I need to get started with front end development?

* A computer running Windows, Mac OSX, Linux, or Chrome OS

* A web browser such as Google Chrome, Mozilla Firefox, or Microsoft Internet Explorer

* A code-friendly text editor such as [Sublime Text](http://www.sublimetext.com/) (Mac, Windows, and Linux), [Notepad++](http://notepad-plus-plus.org/) (Windows), or [TextWrangler](http://www.barebones.com/products/textwrangler/) (Mac)

* A version control system such as [Git](https://git-scm.com/). This will be used to safely test changes (via branches), back up your work, and collaborate with others. It is frequently used with [Github](https://github.com/) and [Bitbucket](https://bitbucket.org/) to store your code on the Internet. You should sign up for an account on Github and [install the version of Git](http://git.huit.harvard.edu/guide/) for your operating system. If you're using a Chromebook or tablet, then use [Cloud9 IDE](https://c9.io/) instead of installing Git.

## The "layers" of the web

Content (HTML), presentation (CSS), and behavior (JavaScript) make up the three layers of the web.

![web-layers](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/09/1409729756css_three-layers.png)

### 1. HTML (Hyper Text Markup Language)
HTML is used for the content layer of the web. It is used to lay out or "mark up" the content of a web page. Content primarily consists of text but may also include images, links, animations, sound, video, and forms. HTML is the digital equivalent of traditional markup notation in printing and publishing.

HTML code is made up of elements. For example, the `p` element is used to mark up a paragraph of text. Elements consist of opening (`<p>`) and closing (`</p>`) tags using angle brackets. Some elements, notably the `img` element for images, may be self closing (`<img />`).

The extension for an HTML file is `.html`. The conventional name for the default or main page of a website is `index.html`.

### 2. CSS (Cascading Style Sheets)
CSS is used for the presentation layer of the web. It defines a web site's colors, backgrounds, fonts, and layout.

CSS syntax selects one or more HTML elements on a page, then sets styles on various element attributes (or properties) within curly brackets. The example CSS below sets paragraph elements to be blue with a Times New Roman or other serif font.

````
p {
    color: blue;
    font-family: "Times New Roman", Times, serif;
}
````

A CSS document is called a stylesheet and has a `.css` file extension. A website can have one or multiple stylesheets. Common conventional file names include `styles.css` or `main.css`.

### 3. JavaScript (JS)

JavaScript is used for the behavior layer of the web. While HTML and CSS are markup languages that determine structure and presentation, JavaScript is a programming language that can carry out operations, functions, and calculations. JavaScript can be used to create sliders, quizzes, dynamic forms, alert boxes, and modal dialogs. It can also detect clicks or mouse hovers from users and then dynamically change HTML elements on a page. Complex web applications, such as Gmail and Facebook, heavily rely on JavaScript for their interactive functionality.

This guide will focus primarily on HTML and CSS. HTML and CSS should be mastered first before tackling JavaScript, as client-side JavaScript requires excellent knowledge of HTML elements and the Document Object Model (DOM).

The extension for a JavaScript file is `.js`. A website can have one or multiple JavaScript files.

Note: JavaScript and Java are two different programming languages.

## Separation of Content, Presentation, and Behavior

While HTML, CSS, and JavaScript can all be combined in the same `.html` file, ideally they should be separated into three or more files - one for each language. This makes maintaining your code - especially when dealing with multiple web pages on a large web site - much easier.

## Intro to HTML

### Basic HTML Elements

HTML documents are made up of HTML elements that define the content and structure of a web page. Content includes text, images, media, and links.

Commonly used HTML elements:

* `<p>` - Paragraph
* `<img>` - Image
* `<h1>` through `<h6>` - Headers, with `h1` the largest and `h6` the smallest
* `<a>` - Anchor (hyperlink/URL)
* `<br/>` - Line break
* `<div>` - Division or block
* `<table>` - Table of information or data
* `<form>` - Forms
* `<ul>` - Unordered list
* `<ol>` - Ordered list (1,2,3 or I,II,III)

As you may have noticed, all elements are identified by the use of less than and greater than angle brackets `< >` surrounding the element name. Together these angle brackets and the element name form a `Tag`.

### Tags

HTML elements are usually composed of pairs of opening and closing tags.

An *opening tag* marks the beginning of an element. It consists of a less than sign followed by an element’s name, and then ends with a greater than sign - for example, `<p>`.

A *closing tag* marks the end of an element. It consists of a less than sign followed by a forward slash and the element’s name, and then ends with a greater than sign - for example, `</p>`. Below is a sample paragraph element with both opening and closing tags.

`<p>This is an example paragraph</p>`

Some HTML elements may only require one self-closing tag, for example the line break (`<br/>`) and image (`<img/>`) elements.

### Attributes

HTML elements can have properties called attributes that provide additional information.

Attributes are defined within the opening tag, after an element’s name. Attributes are composed of a name, equal sign (`=`), and value. For example, the `href` attribute ("hyperlink reference") of an `a` element describes the website address (URL) of an anchor or link element.

`<a href='http://www.google.com/'>Google</a>`

The `id` and `class` attributes for HTML elements are important when learning CSS to style HTML. The `id` attribute is used to uniquely identify one element on a page (in order to apply a style to a single element), whereas the `class` attribute can be used to style multiple HTML elements.

### Practice Exercise - Hello, World!

Let's create your first HTML page.

1. Open your code-friendly text editor, such as Sublime Text. Create a new file called `index.html` and save it to an easy to find location on your computer.

2. In the `index.html` file, type out the following HTML. All HTML files should begin with a DOCTYPE declaration (`<!DOCTYPE html>`), followed by an `HTML` element. All `html` elements should contain one `head` element and one `body` element. The `head` element will contain metadata (data about data) and hidden information about the page used by browsers and search engines, while the `body` element will contain the visible structure of the web page.

````
<!DOCTYPE html>
<html lang="en">
    <head>
    </head>
    <body>
    </body>
</html>
````

3. Inside the `<head>` element, add `<meta>` and `<title>` elements. Our `<meta>` element below defines the [character encoding](http://techterms.com/definition/characterencoding) (how computers understand text) of our HTML document. The `<title>` tag sets the title of the page in the window or tab of our browser.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Hello World</title>
    </head>
    <body>
    </body>
</html>
```

4. Inside the `<body>` element, add an `<h1>` (header level 1) and a `<p>` (paragraph) element.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>I'm learning HTML and CSS at Women Who Code DC's Front End Hack Night first timer's night.</p>
    </body>
</html>
```

5. Open your page in your web browser. Locate your `index.html` file and double click on it to open it. It should open with the default web browser on your computer You can also use the file open or open with option in your browser menu.

This is how `index.html` looks in Sublime Text:

![HTML-2](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/HelloWorldSublimeText.png)

This is how `index.html` looks in Google Chrome:

![HTML-3](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/HelloWorldChrome.png)

Congratulations! You just created your first HTML page. Let's take a look at CSS.

## CSS

### Selectors

CSS selectors select elements on an HTML page so that they can be styled. A CSS selectors can select single or multiple HTML elements.

The below code shows general CSS syntax:

```
selector {
    property: value;
}

```
For example, the following CSS will make all of our paragraph elements blue. The `p` HTML element is the selector and we are setting the `color` property to have a `blue` value.

```
p {
    color: blue;
}
```

The above CSS makes all of the paragraphs on our web page blue. We may wish to only change the color of one paragraph or a small subset of paragraphs. We can accomplish this with `id` and `class` attributes for our HTML elements.

CSS selector for IDs use the pound or hashtag symbol (`#`), while selectors for classes use a period (`.`).

HTML code with IDs and classes for paragraph elements:

````
<p id='container'>This text will be blue.</p>

<p class='error'>This text is an error message, it will be red.</p>
<p class='error'>This is another error message. It will be red too.</p>
````

CSS code with selectors for paragraph elements with IDs and classes:

```
p#container {
    color: blue;
}

p.error {
    color: red;
}

```

HTML elements can have multiple classes:

````
<p class='error bold'>This text with be red and bolded</p>
````

HTML elements can also have both an ID and one or more classes:

````
<p id='important' class='error'>Important error message</p>
````

### Adding CSS to an HTML file

To add CSS to our HTML we should create a separate `.css` file or external stylesheet to hold all of our styles. This will be referenced in the `head` element of our HTML file using a `link` element.

```
<head>
    <link rel="stylesheet" href="main.css">
</head>
```

### Practice exercise - Styling `index.html`

1. Create a new file called `main.css`. Save this file in the same folder as your `index.html` file.

2. Using our text editor, add some color and change the font of the `<h1>` tag and change the font face of the `<p>` tag:

```
h1 {
    font-family: Arial;
    color: blue;
}

p {
    font-family: Arial;
}
```

When writing code, "do not repeat yourself" or DRY. Above we are repeating ourselves by specifying the font family for both the `h1` and `p` elements. We can refactor the above code to implement DRY by placing the `h1` and `p` elements on the same line separated by a comma.

```
h1, p {
    font-family: Arial;
}

h1 {
    color: blue;
}
```

To add the external stylesheet to our HTML file, use a `link` element in the `head` element.

````
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="main.css">
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>I'm learning HTML and CSS at Women Who Code DC's Front End Hack Night first timer's night.</p>
    </body>
</html>
````

Open `index.html` again to see the CSS in action.

![HTML-4](https://raw.githubusercontent.com/womenwhocodedc/front-end-community/master/assets/HelloWorldChromeCSS.png)

### Next Steps

Now that you've built your first web page, use Women Who Code DC's study groups and resources to help you continue to learn to code!

#### What should I do next?
* [Install Git](http://git.huit.harvard.edu/guide/)
* [Learn how to use Git](https://try.github.io/levels/1/challenges/1)
* [Learn how to use Cloud9, Git, and Github Pages to create your own website](http://slides.com/alexandraulsh/build-your-own-website-with-cloud9-and-github-pages#/)
* [Dash](https://dash.generalassemb.ly/)
* [CodeAcademy HTML & CSS](https://www.codecademy.com/learn/web)
* [Khan Academy - HTML + CSS](https://www.khanacademy.org/computing/computer-programming/html-css)
* [Learn JavaScript](https://github.com/womenwhocodedc/front-end-community/blob/master/first_timers_javascript_guide.md)
* [Khan Academy - HTML + CSS + JS](https://www.khanacademy.org/computing/computer-programming/html-css-js)

#### Front End Study Guides
* [HTML Study Guide](https://github.com/womenwhocodedc/front-end-community/blob/master/study-guides/html_study_guide.md)
* [CSS Study Guide](https://github.com/womenwhocodedc/front-end-community/blob/master/study-guides/CSS_study_guide.md)
* [JavaScript Study Guide](https://github.com/womenwhocodedc/front-end-community/blob/master/study-guides/javascript_study_guide.md)

#### Keep in touch!
* Come to our [Meetups](http://www.meetup.com/Women-Who-Code-DC/).
* Follow us on [Twitter](https://twitter.com/WomenWhoCodeDC) us.
* Email us at WWCodeDC@gmail.com
* Check us out on [Github](https://github.com/womenwhocodedc).
* Check out our [website](https://www.womenwhocode.com/dc).
* Join our [Slack](https://docs.google.com/forms/d/1BXxIJuCawYt3pEzN7-6CgdT6XrhvG0KYQpOqdmv98DY/viewform) group.
