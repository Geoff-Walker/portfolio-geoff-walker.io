<img src="https://github.com/Geoff-Walker/Geoff-Walker/blob/main/my-banner.png">

# About Me
Hi my names Geoff and I live in rural Lincolnshire with my beautiful wife Helen. After a nasty fall left me an amputee, my established career as an engineer ended abruptly, little did I know when I started coding as a hobby that my true calling for programming had only just begun. Since then I have fallen in love with programming and developed a talent for interactive UI/UX web development.

If you have a hybrid/remote employment opportunity or would like to discuss work on a freelance basis, please don't hesitate to contact me.

# My Portfolio
Like most other developers that have just completed their portfolio sites, it seemm a much fairer question to me, to ask what didnt I learn while creating my portfolio site. I think therefore its best to just give a brief summary of the challenges I faced and how I overcame them.  At the start of this project I made the very concious decision firstly not to do anything that felt "normal" or like a template and secondly have a completetly different theme on each page to show a spectrum of capabilities.  

__There are four main pages:__
1. Index - Home
2. Projects
3. About
4. Contact

__Responsive by Design__
In todays world all screen sizes need to be accomodated and I hope that I have achieved that in all browsers, however I wont mention it further again as I beleive this is just intrinsic and not worth further unpacking.


## Index - Home ##
When I was trying to come up with a design for my home page I wanted something that was dynamic and full of motion, I didn't however want the enormous download times that a big background video would bring. So I came up with the coke bubbles concept, self generated with javasdcript.  

<div align="center">
<img src="https://github.com/Geoff-Walker/Geoff-Walker/blob/main/geoff-walker.io.gif" width="512" height="384">
</div>

__Fancy hover__
I used data attributes in order to create a fancy hover effect using a before and after psuedo class on the nav links

__Light and Dark Theme__
I created a light and dark theme based either cola or lemonade

__Javascript Coke Bubbles__
Again I used a before and after on a javascript generated span element to create a bubble of either coke or lemonade depending on the light and dark theme.

__Diet Coke Animationm__
Really liking a challenge and wanting to really perfect my animation skills I decided to try and recreate the Eta James classic "I dont want you", forever linked with the diet coke break adverts.  A little while later and after hearing a thirty second loop more times than sanity should allow, I came up with an animation that is accurate enough to evoke the song even in silence.

__Artwork in Inkscape__
The diet coke break, background artwork and all the cans and spray on this page were draw by myself in inkscape.

## Projects ## 
The idea for this page was to have an elevator where each floor was a different project within the portfolio.  This was my biggest challenge by far I knew what I wanted to achieve but really had to look hard for effective tools like scroll-snap and the intersection observer in order to bring the vision to reality.  I really love the final effect especially on desktop.
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
As the lift registers intersection with the floor via the intersection observer the Dom is manipulated to change the following on screen using the data attributes establsihed in the htmnl of the floor.

1. The Header
2. The Technologies used on the left panel
3. The url of the correct web and github repos

__Door Animations__
The intersection observer also both opens and closes the doors by triggering animations.

__Page filter__
Even if at the time of writing this I dont really have enough projects on the page to need a filter, I intent to keep adding to it and it demonstrates another capability

__Picture Heavy  - Lazy Loading __
If on self reflection I have a critism of this page it is the picture heavy nature of it and the knock on loading times.  I have tried to improve this by optimising image quality, compressing gifs and implementing lazy loading on all but the first two floors.


## About ## 



## Contact ##


## Lessons learnt and areas to improve 



                                                                                               


## Contact Details
### E-mail:   geoffwalker@outlook.com 
### Website:  http://www.geoff-walker.io/
