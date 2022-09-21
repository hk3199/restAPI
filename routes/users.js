import express from 'express'
import { v4 as uuidv4 } from 'uuid';
import { createUser, getUser } from '../controllers/users';
const router= express.Router();
let users =[]
router.get('/',getUser);

router.post('/',createUser);

 router.get('/:id',(req,res) =>{
    const {id}= req.params;
    const foundUser=users.find((user)=>user.id===id)
    res.send(foundUser)
 })



 router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    //id to del 123
    //john 123
    //jen 321 
    //users=users.filter((user=> user.id!==id))
    users=users.filter((user)=>user.id!==id)
    res.send(`user with id:${id} has been deleted`)
 })


router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    // You stucked bcos of req.params below
    const {firstName,lastName,age}=req.body;


    const user=users.find((user)=>user.id===id);
    if(firstName)
    {
        user.firstName=firstName;
    }
    if(lastName)
    {
        user.lastName=lastName;
    }
    res.send(`user patched with ${firstName}`)
})

export default router;