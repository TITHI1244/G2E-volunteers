Hello 👋!!!
Welcome to my repo!
This is a single page application built for the sample test provided by 'Wiredelta' in order to test my coding skills. 
The objective of this simple application is building a site where people can register themselves to voluntarily work at an event.

My workflow:
You can check this link - https://github.com/TITHI1244/G2E-volunteers/commits/main containing all the commit messages to get the idea of mine how I worked.

How to run it?
In your local, clone the repo and run 'npm install'. Then from the terminal run 'npm start'. That's it, you are seeing it in your localhost ✨

How to use it?
At first, you can see the homepage. In the top navigation bar, you can see 2 more nav links: About & Shifts. Go to 'About' and check what it is about(sorry to disappoint you, there are some demo 'lipsum' text only 😔).

Next you can also visit 'Shifts' nav link that would show all the registered shifts. But as of now, we have not created any shifts yet so we will see a plain text.

Now revisit 'Home' and check out the registration form. Fill up the form and submit it. You will see a 'Thank you' note after your submission. 

Now visit again 'Shifts' from nav and you can see whatever data you have just registered.
If you want, you can register a few more and see how it looks in the 'Shifts' page. 

⚠️⚠️⚠️If you refresh your page, it would all be gone as there is no database connected.
Finally you have come to the contact part of the page, where you can see my contact info to directly contact me. And if you have something specific to ask or recommend, you can use the contact form. 

After inserting all your information in the contact form, you can submit and go to your console and you can view it 😊

List of libraries & frameworks used:
The app is completely built using front-end technologies, no database or backend is there.

I have used 'Reactjs' and the most commonly used features from it, props, hooks, router etc. 

For styling, I used pure CSS as it seems more challenging to me and media queries to make the site responsive to all screen sizes.

The immediate improvements needed that I can see:
1. First and foremost, the navigation bar looks ugly for smaller screen. I tried to incorporate 'React Transition Group' for adding 'Burger menu' for smaller screen sizes. But I could not succeed.
2. I also tried to embed the map showing event venue, but could not succeed. I tried to add and use 'google-maps-react' and show the map from Google maps. Firstly I did not know that Google maps are not free to use anymore so I see developer use writing on the map. And the main bug is, sometimes it is loading nicely and sometimes it takes infinity and does not show up.
3. I planned the shifts-card to be filtered according to skills so that the event organizer can check the manpower in certain areas. That is why I used the 'picsum' image that was supposed to point to the area. But due to time constraints, I could not manage to do it.
4. Finally the code is not much organized, especially .css is messy 😟 I also needed some time to arrange it better.

But mostly thanks to 'Wiredelta' that I got the opportunity to challenge myself and grow 🕊️