# Payvision calculator

In this exercise you are given the legacy code of Payvision Calculator web app. Maintainance and new features development is your responsability.

## Your tasks

1. Code review: please list all good/bad practices you find in this application.:ballot_box_with_check:
2. It seems the app is buggy... Could you fix it?.:black_square_button:
3. Add divide and multiply operations.:black_square_button:
4. How would do you test this app?.:black_square_button:
5. Can you improve the UI/UX?.:black_square_button:

You are allowed to change as much code as you consider.

**Bonus:**

1. Configure the application to allow use of keyboard numpad.

### 1. Code review.

Are you a good code reviewer? This would be one of your daily basis tasks.

- Help our team, list good and bad practices you find, identify bugs or defects and suggest improvements. How would you refactorize it?

Please add code inline comments or include them into your readme file.:ballot_box_with_check:

  Good/Bad practices

  1. To use link to css file from index.html to apply design style.
  2. to use link to js file from index.html to scripts.
  3. to code files in modular way to get scalability in aplication.
  4. To use a framework web para develop to client (AngularJs, ReactJs, Vue).
  5. To assign in `function()` a name function to specify its functionality, for example `initCalculator()`
  
  Bugs
  1. buttons `Sum` and `substracction` have been inverted. 
  2. Buttons `zero` y `Three` have been inverted the property data-num. 
  3. Button `=` make mistake when press it in operation followed set not number up , after math operador and when it just hold el operador =

### 2. Testing and bug fixing

Product quality, testing and finding bugs is really important at Payvision. This application seems it does not work fine...

Test it and fix any potential bug you find. Feel free to document your findings in readme file or help yourself with commit messages.

### 3. New features implementation

Our product owner required us new features for this application. We would like the application new version to support multiplications and divisions.

- Could you implement these new features?
- Bear in mind usage of git-flow to track your changes.
- Current version is 1.2.2 (see package.json version). Should we increase the version? How? Why?

### 4. Test automation

We would like to automate testing of this application.

- What kind of tests would you implement? Why?

**Bonus**: Implement the tests.

### 5. UI/UX design

Do you consider yourself a good designer or UI/UX developer?

- Improve the UI/UX to be more user friendly.

Feel free to do any changes. Show us what you are capable to!

## How to run the application using local server

To run the project, open a terminal and execute the following command from project root path:

- Install depencencies:

> yarn

- Run the application

> yarn serve

This command will run a local web server in port 8082:
[http://localhost:8082/src/index.html](http://localhost:8082/src/index.html)
