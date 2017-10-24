# FreeAgent

FreeAgent is for professional athletes looking to make their mark in the world of track & field. FreeAgent helps you find meets in your area, provides registration information, and allows you to track and share your personal records with potential sponsors.

## Utilizing
- React
- Redux
- Node.js
- MongoDB
- Mongoose

## Server
To set up the API on your computer:
- create a new MongoDB database called `free-agent`. The collections will be created by the schema models when you run the application.
- run this in CLI from the `/client/src/data` folder to import meet data into database: `mongoimport --db free-agent --collection meets --file allMeets.json`
- run this in mongo to set search fields in data: `db.meets.createIndex({ name: "text", venue: "text", city: "text", state: "text", country: "text"})`

### Endpoints
All server endpoints are routed through `/api`. Beyond that, there is a specific path for each main API function:
- `/auth` for registration and login
- `/user` for user CRUD
- `/result` for user result CRUD
- `/meet` for meet CRUD (Admin only)
- `/meet/save` for saved/scheduled meet CRUD
- `/team` for user team CRUD

In most cases, the `_id` for the entry will be added after the endpoint above, *e.g.* `/user/:userId`.

Depending on the situation, a dynamic id endpoint might be added following the appropriate category mid path, *e.g.* `/meet/:meedId/save/user/:userId`.

## Client
On the client side, there are three main users for the site: unregistered users, registered users, and admins.

### User Types:

#### Unregistered users
Unregistered users are able to visit the site, set their locations, and make execute search queries to find meets in their area. They may also view a user's profile, if that user has set their profile to publicly viewable.

#### Registered users
Registered users may do all that unregistered can, and can also make personal profiles, toggle privacy on those profiles, as well as input user-specific information about their track and field records, upcoming events, and saved events.

#### Admins
Upon login, admins can view a dashboard that allows them to view different data sets from the site. They can CRUD both meets and users from the front end, as well as view the number of meets and users on the main dashboard.

### Endpoints
All client endpoints are listed below.
- `/` home page of the site
- `/login` for user login
- `/register` for user registration
- `/dashboard` User Dashboard for editing account information
- `/:username` to view a user's profile
