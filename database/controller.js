import Users from '../model/user'


// get : http://localhost:3000/api/users
export async function getUsers(req, res){
    try {
        const users = await Users.find({})

        if(!users) return res.status(404).json( { error: "Data not Found"})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json( { error : "Error While Fetching Data"})
    }
}

// get : http://localhost:3000/api/users/1
export async function getUser(req, res){
    try {
        const { userId } = req.query;

        if(userId){
            const user = await Users.findById(userId);
            res.status(200).json(user)
        }
        res.status(404).json({ error : "User not Selected Get...!"});
    } catch (error) {
        res.status(404).json({ error: "Cannot get the User...!"})
    }
}

// post : http://localhost:3000/api/users
export async function postUser(req, res) {
    try {
      const formData = req.body;
      if (!formData) return res.status(404).json({ error: "Form Data Not Provided...!" });
  
      const user = await Users.create(formData);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

// put : http://localhost:3000/api/users/1
export async function putUser(req, res){
    try {
        const { userId } = req.query;
        const formData = req.body;

        if(userId && formData){
            const user = await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(user)
        }
        res.status(404).json( { error: "User Not Selected Update...!"})
    } catch (error) {
        res.status(404).json({ error: "Error While Updating the Data...!"})
    }
}

// delete : http://localhost:3000/api/users/1
export async function deleteUser(req, res){
    try {
        const { userId } = req.query;

        if(userId){
            const user = await Users.findByIdAndDelete(userId)
            return res.status(200).json(user)
        }

        res.status(404).json({ error: "User Not Selected delete...!"})

    } catch (error) {
        res.status(404).json({ error: "Error While Deleting the User...!"})
    }
}