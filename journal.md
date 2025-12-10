Github Repo: https://github.com/JoelGCervantes/JoelGCervantes.github.io
Deployed site: joelgcervantes.github.io

Creating my portfoliio website using grid areas layout
things not used in class
'''
grid-template-rows: auto;
grid-auto-rows: auto;
grid-template-rows: auto repeat(3, 1fr) auto;
'''

1. choosing a page layout.

   - I liked the idea of a grid layout ever since we did the excercises, so I decided to make my website with that in mind.
   - I started by going to our excercises and used our exercise 02-grid-areas.html and 02-grid-areas.css as my base html and css.

   My idea was to create a simple page using grid that was easy to navigate. I also always like the idea of one page with ids that the nav bar can use to navigate.
   '''
   <nav>
   <ul>
   <li><a href="#">Home</a></li>
   <li><a href="#about">About Me</a></li>
   <li><a href="#previous">Previous Work</a></li>
   <li><a href="#projects">Projects</a></li>
   <li><a href="#footer">Contact</a></li>
   </ul>
   </nav>
   '''

2. At this point I needed to decide how to structure my header (fixed, sticky, hamburger). I chose to keeep it simple and used 06-mediaqueries as a starting point to style my header. When doing so I ran into an issue where the navigation bar was not filling up all of the available space even with setting it's width: 100%;

I was able to figure out that the header was the issue and that it wasn't taking up 100% of the available space, so I gave the fixed property to .header instead of .nav. I still had to sam issue, so I specified the offset from the edges to be 0 inside of the header class.

From there I displayed flex, because I am most comfortable with it and spaced the header list items, spaced evenly with the space around them. adding styling this lead to the completion of my header.

3. At this point I wanted to copy the same style homepage as nike.com, so I tried (not completely satisfied with the result) to create a larger about section where I could add a background picture, a headshot, and my name. I did this by setting height: 70vh; and background-image: url("imgs/ML_background4.png"); to set the background picture wanted. from there I added some styling in order to make the picture not repeat if it was too small, setting it to cover the entire element and centering it.
   '''
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   '''

   Withing the section element I cose to display flex to give me flexibility with the content inside of it. At first it was simply a headshot and name, but I implemented a weather in portland oregon element using an api later on.

4. accordian and carousel
   At first I was unsure how to layout my content within my article and aside sections. I wanted to add more creativity than simple pasting he conent inside it, so I thought this would be a good place to use bootstrap. I began by including the necessary tags in <head>.
   '''
   <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
   <script
   src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
   integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
   crossorigin="anonymous"

   > </script>

   '''

   After this I chose to use the accordian to add some interactivity to my Previous work article part of the page. I chose previous work to be article because I thought it made sense to give more information about it directly on the page as opposed to adding a link to more info to a project.

   For the most part I kept the core strucutre of the accordian as is and filled in the information. I then used css to style it to fit the style of the page.

   '''

.accordion {
height: 550px;
overflow-y: scroll;
scrollbar-color: #888 #161618;
color: #f8f9fa;
}

.accordion-item {
border-color: #495057;
background: #212529;
}

.accordion-button {
background-color: #212529;
color: #f8f9fa;
}

.accordion-button:not(.collapsed) {
background-color: #031633;
color: #6ea8fe;
}
'''
One issue I ran into during this process what that for some reason I wanted each part of the grid to have a set height, so I needed to fidn a way to add scrolling functionality when expanding the accordion. When doing this it caused 2 other issues: 1. because i gave the accordian a height, the entire background of the accordian was a different color that my body. problem 2 was the scrollbar was ugly within the accordion. To fix both of these issuea I used:
'''
.accordion-item {
border-color: #495057;
background: #212529;
}
'''
moved the background color to inside of each acccordion item instead of the entire accordian itself.

'''
.accordion{
...
scrollbar-color: #888 #161618; #thumb color #track color
...
}
'''
I used google search to find out a way to change the appearance of the scrollbar and thumb.

At this point I had my article section essentially finsished. I also took the opportunity at this time to add the necessary images.

5. Now this is where I wanted to add some api use to my website. Before this class I had some experience with JS through youtube with a youtber named broCode: https://youtu.be/lfmg-EJ8gm4?si=YjuER6iDNhhh4aCb I also created a repository with all the lessons and projects we made in that course: https://github.com/JoelGCervantes/javascript-tut

Using this and the exercise 06-fetch as my guide I was able to implement an api call to get the weather on my website. The logic uses a promise inside of a fetch to openweathermap.org with some argumets to what data to request. The promise waits for a response and the elemenent is updated.

'''
#weather {
background: rgba(0, 0, 0, 0.5);
padding: 2rem 3rem;
border-radius: 0.25rem;
backdrop-filter: blur(4px);
font-size: 1.1rem;
font-weight: 400;

align-content: center;
}

#weather .weather-label {
font-size: larger;
font-weight: 600;
opacity: 0.9;
}

#weather .weather-temp {
font-size: x-large;
font-weight: 700;
margin-right: 0.35rem;
}

#weather .weather-desc {
text-transform: capitalize;
opacity: 0.85;
}
'''
This code makes the weather and desctiption easily readable for viewers.

6. I needed to create an aside section for my projects I thought that would be a perfect time to use carousel. The carousel in bootsrap supports an image within the carousel-item element, but I wanted to be able to display more information. Because of this I chose to embedd a bootstrap card element within it in order to be able to proved a brief description and an image of the project as well as a link to the project details. To me this made sense as an aside element as i will be rotating through 3 card with some info regardign other projects the viewer can go see by clicking the link. I ran into several issues when implementing this portion.

- didn't respond well to different sized screens.
- I wanted them to all look the same.
- nitpicky when fixing one thing another broke.

I addressed these issues by:

- Understanding where the styles broke down. The text being different sizes would cause the link at the bottome to be pushed down and in some cases out of view. I experimented with several ways to fix this until I was able to find that by allowing the text inside of the card to be scrollable on smaller screens the card no longer lost its styles. Displaying the card body as flex also helped style the contents inside of the card more consistently.
- Making them all look the same involved styling the .card, and elements inside of it.
- This part was a challenge as when the designs worked for one screen size they would break for another, but eventaully I was able to reach some working styles
  '''
  .card {
  margin: auto;
  height: 550px;
  width: 80%;
  background-color: #212529;
  }

.card-body {
display: flex;
flex-direction: column;
}
.card-body .btn {
background-color: #031633;
color: #6ea8fe;
border: 1px solid transparent;
align-self: center;
margin-top: auto;
}

.card-text {
max-height: 300px;
overflow-y: scroll;
scrollbar-color: #888 #212529;
}
.card-body .btn:hover {
color: #6ea8fe;
border: 1px solid #6ea8fe;
}

.card-img-top {
max-height: 200px;
}
'''

at this point there were house keeping things to address in my code. Things such as alt text, working links, and cleaining up code.

7. latly was styling the footer. The biggest issue I came aros here was the styles of the elements inside of form as the screen sizes changed. I addressed this by using a mobile first approach when styling, and updating the syles within my media queries.
   '''
   #contact-form {
   display: flex;
   flex-direction: column;
   gap: 0.25rem;
   align-items: center;
   }

#contact-form input {
width: 50%;
background-color: #212529;
color: gray;
border: none;
border-radius: 0.25rem;
margin-right: 0.5rem;
}

#contact-form .form-btn {
border: none;
width: 25%;
background-color: #495057;
color: #f8f9fa;
border-radius: 0.25rem;
margin-top: 1rem;
padding: 0.25rem;
}

#contact-form .form-btn:hover {
opacity: 0.8;
}

@media (min-width: 576px) and (max-width: 992px) {
.grid-container {
display: grid;
min-height: 97vh;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto repeat(2, 1fr) auto;
gap: 10px;
grid-template-areas:
"header header"
"section section"
"article aside"
"footer footer";
}
#contact-form {
flex-direction: row;
justify-content: center;
}

#contact-form input {
width: 10rem;
}
#contact-form .form-btn {
margin-top: 0;
width: 5rem;
}
}

@media (min-width: 993px) {
.grid-container {
display: grid;
min-height: 97vh;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto repeat(2, 1fr) auto;
gap: 10px;
grid-template-areas:
"header header header"
"section section section"
"aside article article"
"footer footer footer";
}

#contact-form {
flex-direction: row;
justify-content: center;
}
#contact-form input {
width: 10rem;
}
#contact-form .form-btn {
margin-top: 0;
width: 5rem;
}
}
'''
