# PHP API + React Frontend Project

This is a full-stack project using **PHP** for the backend (API) and **React.js** for the frontend (UI).  
The PHP code handles the data, and React shows the user interface.

---

## How to Install and Set Up the Project

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/Abdulwaheed78/php-api-react.git
cd php-api-react
```

---

### Step 2: Set Up the Database and Config File

1. Open phpMyAdmin or any MySQL tool.
2. Import the `db.sql` file to create a database called `user_api` with a table named `users`.
3. Open `user-api/config.php` and update your database username and password.

Now your backend is ready.

---

### Step 3: Set Up the React Frontend

1. Open the terminal and go to the frontend folder:

   ```bash
   cd user-crud
   ```

2. Install required packages:

   ```bash
   npm install
   ```

3. Update the API URLs in these files inside `src/components/`:
   - `UserList.js`
   - `UserForm.js`
   - `UserEdit.js`

Now the frontend is connected to the backend.

---

### Step 4: Start the Project

To run the frontend project, stay inside `user-crud` folder and run:

```bash
npm start
```

This will start your project. Open your browser and go to `http://localhost:3000` (or another port).

---

## About Me

Hi, I’m **Abdul Waheed Chaudhary**.  
This is my first time using React. I made this project with the help of **AI** tools.

If I get a chance to work in your company, I would love to get training and learn more. I’m a quick learner and ready to grow.

---

## Thank You

Thanks for checking my project!  
I hope to keep learning and building more cool things with your support. 😊
