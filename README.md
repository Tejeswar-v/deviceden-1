# 👥 User Management Web App

A Node.js web application with user signup and login functionality using MongoDB, Express.js, and EJS. It allows users to register and authenticate using session-based login. Ideal for small-scale applications or as a boilerplate for user-based platforms.

---

## 🚀 Features

- 📝 User registration and login system
- 🔐 Secure authentication with sessions
- 📦 MongoDB for user data storage
- 🎨 EJS templating for dynamic web pages
- 🛠 Organized codebase with Express routes and models

---

## 📁 Project Structure

mst/
├── index.js # Main application entry
├── models/ # MongoDB schemas (Mongoose models)
├── routes/ # Express route definitions
├── views/ # EJS templates for rendering UI
├── public/ # Static assets (CSS, images)
├── package.json # App metadata and dependencies

yaml
Copy
Edit

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/mst
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure MongoDB
Make sure MongoDB is running locally, or update the connection string in index.js:

js
Copy
Edit
mongoose.connect("mongodb://localhost:27017/your-db", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
Or use an environment variable like:

js
Copy
Edit
mongoose.connect(process.env.MONGODB_URI);
🔒 Consider using a .env file for storing credentials.

4. Start the Server
bash
Copy
Edit
npm start
Or using nodemon for live-reload:

bash
Copy
Edit
npx nodemon index.js
5. Access the App
Open your browser:
http://localhost:3000/

📄 License
This project is licensed under the MIT License.

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

🧾 Author
Developed by [tejeswar-v].

