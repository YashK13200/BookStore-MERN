# BookStore

A book sharing web app built with the MERN (MondoDB, Express, React, Node) stack!

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios
- **Others**: Mongoose (for MongoDB object modeling)

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/YashK13200/BookStore-MERN.git
cd contact-management
```

### 2. Backend Setup (Node.js)
Navigate to the backend folder:

 ```bash
   cd Backend
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
 cd frontend
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
