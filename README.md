<img src="https://github.com/Geoff-Walker/Geoff-Walker/blob/main/my-banner.png">

# About Me
Hi my names Geoff and I live in rural Lincolnshire with my beautiful wife Helen. After a nasty fall left me an amputee, my established career as a mechanical engineer ended abruptly, little did I know when I started coding as a hobby that my true calling for programming had only just begun. Since then I have fallen in love with programming and developed a talent for interactive UI/UX web development.

If you have a hybrid/remote employment opportunity or would like to discuss work on a freelance basis, please don't hesitate to contact me.

# My Portfolio
Like most other developers that have just completed their portfolio sites, it seems a much fairer question to me, to ask "what didnt I learn while creating my portfolio site"? I think therefore its best to just give a brief summary of the challenges I faced and how I overcame them.  At the start of this project I made the very concious decision firstly not to do anything that felt "normal" or like a template and secondly have a completetly different theme on each page to show a spectrum of capabilities.  

__There are four main pages:__
1. Index - Home
2. Projects
3. About
4. Contact

__Responsive by Design__
In todays world all screen sizes need to be accomodated and I hope, I have achieved that in all browsers, however I wont mention it further as I believe this is just intrinsic.


## Index - Home ##
When I was trying to come up with a design for my home page I wanted something that was dynamic and full of motion, I didn't however want the enormous download times that a big background video would bring. So I came up with the coke bubbles concept, self generated with javascript.  

<div align="center">
<img src="https://github.com/Geoff-Walker/Geoff-Walker/blob/main/geoff-walker.io.gif" width="512" height="384">
</div>

__Fancy hover__
I used data attributes in order to create a fancy hover effect, utilising a before and after psuedo class on the nav links

__Light and Dark Theme__
I created a light and dark theme based on either cola or lemonade

__Javascript Coke Bubbles__
Again I used a before and after on a javascript generated, span element, to create a bubble of either coke or lemonade depending on the light and dark theme.

__Diet Coke Animationm__
Really liking a challenge and wanting to really perfect my animation skills, I decided to try and recreate the Eta James classic "I dont want you", forever linked with the diet coke break adverts.  A little while later and after hearing a thirty second loop more times than sanity should allow, I came up with an animation that is accurate enough to evoke the song even in silence.

__Artwork in Inkscape__
The diet coke break, background artwork and all the cans and spray on this page were draw by myself in Inkscape.

## Projects ## 
The idea for this page was to have an elevator where each floor was a different project within the portfolio.  This was my biggest challenge by far, I knew what I wanted to achieve but really had to look hard for effective tools like scroll-snap and the intersection observer in order to bring the vision to reality.  I really love the final effect especially on desktop.

<div align="center">
<img src="https://github.com/Geoff-Walker/Geoff-Walker/blob/main/Projects.gif" width="512" height="384">
</div>


__Fixed and Scrollable Layout__
The Layout of this page has four main components, three of them inside the lift and a fourth containing the projects in a scrollable container.  

__Scroll-snap__
Using scroll-snap helped me overcome the first issue which was to make the lift stop at the correct floor not half way between.

__Intersection observer__
The intersection observer helped me trigger rendering and animation functions depending on if the floor is intersecting 

__Rendering each floor__
As the lift registers intersection with the floor via the intersection observer the Dom is manipulated to change the following on screen using the data attributes established in the htmnl of the floor.

1. The Header
2. The Technologies used on the left panel
3. The url of the correct web and github repos

__Door Animations__
The intersection observer also both opens and closes the doors by triggering animations.

__Page filter__
Even if at the time of writing this I dont really have enough projects on the page to need a filter, I intent to keep adding to it and it demonstrates another capability

__Picture Heavy  - Lazy Loading__
If on self reflection I have a critism of this page it is the picture heavy nature of it and the knock on loading times.  I have tried to improve this by optimising image quality, compressing gifs and implementing lazy loading on all but the first two floors.


## About ## 
As a career changer I needed to tell the story of how I got here which is due to my age longer, than a recent graduate, at the same time I didnt want it to be boring so I wanted to animate it with images at the right time like it was a storyboard so it fealt engaging.  The concept I came up with, is handwriting on A4 ruled paper while throwing on polaroids and applying school stickers.

__A4 paper__
The A4 paper backgorund is made using three linear gradients on a white background two fixed and one repeating, by playing with the stop, start positions of the gradients I have managed to get a bleed effect which is very lifelike and makes the paper seem not white.

__Hitting the lines__
The second challenge came from now having lines, the handwriting needed to be on top of it.  By using three fixed pixel layouts not something I would normally do I have managed to keep everything on the correct lines and flowing nicely.

__Rendering the story__
I have again used the intersection obeserver to detect if the div is visible and fade it in, while simultaneously triggering an animation either a polaroid or a sticker.
On mobile I removed the image and sticker rendering as it interfered with the readability and flow of the story.

__Pencil in Inkscape__
The pencil art in this was drawn by myself in inkscape

## Contact ##
The goal of this page was simply to go to town with CSS the whole page is CSS only! with a Javascript based clock and api based form emailer.

__Javascript Clock__
I built this ornate clock based upon date time object within the browser

__CSS Neon Sign__
A sign animated to appear as a neon sign

__Coffee Cup and Steam__
A coffee cup, saucer and steam all in css

__A desk and signs__
CSS only

__A folder that animates open and closed__
The front cover opens as an animation on the hover event

__APi emailer__
Contact from emailer set up                                                                                         


## Contact Details
### E-mail:   geoffwalker@outlook.com 
### Website:  http://www.geoff-walker.io/
