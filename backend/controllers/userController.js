const User = require("../models/user")

const insertUser = async (request, response) => {
    try 
    {
      const input = request.body;
      const user = new User(input);
      await user.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  const checkUser = async (request, response) => {
    try 
    {
      const input = request.body;
      const user = await User.findOne(input);
      response.json(user);
    }
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  }

  module.exports = {insertUser,checkUser}