# Client Application

This is a React application for managing contacts.

## Project Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd client
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run:

-   **`npm start`**: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
-   **`npm test`**: Launches the test runner in the interactive watch mode.
-   **`npm run build`**: Builds the app for production to the `build` folder.
-   **`npm run eject`**: This is a one-way operation. Once you `eject`, you can’t go back!

## API Endpoints

The application interacts with a backend API available at `http://localhost:5000`.

### Authentication

-   **`POST /api/auth/login`**: Authenticates a user.
    -   **Request body:** `{ "email": "user@example.com", "password": "password" }`
-   **`POST /api/auth/register`**: Registers a new user.
    -   **Request body:** `{ "username": "testuser", "email": "user@example.com", "password": "password" }`

### Contacts

-   **`GET /api/contacts`**: Retrieves the list of contacts.
-   **`POST /api/contacts`**: Creates a new contact.
-   **`DELETE /api/contacts/:id`**: Deletes a contact by its ID.
-   **`PATCH /api/contacts/:id`**: Updates a contact by its ID.

## Test Credentials

You can use the following credentials for testing:

-   **Email:** `test@example.com`
-   **Password:** `password`