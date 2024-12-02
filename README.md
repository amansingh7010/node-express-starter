# node-express-starter

A basic Node.js and Express.js starter project.

## Getting Started

To get started with this project, follow these steps:

1. Clone the Repository
2. Install dependencies: `yarn install`
3. Start the development server: `yarn dev`
4. API URL: `http://localhost:3000`

### Project Structure

The project is organized into the following directories:

- `src`: Source code for the application
  - `server.ts`: Main entry point for the server
  - `controllers/`: Controller logic
  - `errors/`: Custom errors for consistency
  - `middlewares/`: Express middlewares
  - `routes/`: API routes
  - `services/`: Business logic for the application
- `dist`: Compiled JavaScript code for production
- `tests`: Unit tests and integration tests for the application

### Features

- Node.js and Express.js for building web applications
- TypeScript for type safety and maintainability
- dotenv for environment variable management
- Jest for unit testing and integration testing
- ESLint and Prettier for code linting and formatting
- Winston for logging
- Custom global error handler. Removes the need of redundant `try/catch` blocks.

### Scripts

The following scripts are available:

- `yarn dev`: Start the development server
- `yarn build`: Compile the code for production
- `yarn start`: Start the production server
- `yarn test`: Run unit tests and integration tests
- `yarn lint`: Run ESLint for code linting and formatting

### Environment Variables

The following environment variables are used:

- Server
  - `PORT`: Port number for the server (default: 3000)
  - `NODE_ENV`: Node environment (default: development)
- Logging
  - `LOG_LEVEL`: Logger log level. For example, "info", "debug", etc.
  - `LOG_TO_CONSOLE`
  - `LOG_TO_FILE`
  - `LOG_TO_GRAFANA`
  - `GRAFANA_HOST`
  - `GRAFANA_PORT`

### Contributing

Contributions are welcome! Please submit a pull request with your changes.
