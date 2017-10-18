# FreeAgent

FreeAgent is for professional athletes looking to make their mark in the world of track & field. FreeAgent helps you find meets in your area, provides registration information, and allows you to track and share your personal records with potential sponsors.

## Utilizing
- React
- Node.js
- MongoDB
- Mongoose

## API
To set up the API on your computer, create a new MongoDB database called `free-agent`. The collections will be created by the schema models when you run the application.

### Endpoints
All API endpoints are routed through `/api`. Beyond that, there is a specific path for each main API function:
- `/auth` for registration and login
- `/user` for user CRUD
- `/result` for user result CRUD
- `/meet` for meet CRUD (Admin only)
- `/meet/save` for saved/scheduled meet CRUD

In most cases, the `_id` for the entry will be added after the endpoint above, *e.g.* `/user/:userId`.

Depending on the situation, a dynamic id endpoint might be added following the appropriate category mid path, *e.g.* `/meet/:meedId/save/user/:userId`.
