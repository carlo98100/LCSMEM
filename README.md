# live-fanatic-backend

Start program:
1. Open the terminal in the LCSMEM-folder.
2. Type "npm install" to install all dependencies for the backend.
3. Type "npm run i" to also install all dependencies in the frontend.
4. Type "npm run all" or to run in dev-mode "npm run alldev".




Trello:
https://trello.com/invite/b/6cHQcmeT/235546cb954c9ebf48e0ef33315c18a7/livefanatic

Github Repo:
https://github.com/carlo98100/LCSMEM




Documentation:

https://docs.github.com/en
https://reactjs.org/docs/getting-started.html
https://stripe.com/docs
https://developer.mozilla.org/en-US/
https://stackoverflow.com/




Views:

EventPage {
On the EventPage the user can see all the avalible events. The events are presented in a list where each event is printed as a card with quick information on the specific event. On the right hand side the user can see a searchbar where the user can search on an artist and the list filters the events and prints the events relevant to the search. Under the searchbar ther is a dropdown menu with the lable "Live/Stream" on the side. The purpose of the dropdownmenu is so that the user can choose between three options: Live, Stream or Both. They are used to filter the list of events by if the event is Live or Streamed. The Both option, which is the default opion, is used to display all the events since the events are either Live or Streamed. If the user want to go to the artistpage the user can click the artistname on the eventcard. 
}

Login {
On the login page the user can login or choose to go forward to the signup page. You login through that you type in email and password and clicks "Login"
}

ArtistPage {

On the artist page the user can read about the artist and see upcoming events that the selected artist is involed in. The user can also click on any of the upcoming event to be redirected to that specific events page where they can buy tickets.
}

SpecificEventPage{

On the specific event page the user can select an amount of tickets that they want to buy for that event. They can then click on the buy button to add it to their order.
}

Checkout{

Once the user has added anything to their cart they can go to the checkout page to confirm their order and once they confirm the order they will be redirected to stripe payment to input their credentials. Once the payment has gone through they will be redirected back to a page that confirms their order. 
}

Homepage{

When the user is on the homepage they will be presented with a carusel that they can scroll through to see different artists.
}

Stream{

    It takes in the video Id from the url params to fetch the correct video. It also checks that someone is logged in or it redirect to the login page. If someone is logged in it also checks so the user have got a ticket for the stream, otherwise you will be redirected to YourTickets.
}

YourTickets{

    Here you can see all the tickets that you as a user have bought. If the ticket is connected to a stream, the ticket will have a StreamButton on it. So when you click the Streambutton, you will be redirected to the Stream.
}




Colorpallete:

Black = #0f0f0f
Dark Gray = #292929
Light Grey = #545154
Orange = #ff9e07
White = #ececec
