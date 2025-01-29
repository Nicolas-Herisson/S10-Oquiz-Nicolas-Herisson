import User  from './user.js';

const user = new User();

user.email = "test@test.com";
user.password = "password";
user.first_name = "Test";
user.last_name = "User";
user.role = "student";

const getAllUsers = await User.findAll("user");
console.log(getAllUsers);