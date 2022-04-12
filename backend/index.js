import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/LoginRegistrationDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    con_password: String
})

const userStore = new mongoose.Schema({
    fname: String,
    lname: String,
    father :String,
    mother :String,
    dob: String,
    place:String,
    phoneNo:String,
   gender :String,
    email: String,
   ano : String,
   pno : String
})

const User = new mongoose.model("User",userSchema)
const Store = new mongoose.model("Store",userStore)


app.post("/Login", (req,res)=>{
    const{ email, password} = req.body
    User.findOne({email:email} , (err,user) =>{
        if(user){
            if(password === user.password){
            res.send({message:"login successfull", user: user})
            }
            else{
                res.send({message: "password didn't match"})
            }
        }
        else{
              res.send({ message: "user not registered"})
        }
  
})
})

app.post("/Registration", (req,res)=>{
    const{ email, password, con_password} = req.body
    User.findOne({email:email} , (err,user) =>{
        if(user){
            res.send({message:"user already registered"})
        }
        else{
            const user = new User({
                email,
                password,
                con_password
            })
  
    user.save( err => {
        if(password != con_password){ 
        res.send({ message: "password did'nt match"})
    } else {
        res.send({ message: "Successfully Registered,Please login now"})
     }
      })
    } 
})
})

app.post("/Home", (req,res)=>{
    const { fname,lname,father,mother,dob,place,gender,phoneNo,ano,pno} = req.body
    Store.find({phoneNo:phoneNo,fname:fname,lname:lname,father:father,mother:mother,dob:dob,place:place,gender:gender,ano:ano,pno:pno} , (err,store) =>{
        if(store){
            res.send({message:"user fill the form"})
        }
        else{
            const store = new Store({
                fname: '',
                lname: '',
               father : '',
                mother : '',
                dob: '',
                place: '',
                phoneNo: '',
               gender : '',
                email: '',
               ano : '',
               pno : ''
            })
  
        }
})
})


app.listen(9002,()=>{
    console.log("BE started at port 9002")
})



