# Thoughtful Threads

Welcome to Thoughtful Threads! This project is a full-stack blog platform designed to enable users to read, like, and comment on blog posts. The application leverages the power of the MERN stack (MongoDB, Express, React, Node.js), Redux Toolkit, and Tailwind CSS for a seamless and responsive user experience.

## Features

- **Authentication**: Secure user authentication using JWT and Google OAuth.
- **User Interactions**: Users can read, like, and comment on blog posts.
- **Admin Dashboard**: Comprehensive admin dashboard for CRUD operations on posts, comments, and users.
- **Routing**: Integrated React Router Dom for efficient client-side routing.
- **State Management**: Utilized Redux Toolkit for managing the application state.
- **Styling**: Designed with Tailwind CSS for a modern and responsive UI.

## Installation

To get started with Thoughtful Threads, follow these steps:

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/itsaman1825/Thoughtful-Threads.git
    cd Thoughtful-Threads
    ```

2. Navigate to the `api` directory and install dependencies:
    ```bash
    cd api
    npm install
    ```

3. Create a `.env` file in the `api` directory and add the following environment variables:
    ```env
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    `

### Frontend Setup

1. Navigate to the `client` directory and install dependencies:
    ```bash
    cd ../client
    npm install
    ```

2. Create a `.env` file in the `api` directory and add the following environment variable:
    ```env
    REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage

Once both the backend and frontend servers are running, open your browser and navigate to `http://localhost:3000` to access Thoughtful Threads.

## Project Structure

- `api`: Contains the server-side code (Express, MongoDB, JWT authentication).
- `client`: Contains the client-side code (React, Redux, Tailwind CSS).




## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)


---

Thank you for checking out Thoughtful Threads!
