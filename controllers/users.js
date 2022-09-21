export const createUser=(req,res)=>{
    const user= req.body;
 //    const userID= ;
    //creating a new object and  in that i need to spread all the properties of the curretn user 
    
    // and add th userID as well
    const userWithID= {...user,id:uuidv4()}
 //    users.push(user);  instead of just sending user, we'll be sending the userid
     users.push(userWithID)
     res.send(`user named ${user.firstName} added to the database`);
 
 }

 export const getUser=((req,res)=>{
    console.log(users)
    res.send(users);
})