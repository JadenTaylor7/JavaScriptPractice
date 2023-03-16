const body = document.body //can manipulate the body
//body.append("Hello everyone!", " You are beautiful")

//creating an element attribute that will apply to someone
const button = document.createElement('button')
button.innerText = "This button does nothing"


//first div
const div = document.createElement('div')
div.innerText = "Hello World"
div.append(button)
body.append(div)

//second div
const div2 = document.createElement('div')
div2.innerText = "Adding another div"
body.append(div2)

//third div
const div3 = document.createElement('div')
const bold = document.createElement('b')
const title = document.createElement('title')
title.innerText = "Thanks for hovering over me!"
bold.innerText = "The final yet different div"
div3.append(bold)
div3.append(title)
body.append(div3)

