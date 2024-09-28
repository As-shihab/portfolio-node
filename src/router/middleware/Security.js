
const Security = async(req ,res, next)=>{

    const token = req.headers['usertoken'];

    await jwt.verify(token , "shihab" , (err , decoded)=>{
        if(err) return res.json({msg: "User Not verifyd"})

            req.email = decoded.email
            req._id = decoded._id
            res.json({User:true , islogin:true})

            next()
    })
      

}