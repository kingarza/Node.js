## Middleware

Code wich runs (on the server) between getting a request and sending a response

![](assetsNotes/01.png)

### Examples

- Logger middleware to log details of every request
- Authentitacion check middleware for protected routes
- Middleware to parse JSON data from request
- Return 404 pages

## Request types

**GET** : requests to get a resource
**POST** : requests to create new data (e.g. a new blog)
**DELETE** : requests to delete data (e.g. delete a blog)
**PUT** : requests to update data (e.g. update a blog)


## route parameters

the variable of the route that may change value
localhost:4001/blogs/:id

## Deployment

Para hacer un deployment se necesitan variables de entorno
npm install --save dotenv

migrar la base de datos
subir un repo a git
crear la app en heroku

## MongoDB, Heroku

https://developer.mongodb.com/how-to/use-atlas-on-heroku/