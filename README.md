Back-End: GET All Inventory
Your task is to create an endpoint that will allow users to send a GET request for all of the inventory.

Back-End: GET Inventory Item
* Your task is to set up an endpoint that will allow a user to get details for a specific inventory item based on an id parameter.
* If the id does not match, return a 404 status and an error message.
Front-End: App Architecture Setup

Your task is to set up the architecture for your app.
* Create a repo on bitbucket.
* Create a React app.
* Setup Sass / Sass variables.
* Create a folder structure for your App.
Back-End: GET Warehouse Inventory


* Your task is to set up an endpoint that will allow a user to get the inventory for a specific warehouse based on an id parameter.
* If the supplied warehouse_Id does not match one of our warehouses, return a 404 status and an error message.
Front-End: All Inventory List

* Create the UI and functionality for displaying the list of inventory items.
   * This component will need state.
   * Be sure to create an individual item component.
* This component will also be used to display the inventory for a single warehouse. Your fetch to the API will differ depending on if there is a warehouse_id prop or not. Be sure to collaborate with the person who has the ticket “Front-End: Warehouse Inventory List“.

Front-End: React Router Setup
Setup Routes for the following:
* ‘/’
   * When a user hits the homepage, redirect them to the list of warehouses.
* ‘/warehouses’
* ‘/inventory’
* ‘/warehouses/:id’
* ‘/inventory/:id’
Back-End: GET All Warehouses

Your task is to create an endpoint that will allow users to send a GET request for a list of warehouses