# JWT Security with Node.js <img src="assets/logo.png" alt="drawing" width="27px"/>

This project demonstrates the use of **JSON Web Tokens (JWT)** to establish strong security controls for **Node.js backend APIs.**
JWTs are a crucial part of reinforcing web application and API protection since they guarantee the **preservation of data integrity and authentication.**

### API endpoints

* In this project postman documentation, there are three api endpoints grouped under the **auth** resource. The first is the **User Registration** Endpoint, 
which allows new users to create accounts by providing their registration details like first name, last name, email, and password. 
This step is essential as it **enables users to access the system's services.** 

* The second endpoint is the **User Authentication** Endpoint, 
designed for **existing users to verify their identity.** Users provide their authentication credentials, typically their **username (email ID) and password**, 
to prove their identity. **Authentication is a pivotal security measure, ensuring that only authorized users can access specific parts of the system.** 

* The third endpoint is a secured end point which can be accessed once user is authenticated. Here, once a user successfully authenticates and obtains a token, they can securely access protected endpoints by including this token in the **Authorization** 
header of their requests. This token serves as proof of their identity and authorization, maintaining the system's security and restricting access to 
authorized individuals.

* The complete documentation provides detailed guidance on utilizing these endpoints with example test cases can be found in the below API documentation.

- [**Auth API documentation**](https://documenter.getpostman.com/view/25306703/2s9YC7SB9P)

## Used Technologies

- Node.js
- Express.js
- Sequelize
- MySQL

#### Used Integrated Development Environment
- IntelliJ IDEA

## How to use ?
This project can be used by cloning the 
project to your local computer.

Make sure to create a **jwt_demo_db** database in the MySQL community server.

#### Clone this repository
1. Clone the project using `https://github.com/PubuduJ/jwt-security-with-node.git` terminal command.
2. Change the `MYSQL_PASSWORD` in the `.env` file to your local machine MySQL server password.
3. Open the terminal from the project directory and run `npm install` and `npm start` to run the server.

## Version
v1.1.0

## License
Copyright &copy; 2023 [Pubudu Janith](https://www.linkedin.com/in/pubudujanith/). All Rights Reserved.<br>
This project is licensed under the [MIT license](LICENSE.txt).