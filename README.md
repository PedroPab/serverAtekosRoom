# Mi API Server

This is a simple API server built with Node.js, Express, dotenv, and ES6.

## Project Structure

```
mi-api-server
├── src
│   ├── server.js
│   ├── app.js
│   ├── routes
│   │   └── index.js
│   ├── controllers
│   │   └── index.js
│   └── config
│       └── index.js
├── .env
├── package.json
├── .babelrc
└── README.md
```

## Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file in the root directory and add your environment variables
4. Start the server with `npm start`

## Files

- `src/server.js`: Entry point of the application. It imports the express app from `app.js` and starts the server.
- `src/app.js`: Creates an instance of the express app, sets up middleware, and imports routes from the `routes` directory.
- `src/routes/index.js`: Exports a function that sets up the routes for the application. It imports controllers from the `controllers` directory to handle these routes.
- `src/controllers/index.js`: Exports functions that handle the routes of the application. Each function corresponds to a specific route.
- `src/config/index.js`: Exports the configuration for the application. It uses the `dotenv` package to load environment variables from the `.env` file.
- `.env`: Contains environment variables for the application. It is not included in the version control system.
- `package.json`: Configuration file for npm. It lists the dependencies and scripts for the project.
- `.babelrc`: Configuration file for Babel. It specifies how to transpile the code to ES5.

## Environment Variables

The `.env` file should contain the following environment variables:

- `PORT`: The port on which the server will run.
- `DB_URL`: The URL of your MongoDB database.

## Scripts

- `npm start`: Starts the server in development mode.
- `npm test`: Runs the test suite.

## Dependencies

- `express`: Web server framework.
- `dotenv`: Loads environment variables from a `.env` file.
- `babel`: Transpiles ES6 code to ES5.

## Dev Dependencies

- `nodemon`: Automatically restarts the server when files change.
- `eslint`: Lints JavaScript code.
- `mocha`: Runs tests.
- `chai`: Assertion library for tests.