# BookStore

A book sharing web app built with the MERN (MondoDB, Express, React, Node) stack!
a simple web application that allows users to view, add, and delete books. The application have both frontend and backend functionality
with Register and Login Functionality.


## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios
- **Others**: Mongoose (for MongoDB object modeling)

---
### Backend Deployed(Render) URL  Endpoint
To be used in Frontend replace your localhost url in frontend(client) code with this Provided Live URL for full functioning of the Application.
```bash
https://bookstore-backend-d4ac.onrender.com
```

# Testing User Endpoints with Postman

Follow the steps below to test the user-related endpoints:

---

## 1. Register a New User

**Endpoint:**  
`POST /users/register`
```bash
localhost:5000/users/register
```

**Request Body:**

```json
{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "securePassword123",
  "password2": "securePassword123"
}
```
## 2.  Log In as the Registered User

**Endpoint:**  
`POST /users/login`
```bash
localhost:5000/users/login
```

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```
**Expected Response:**
```json
{
  "success": true,
  "token": "Bearer <your_generated_jwt_token>"
}
```
## 3. Get User Profile

**Endpoint:**  
`GET /users/profile/<user_id>`
```bash
localhost:5000/users/profile/673c909c17407306243ec088
```

**Expected Response:**

```json
{
  "_id": "673c909c17407306243ec088",
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "$2a$10$7eQA7y5OQZAX0hye2Vuo4e2v1OpXNRNa9RgIpzS0ALq2JWh39lArW",
  "bio": "",
  "image": {
    "data": [],
    "contentType": ""
  },
  "books": [],
  "__v": 0
}

```



https://github.com/user-attachments/assets/18a7b463-c6e6-4274-99c7-188dba042439













## Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/YashK13200/BookStore-MERN.git
cd Bookstagram
```

### 2. Backend Setup (Node.js)
Navigate to the backend folder:

 ```bash
   cd backend
   ```
Install dependencies:
 ```bash
   npm install
   ```

Create a .env file in the backend directory and add the following configuration:
 ```bash
   MONGODB_URI=mongodb://localhost:27017/contacts
   PORT=5000
   ```
Replace mongodb://localhost:27017/contacts with your actual MongoDB connection string.

Start the backend server:
 ```bash
   npm node server.js
   or  simply nodemon
   or  npm run server

   ```
localhost:5000

### 3. Frontend Setup (React)
Navigate to the client folder:
 ```bash
 cd client
 npm install
   ```
Start the frontend development server:
 ```bash
 npm run client
   ```
This will start the frontend on http://localhost:5171.

### 4. Database Setup
You need a MongoDB database to store the contacts. You can either:

Use a local MongoDB instance, or
Use a cloud MongoDB service like MongoDB Atlas.
If you're using a local MongoDB instance, make sure it's running on localhost:27017 (or update the .env file accordingly).

Once the server is running, the database schema will be automatically created when the application first interacts with the database.

## File Structure

#### `client` - Holds the client application
- #### `public` - Holds the static files
- #### `src`
    - #### `components` - Holds all the different React components
    - #### `App.js` - Renders browser routes and different pages
    - #### `index.js` - Renders the React app by rendering App.js
- #### `package.json` - Defines npm behaviors and packages for the client
#### `backend` - Holds the server application
- #### `database` - Holds `db.js` which has the local mongoDB connection
- #### `models` - Holds all the data models
- #### `routes` - Holds HTTP to URL path associations for each unique url
- #### `uploads` - Multer file uploads
- #### `server.js` - Holds the server code
- #### `package.json` - Defines npm behaviors and packages for the server
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

## Available Scripts

Please note that any time the server is run in these scripts `nodemon` is used in place of `node` for easier development.<br/>
In the root directory, you can run:

### `npm run install-all`

Installs all `npm` dependencies in the client and server side.

### `npm run client-install`

Installs all `npm` dependencies in the client side.

### `npm run server-install`

Installs all `npm` dependencies in the server side.

### `npm run client`

Runs just the client app in development mode. <br />
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run server`

Runs just the server in development mode.

### `npm run dev`

Runs both the client and server in development mode. <br />
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Tech Stacks
<ul>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>MongoDB and Mongoose</li>
    </ul>
  </li>
  <li>Frontend
    <ul>
      <li>HTML5, CSS3, JavaScript</li>
      <li>React</li>
      <li>React Bootstrap</li>
      <li>Redux</li>
    </ul>
  </li>
</ul>

## App features
<ol>
  <li>User login, signup and authentication with JSON web token (JWT).</li>
  <li>Users can upload, edit, delete and view books.</li>
  <li>Users can edit their own profile page and view the profile of others.</li>
</ol>

## Next steps
- Implement a chat feature that allows user to talk to each other via web sockets
- Improve API endpoints
