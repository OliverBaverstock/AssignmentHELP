# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Oliver Baverstock

## Overview.

An app which allows users to view takeaway deals in the area. The app shows a list of deals which include a picture, the name of the dish, the name of the restaraunt, the phone number and the price of the dish. If the price of the dish or phone number of the restaraunt changes then the user can edit the info for those. A user can also delete the deal which is being displayed if the deal is ever ended. A user can also like the deal. There is a filter option for the deals but this broke on me. I spent 3 days alone and could not fix this error and spoke to other students and one the lecturers and still could not fix this. I also have a form coded so the user could add more deals but i could not get the routes implemented to access the page for adding a deal.

. . . . . List of user features  . . . .

Deal
Deals list
Edit Deal
Delete Deal
Like Deal
Filter Deals(Broken)
Add Deal(Routing not implemented to view page)

## Setup.

Use 'npm start' in the the projects folder in the terminal

## Data Model Design.

Below is a diagram of the data model. For the single page app there is the user and then there is the deals which the user can interact with. I didn't get as far as routing due to constant errors and debugging so my data model is just the user and the deals.

![][model]

Here you can see a snippet of code from the stubAPI which I created for this aplication. As you can see there are multiple entries of data for a deal. There is the name of the dish and the name of the restaraunt, the price of the dish, the phone number of the restaraunt, a picture of the dish and also there is an upvote count and an id for the deal.

~~~
class StubAPI {
    constructor() {
        this.deals = [
        {
            id: 1,
            dishName: 'Spice Bag',
            restName: 'Imperial Garden',
            price: '9.99',
            phone: '021-4832432',
            picture: './spicebag.jpg',
            upvotes: 10
        },
~~~
## UI Design.

Below is a screenshot of the main page and a brief explanation of what is happening on this page and what the user can do

![][main]

>> The main page shows the list of deals in a card. It shows every deal which is in the database. Each deal can be edited, the user can change the phone number and also the price of the deal. This action can also be cancelled. A user can also delete a deal if it no longer exists using the delete button. The user can cancel this process also before confirming the deletion of the deal. The user can like the deal also and this will make the like counter increase. There is an option for filtering the deals but unfortunately this broke on me and i couldn't fix it dispite spending 3 days trying and using google, classmates and my lecturer to help. There is an Add deal option in the header but unfortunetly the routing was not implemented for this so the user cannot get to this page to add a deal dispite all the features being there for adding a deal.


## Routing.

Unfortunetely i did not have enough time to complete this section so I was not able to add routing to my assignment. The route I was going to use was to link the main page and the add deal page. I thought it would have been more user friendly to have the add deal form on a different page but in the long run probably cost me marks because I was not able to implement the routing even though i had the code in for making the form and also adding a deal.

## Storybook.

Below is a screenshot of the stories which I implemented into my assignment.

![][stories]

In the stories I implemented the Header, Deal List, Deals Form, Deal and Filter Controls.

## Backend (Optional).

For this assignment I only used a stubAPI for storing information

## Authentication (Optional).

I did not use any authentication for this assignment

## Independent learning and Overall Comment.

I didn't use any other aspects of react outside of the lab. For my assignment I tried to combine the two labs so that I wasnt just copying all the code from one. I changed the idea around the make the app for takeaway deals and I used bits of code from both. I used the list format which was related to the contacts lab and also implemented the like feature from the hackernews lab. This method of combining the two labs unfortunetley made it quite difficult and gave me error after error so i just spent all of my time debugging so I could not complete all of the aspects. The filter control error was the worst I had and spent the final 3 days of the assignment trying to fix it. I originally had it working and then carried out and update and it then stopped working. I tried to figure it out and downgrade etc with no luck. This was the downfall of the assignment. I researched some bootstrap which was not thought in labs which I implemented in the making of the cards so I could get them the always stay the same size.

[model]: ./img/model.png
[main]: ./img/main.png
[stories]: ./img/stories.png