# NodeProj

RESTful APIs using Node.js for managing books.

## Features:

Consists of all CRUD operations: 
API end points:
1. Add a new book (title, author, summary) -- (POST) -- /api/books
2. View a list of all books -- (GET) -- /api/books
3. View details of a specific book by its ID -- (GET) -- /api/books/{id}
4. Update a book's details -- (PUT) -- /api/books/{id}
5. Delete a book -- (DELETE) -- /api/books/{id}

Remember to replace {id} with an actual book ID when testing the endpoints.

### To run the Application locally

1. Clone the repository
2. Install dependencies using " npm install ".
3. Setup MongoDB
4. Configure environment variables as follows(below is only the sample, actual environment variables are used in the code):
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/book-api
5. Start the application using " node app.js ".

### Assumptions

1. Title and author cannot be null.

#### Further scope

1. The {id}, which is dynamic variable can be set to global variable.
2. The paths or the API end points can be further be comprehensive.
3. An ID can be used as primary key for each entry.
