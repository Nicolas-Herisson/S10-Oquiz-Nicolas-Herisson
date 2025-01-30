import User  from './user.js';


const myUser = {
email: "test@test.com",
password: "password",
first_name: "Test",
last_name: "User",
role: "student"
};

const user = new User(myUser);

const getAllUsers = await User.findAll();
console.table(getAllUsers);