# Aspects of Beauty - Portfolio Redesign
When starting out as a developer one of the hardest challenges is finding the right real-world portfolio pieces to demonstrate your capabilities.  When my mother came along with one of her friends who needed changes made to her beauticians’ website, it felt like a dream opportunity! 


After a bit of study, I worked out that the website was of a “template no code variety”.  Coders among you roll your eyes now because it was bad!  Most sensationally so in mobile view, when they hadn't even included the client’s logo, the logo showing was a template holding logo! After having a good look at the site, I came up with a long list of things that needed rectifying in an improved design. My biggest mistake is about to come, when I assumed that being asked to sort out a website, meant that I could make changes!  Spoiler alert, after spending quite a lot of time really nailing and upgrading the existing website, the owner didn't want to change away from the original as it was done by a family friend... 

Like Homer Simpson, the sound of “DOH!” could be heard for miles around. Lesson learned, get a full brief, even from a client who isn't paying. Luckily for the pseudo client, I outlined the issues with the website and offered some advice and maybe embarrassed the original creators into fixing some of the issues outlined below. 


I have decided that even if the website is not live as an enterprise site, the design and development work that I undertook is still of the same portfolio value and I am so proud of the improvements I made.  It is now a proper website, and it deserves to be unpacked.  


## Defining the problem ##
 
__Ionos No Code design__

As this was a no code site and I am most definitely learning the “authentic way”, I started again completely from scratch but used the original design to base the overall look of the project on. 

__Styling Errors__

1. Three completely different fonts with juxtaposed styling were used, which makes it look weird 
I stripped out one of the fonts used, to limit it to two fonts.  An expressive heading font and based on the age of the clients at the salon, a highly readable font for the detail.  I used CSS variables for the fonts and styling colours, so that had the project moved forward, it could easily be changed to the client's taste. 


2. Text blocks were repeated once in one font and then directly below in a jarringly different one. 
Not a difficult fix - cut out the repeat, for me this is both a styling and quality control error. 


__Responsive errors__


1. Logo not added to mobile view. As I briefly said before, the most neglectful mistake that the original makers of the site did, was not considering responsive design at all, as most of the site would not function readably on mobile.  However, to leave a template logo on the site rather than the client’s logo is unforgivably neglectful! To spin in the positive, this really demonstrates to me the power of quality control.  Having worked both in aerospace design engineering and on large governmental databases, the principle of do, check, release is essential and one I'm grateful that is now intrinsic. 


2. Responsive design was not attempted on the treatments page at all, with a 3-column layout collapsing on top of itself and none of it readable (this was the first error brought to the attention of the pseudo client by her customers). To provide a fix for this I used my favourite CSS layout tool, CSS Grid, with some flexible min max column widths. 


3. Like the error above, the design hasn’t seen any QC, as there was a block of 6 images set not in pleasing 2 x 3 or 3 x 2 but in a row of 4 and then a row of 2, which looked bizarre. Luckily my old friend CSS Grid, made short work of making it visually more pleasing. 


__Quality Control Errors__

1. Text contrast in some places was a really bad light-grey text, on a slightly darker light-grey background. 
2. Endless links on all pages to social media accounts, that the pseudo client doesn't have! 
3. The overall copy was poor and in places non-existent.  It is plain to read from this readme that I am no writer however, my wife is a truly fantastic writer, and she wrote the copy for me.  ( If you are looking for a copywriter look no further than helen3188@hotmail.co.uk )

## Brief 


As I said above, not thoroughly defining the brief, is the biggest mistake I made on this project.  Nevertheless, I needed one, so I assumed the following brief based on what the client had originally asked for: 


1. Start new project coded from scratch 
2. Fix styling errors 
3. Fix responsive errors 
4. Fix QC errors 
5. Bring more interest and movement to quite a boring landing page 
6. Stick, where web design rules allow, to the original design-ish! 
7. Help the client present a better image online (advice on working with social media, and the importance of reviews on the website and on Facebook) 


## Existing Technologies used in anger 

__CSS Grid__
CSS grid is my favourite CSS layout tool. It has always made total sense to me out of the box.  To push the CSS Grid to a higher level, I also brought in a flexible column layout, using repeat min max. 

__Flexbox__
In my days of making simple components on Front End Mentor, Flexbox was probably my least favourite tool but these days after practicing, it seems as nearly intuitive as CSS Grid. 

__Animation__
I have used animations several times before and enjoyed the outcome. On this project, I used the animation property to give motion and interest to the landing page. 
    
__CSS variables__
Again, this is not the first time I have used CSS variables; they offer such a good tool to quickly respond to client requirements.  As I said above, this project never made it far enough to go through that stage but if the client had wanted to, all the fonts’ colours and styles could be changed radically, with a simple change to the variables. (This is something that I will be making a prerequisite for all projects going forward). 


## New technologies used 
__Mask-image__
This took some time to set up and get thoroughly down but I feel it added a beautiful effect to the landing page.  When put in combination with the animation, this fluid transition of images, partially obscured by a paint brush effect mask, is super effective.  While this is not something I could see on all websites, the effect is striking, and I would definitely use that style of obscuration and animation to give motion again! 

__Google maps using Iframes__
While I have manipulated APIs and worked on geocoding and reverse geocoding, this felt like real overkill here, so I simply used a straightforward Iframe with a google maps link.  This was super simple and took no time at all to do. 


__Enquiry e-mail handling using the formsubmit.co API__
This took me a little while to get submitting smoothly but overall was a super simple addition to the functionality of the site 


__Paginated reviews container__
I personally felt that one of the biggest problems with the original online presence was a lack of reviews. I know the lady well and she is a very likeable. warm person.  However, she had no Facebook page to review, no reviews on the website and no trust pilot etc.  I felt this was a real problem, so I included a reviews container and implemented pagination on the reviews.  Although this took a while to implement, I felt it really added to context and presence online. 


__Lightbox__
A lightbox is an essential part of modern websites but was a new feature for me to implement. I want to be super honest in my project reflections and this is one feature, that whilst it works perfectly and all the images show well, I would rework it, as I don't like the position of the next/previous buttons in the lightbox. 


## Lessons learnt and areas to improve 
Overall, this project felt like an enormous success. I believe the codebase is in a different league to the original, which at the time of writing this reflection, has been amended slightly to fix some of the responsive and QC issues that I raised to the client. 


Right at the start, I outlined my biggest mistake, which was not getting a brief from the client in the first place.  This is a mistake that I will massively learn from and will ensure that a brief is nailed down before I start work on the project. 


If I were pushing this project to distribution, I would look at four further extensions to the site and content. 
1. Redo or correct Lightbox button locations, as previously identified 
2. Use the intersection observer API to animate some transitions on the page. 
3. If this had been an active client project, I would have suggested to hide the clients e-mail behind a form, to avoid data scraping and excess junk mail. 
4. The images used on the original site were low-res and I hadn't been supplied them, so I had to find and refine them from online sources.  I did successfully find high-res versions of all the corporate logos used, but if I was doing this again, I would hopefully be supplied the images. I would also format them to the same aspect ratio, as there is a faint difference in scale on some images when flexing the screen responsively, that would have been fixed by using a fixed aspect ratio. 

