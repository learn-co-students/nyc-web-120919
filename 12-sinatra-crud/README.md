## Sinatra CRUD

# Questions

 - Why do we have to override forms for PATCH requests


 # Controller Actions

READ Actions: 
 1. Index
    - A user can request a list of all instances 
    - Application responds with that list
 2. Show
    - A user can request to see (still a Read action) information a specific instance of one of our models
    - Our application responds accordingly

CREATE Actions:
 3. New
    - A user can request a form that the User will use to POST information
 4. Create
    - Recieve the POST information and do the literal work of adding a new instance to our DB 
 5. Edit
    - Request a form to edit an existing instance
    
 6. Update
    - Receives the information from the edit form and does the literal work of editing the instance in question
 7. Delete
    - Will delete information (usually a specific instance)