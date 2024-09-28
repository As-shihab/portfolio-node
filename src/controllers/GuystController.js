const UserModel = require("../models/UserModel")


const GetGuyst = async()=>{

}

const DeleteGuyst = async()=>{

}

const PutGuyst = async()=>{

}

const CreateGuyst = async (req , res) =>{

    try{
        const NewGuyst=   await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
         })
         if(NewGuyst){
            return res.json({
                msg:'User created successfullly',
                code: 200,
                user: NewGuyst
            })
         }
    }
    catch(err){
        return res.json({msg: err.message, code: 405 , guyst: false})
    }
    

    
}

const UpdateGuyst = async(req ,res) =>{

}

module.exports = {GetGuyst , DeleteGuyst , PutGuyst , CreateGuyst , UpdateGuyst}