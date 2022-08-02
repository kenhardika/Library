# Library
The Library - Odin Project

Hi there, thanks for taking time to look at this readme file!

So here's the thing, in this project I tried to create a Library which you can add the library slot containing book's title, author, availability, read status. Also you can delete the list by click of a button. In my mind this is pretty straight forward project, but god I was so wrong. Had a couple bugs that stay for days. Had to figure out the bugs and troubleshooting for each steps I took. So overall it was my first challenging project in my journey.

This was my first project that heavily includes object constructor and DOM Manipulation. One of noteable problem/issues I had was the 'submit' listener that doesn't behave like the usual 'click' listener. Turns out the submit button works if you target the documents (document.addEventListener('submit', func)) not the form or the button. Also I had a problem on my forms that keep resetting itself after submit button clicked, and turns out the solution was just to add preventDefault(). So simple yet so frustrating :)

This project was the first time I use event target, it was a messy process but at the end of the day I make it work. Target successfully landed.

So, this is the Library Project.
Cheers! 
-kenhardika
