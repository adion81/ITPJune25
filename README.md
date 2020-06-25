# Intro To Programming - Coding Dojo

<img src="https://images.squarespace-cdn.com/content/v1/55085720e4b0813599644fae/1498146542463-REMHTKUIMRSCKC11K9PT/ke17ZwdGBToddI8pDm48kArBMn8fAWELGenCydTjAbxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwDoVfJBUjrBd4N4KbRpQUq5mg9_a8rivMlNvj9QRlugGYc1J3inpxLnXdbVi1x-yQ/image-asset.png" alt="Coding Dojo" width="400px"/>

### What we will be building

<img src="" alt="request response"  width="500px"/>
##### Img links
// Add Image links here


## Request Response Cycle

<img src="https://vectr.com/adion81/c8R4t9Gpm.svg?width=500&height=280&select=c8R4t9Gpmpage0" alt="request response"  width="500px"/>

<ol>
    <li>User types url into browser.</li>
    <li>Http request to the server.</li>
    <li>Server gathers data and files</li>
    <li>Server responses files and data to browser</li>
    <li>Browser displays data and files.</li>
</ol>
<details>
    <summary>COMMON HTTP VERBS</summary>
    <ul>
        <li>GET - Gets Data</li>
        <li>POST - Creates Data</li>
        <li>PUT - Updating Data</li>
        <li>PATCH - Updating Data</li>
        <li>DELETE - Deleting Data</li>
    </ul>
</details>

## HTML

Hyper-Text Markup Language<br>
<br>
Used to organize and display content on the browser.

<details>
    <summary>3 Main Parts to HTML</summary>
    <ul>
        <li>html - defines the file as an html document.</li>
        <li>head - contains html,links, and info about the document</li>
        <li>body - contains html we see on the browser</li>
    </ul>
</details>

### Parent - Child - Sibling
HTML tags can either live next to each other `Siblings`<br>
Or they can live inside one another `Parent/Child`<br>

```html
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Ill Tempered Penguins</title>
    </head>
    <!-- body and head are sibling tags -->
    <body>
        <!-- h1 is a child of body -->
        <h1>Ill Tempered Penguins</h1>
    </body>
    </html>
```
Every HTML element has an opening tag `<h1>` and a closing tag `</h1>`

### HTML Tags
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Hello World</title>
</head>
<body>
    <!-- heading tags range from h1 to h6 -->
    <h1>Awesome Site</h1>

    <!-- p tags are used to display simple text -->
    <p>This is some information.</p>

    <!-- unordered lists will display a list items with bullet points -->
    <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Fourth</li>
    </ul>

    <!-- forms are used so that the user can send info to the server. -->
    <form action="#" method="POST">
        <label for="name" >Name: </label>
        <input id="name" name="name" type="text" />
        <input type="submit" />
    </form>

    <!-- img tags are used to display images -->
    <img src="image.png" alt="Describe Image">
</body>
</html>
```
HTML tags can have attributes that allow us add additional characteristics.<br>
<br>
img tags have the attribute of `src` to link image files to the tag.

## CSS

Cascading Style Sheets<br>
<br>
We use CSS to style the HTML document.<br>
<br>
It's like a waterfall the cascades styling on all of our html elements, and we can select certain elements with a selector.

```css

p{
    color: white;
    background-color: blue;
}
```

Above is an example of some CSS code. The `p` tells the browser that all p tags will have this styling.
<br>
<br>
But what if we don't want to style every p tag in the html document?<br>
<br>
We can give the html tags attributes of `class` or `id` to narrow down the CSS selection.

```html

    <body>
        <p class="blue">Some text here</p>
        <p>Some text here</p>
        <p class="blue">Some text here</p>
        <p id="special">Some text here</p>
        <p class="blue">Some text here</p>
    </body>
```

```css
    /* use the "." to select classes */
    .blue{
        color: white;
        background-color: blue;
    }

    /* use the "#" to select ids */
    #special{
        color: red;
        background-color: yellow;
    }

```


## JavaScript
JavaScript is the language of the internet, its also a dynamically typed language.

### Variables

<details>
<summary>Primitive Variables</summary>
<ul>
    <li>integers - var num = 10</li>
    <li>strings - var name = "Mr. Nibbles"</li>
    <li>boolean - var isWorking = true</li>
</ul>
</details>

<summary>Basic Data Sets</summary>
<ul>
    <li>arrays - var arr = [15,true,"Hello World"]</li>
    <li>objects - var obj = {name:"Adrien",age:false}</li>
</ul>
</details>

### Loops

Loops are a way we run lines of code a given amount of times.

```js
for(var i = 0; i < 10; i++){
    console.log("Hello " + i);
}

```

### Conditionals

We can write conditionals for something to happen if a certain thing is true or false.

```js
for(var i = 0; i < 10; i++){
    if(i % 2 === 1){
        //This will run if i is an odd number.
        console.log("Odd " + i);
    }
    else{
        //This will run if i is not an odd number.
        console.log("Even " + i)
    }
}

```

### Functions

Functions are a way we can reuse a peice of code over and over again.<br>
<br>
Say we wanted to randomly mix up the elements in an array.

```js
var numArr = [1,2,3,4,5,6];

// We define the function here
function shuffle(arr){
    for(var i =0; i < arr.length; i++){
        var rand = Math.floor(Math.random() * arr.length - 1);
        var temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
}

// We call the function here.  This is when the function and code inside of it actually run.
shuffle(numArr);

```

# ADDITIONAL RESOURCES

<a href="https://www.w3schools.com/" target="_blank">W3 Schools</a><br>
<a href="https://flexboxfroggy.com/" target="_blank">Flex Box Froggy</a><br>
<a href="https://flukeout.github.io/" target="_blank">CSS Diner</a><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">All Things JavaScript</a><br>
<a href="#" target="_blank">Code Pen Link to Demo</a>