# node-express-starter

A basic Node.js and Express.js starter project.

## Getting Started

Generate boilerplate using:
<code>npx @notamans/create-node-express-starter <PROJECT_NAME></code>

API URL: `http://localhost:3000`

### Features

- Node.js and Express.js for building web applications
- TypeScript for type safety and maintainability
- dotenv for environment variable management
- Jest for unit testing and integration testing
- ESLint and Prettier for code linting and formatting
- Winston for logging
- Custom global error handler. Removes the need of redundant `try/catch` blocks.

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

### Scripts

The following scripts are available:

- `npm run dev`: Start the development server
- `npm run build`: Compile the code for production
- `npm run start`: Start the production server
- `npm run test`: Run unit tests and integration tests
- `npm run lint`: Run ESLint for code linting and formatting

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
