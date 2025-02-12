# Social-Network-API
Social network API with Mongoose, MongoDB, and Insomnia

## Description

This project is a RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and manage a friend list. It uses Express.js for routing, MongoDB for the database, and Mongoose ODM for object data modeling. The API provides endpoints for creating, updating, deleting users, thoughts, reactions, and friend lists.

## User Story

**AS** a social media startup  
**I WANT** an API for my social network that uses a NoSQL database  
**SO THAT** my website can handle large amounts of unstructured data

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone <https://github.com/GitTodd24/Social-Network-API>
    ```
2. Navigate to the project directory:
    ```bash
    cd <project_directory>
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Ensure MongoDB is running locally or use a cloud instance. Update the MongoDB URI if necessary in `config/db.js`.
5. Start the server:
    ```bash
    npm start
    ```

The server should be running at `http://localhost:3001`.

## Usage

To interact with the API, you can use [Insomnia], as shown in the video (https://insomnia.rest/). Here are the main functionalities of the API:

- **GET** routes for users and thoughts to fetch data in a formatted JSON.
- **POST**, **PUT**, and **DELETE** routes for users, thoughts, reactions, and friend lists.
- Use **POST** to create new users, thoughts, and reactions.
- Use **PUT** to update user or thought details.
- Use **DELETE** to remove users, thoughts, reactions, or friendships.

## Testing

To test the functionality of the API:

1. Launch the server as described in the [Usage](#usage) section.
2. Use **Insomnia** to test the following endpoints:
    - Create users and thoughts using **POST**.
    - Update users and thoughts using **PUT**.
    - Delete users, thoughts, reactions, and friends using **DELETE**.
    - Ensure the data is returned in a formatted JSON when accessing the **GET** routes.
3. Ensure that the **POST**, **PUT**, and **DELETE** routes work as expected by testing various scenarios (creating, updating, deleting).

## Walkthrough Video

A walkthrough video demonstrating the functionality and testing of the API will be available at the following link:

[https://app.screencastify.com/v2/manage/videos/cG3MyJO6hJbIQ3aihl6a]

## Contributing

Feel free to fork the repository, create an issue, or submit a pull request to contribute. Please ensure any pull requests follow the style guidelines and pass all tests before submitting.

## License

This project is licensed under the MIT License. 

---

