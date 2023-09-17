# flatiron-phase-2-project

Setup

All the information about Dog Breed can be found in the db.json file. We'll be using json-server to create a RESTful API for our database.

Run npm install to install our dependencies.

Then, run npm run server to start up json-server on http://localhost:3001.

In another tab, run npm start to start up our React app at http://localhost:3000.

Before you start building out the application, the first step that you should take is to draw out your component hierarchy. This will tell you how components can pass data to each other as well as where that information should be stored.

Deliveries

When our application loads, make a GET request to /dogs to fetch the toy array. Given your component tree, think about which component should be responsible for the array. After you have put the data in the proper component, your next job is to render the DogListCard components on the page.

When the DogForm is submitted, make a POST request to /dogs to save a new dogs breed to the server. Using the ideas of controlled form and inverse data flow, think about how to render a new DogListCard for the dog-breeds that you created.

When the "Delete" button is clicked, make a DELETE request to /dogs/:id with the ID of the dogs-breeds that was clicked to delete the toy from the server. The DogsBreed that you clicked on should also be removed from the DOM.

When the like button is clicked, make a PATCH request to /dogs/:id with the id of the dogs that was clicked, along with the new number of likes (this should be sent in the body of the PATCH request, as a object: { likes: 10 }), to update the dogs on the server. Clicking on the button should also increase the number of likes on the DOM.