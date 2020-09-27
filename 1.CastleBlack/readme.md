# REST API implementation

This is a Game of Thrones inspired REST API game. You are responsible to create the engine of the game.

## Your tasks

1. Implement the endpoints in **./src/api.js** file with the most suitable code for players and objects management REST API. You will find detailed instructions in this file.:ballot_box_with_check:
2. Write some tests for your code. Use test folder for this purpose.:ballot_box_with_check:
3. Answer all commented questions you find in the code.:ballot_box_with_check:

**QUESTION: why this endpoint blocks the app(router.js)?**
there is not answer to client, `res` does not have a property o method called body,body belong to req, if we wish data to client with res could use `res.send()`

**app.disable("x-powered-by"); QUESTION: any reason is this line here?**
Hide to users the header information of the web application, we are not using express

### Required endpoints

You have to create endpoints (as many as you consider) to support the following functionality:

1. List all players.:ballot_box_with_check:
2. Create player: adds a new player to data source.:ballot_box_with_check:
3. Get player by id: returns the player for the given id.:ballot_box_with_check:
4. Arm a player with an object in its bag.:ballot_box_with_check:
5. Kill a player: sets player health to 0.:ballot_box_with_check:
6. Create object: adds a new object to data source.:ballot_box_with_check:
7. Get object by id: returns the object for the given id.:ballot_box_with_check:
8. Upgrade object: increase/descrease the value of the object given by id with a new value.:ballot_box_with_check:
9. Destroy object: remove an object from available objects.:ballot_box_with_check:

**Bonus:**

1. Include a postman collection in utils folder to test the app.
2. Add basic authentication to /api path.
3. Implement pick up item endpoint: one player add to its bag one item that doesn't belong to any other player.
4. Implement attack player endpoint: one player attacks another player using an object from its bag. Adjust health accordingly
5. Implement steal bag from player endpoint: one player steals everything from another player. Bag objects are moved from one player to another.
6. Implement resurrect player endpoint: bring back to life a dead player using its id.
7. Implement use object endpoint: a player use an object against another player or itself.
8. Are you having fun? You are free to extend the game with new functionality.

## Game Rules

1. You are free to implement as many endpoints as you need.
2. You can use inline comments, git commits or readme file to justify your decissions.
3. Bag size is unlimited.
4. Bear in mind RESTful API concepts.
5. One object can be used by multiple players

**Use your own criteria for any rule that is not clear. Justify it.**

## How to run the application using a local server

To run the project, open a terminal and execute the following command from project root path:

Install dependencies

> yarn

Start a local server

> yarn start

A local server will start on port 8080.

> http://localhost:8080

## How to run the application using Docker

Build the image:

> docker build -t <your username>/payvision-fullstack-castleblack .

Run the image on localhost port 8081:

> docker run -p 8081:8080 -d <your username>/payvision-fullstack-castleblack

Enter the container:

> docker exec -it <container id> sh

Print logs:

> docker logs <container id>
> docker logs -f --tail 10 <container id>
