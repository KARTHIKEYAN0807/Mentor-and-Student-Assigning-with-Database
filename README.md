

---

# **Project Documentation**

## **1. Project Overview**

### **Project Name**

- **Name**: Mentor and Student Assignment API

### **Description**

This project involves creating an API to manage mentors and students using Node.js and MongoDB. The API includes endpoints for creating mentors and students, assigning students to mentors, and retrieving information about assignments.

### **Technologies Used**

- **Backend**: Node.js, Express
- **Database**: MongoDB (Local for development, Cloud for deployment)
- **API Testing**: Postman

## **2. Setup and Installation**

### **Prerequisites**

- **Node.js**: Make sure Node.js is installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Install MongoDB locally or set up a cloud instance (e.g., MongoDB Atlas).

### **Local Development Setup**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/assign-mentor.git
   cd assign-mentor
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following environment variable:
     ```plaintext
     MONGO_URI=mongodb://localhost:27017/yourDBname
     PORT=3000
     ```

4. **Start MongoDB**:
   - Ensure MongoDB is running. Open a terminal and run:
     ```bash
     mongod
     ```

5. **Start the Application**:
   ```bash
   npm start
   ```

### **Deployment**

1. **Push Code to GitHub**:
   - Commit and push your changes to GitHub:
     ```bash
     git add .
     git commit -m "Deploying to Render"
     git push
     ```

2. **Deploy on Render**:
   - Go to [Render](https://render.com/) and create a new Web Service.
   - Connect your GitHub repository.
   - Set the environment variables (`MONGO_URI` with your cloud MongoDB connection string) in Render’s settings.
   - Deploy the service.

## **3. API Endpoints**

### **1. Create Mentor**

- **Endpoint**: `POST /api/mentors`
- **Description**: Create a new mentor.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "specialization": "Software Engineering"
  }
  ```
- **Response**:
  - **Success**: `201 Created`
  - **Error**: `400 Bad Request`

### **2. Create Student**

- **Endpoint**: `POST /api/students`
- **Description**: Create a new student.
- **Request Body**:
  ```json
  {
    "name": "Jane Smith",
    "course": "Computer Science"
  }
  ```
- **Response**:
  - **Success**: `201 Created`
  - **Error**: `400 Bad Request`

### **3. Assign Student to Mentor**

- **Endpoint**: `POST /api/assign`
- **Description**: Assign a student to a mentor.
- **Request Body**:
  ```json
  {
    "studentId": "studentIdHere",
    "mentorId": "mentorIdHere"
  }
  ```
- **Response**:
  - **Success**: `200 OK`
  - **Error**: `400 Bad Request`

### **4. Get Students for a Mentor**

- **Endpoint**: `GET /api/mentors/:mentorId/students`
- **Description**: Retrieve all students assigned to a specific mentor.
- **Response**:
  - **Success**: `200 OK` with a list of students
  - **Error**: `404 Not Found`

### **5. Get Previous Mentor for a Student**

- **Endpoint**: `GET /api/students/:studentId/previous-mentor`
- **Description**: Retrieve the previously assigned mentor for a specific student.
- **Response**:
  - **Success**: `200 OK` with mentor details
  - **Error**: `404 Not Found`

## **4. Testing**

### **Using Postman**

1. **Start Your Server**: Ensure your server is running locally.
2. **Open Postman**: Install [Postman](https://www.postman.com/) if you haven’t already.
3. **Create and Send Requests**: Use Postman to send requests to your API endpoints.
   - **Set Request Type**: Select `GET`, `POST`, `PUT`, etc., based on the endpoint.
   - **Enter URL**: Use `http://localhost:3000/api/` followed by the endpoint path.
   - **Set Headers**: Add `Content-Type: application/json` if necessary.
   - **Set Body**: Enter request body data for `POST` and `PUT` requests.

4. **Check Responses**: Verify the API responses against expected outcomes.

## **5. Troubleshooting**

- **Connection Errors**:
  - Ensure MongoDB is running and accessible.
  - Verify connection strings and environment variables.

- **Deployment Issues**:
  - Check Render logs for errors.
  - Confirm environment variables are correctly set on Render.

## **6. Contribution Guidelines**

- **Fork the Repository**: Fork the project repository on GitHub.
- **Create a Branch**: Create a new branch for your changes.
- **Make Changes**: Implement and test your changes.
- **Submit a Pull Request**: Submit a pull request for review.

## **7. License**

- **License**: [MIT License](https://opensource.org/licenses/MIT)

---

