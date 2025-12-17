# express-middleware-auth
A simple Express.js project demonstrating route-level middleware for password-based authentication using POST requests.



---

## 🔐 How Authentication Works

1. User submits a password through a form
2. A **middleware function (`passwordCheck`)** runs before the route handler
3. If the password matches, `next()` is called
4. The user is allowed to access the protected page
5. If the password is wrong, the request is stopped

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- body-parser
- HTML

---

## ▶️ How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/your-username/express-middleware-auth.git
```
2. Navigate to the project folder:
```bash
cd express-middleware-auth
```
3. Install dependencies:
```bash
npm install
```
4. Start the server:
```bash
node index.js
```
5. Open your browser and visit:
```bash
http://localhost:3000
```
