const BlogModel = require("../models/BlogModel")

const CreateBlog = async (req ,res) =>{
 await BlogModel.create({
        title: req.body.title,
        content: req.body.content,
        blogfile: req.body.blogfilename

  })
  .then(res=>{ return res.json({message: "Blog Creted successfully" , data: res})})
  .catch(err=>{return res.json({message: "somthing went error", code: 405})})
}

const GetBlogs = async (req ,res) =>{
   const blogs = await BlogModel.find({}).sort({_id: -1});
   if(blogs){
    return res.json({blogs: blogs , code: 200 , get: true})
   }
   return res.json({get:false , code: 405, msg:"Somthing went error"})
}

const PutBlogs = async () =>{
    
}
const DeleteBlog = async (req,res) =>{

}

const GetOneBlog = async(req,res)=>{
    const {id} =req.params

   const blogs = await BlogModel.find({_id: id}).limit(1);
   if(blogs){
    return res.json({blog: blogs , code: 200 , get: true})
   }
   return res.json({get:false , code: 405, msg:"Somthing went error"})
}

module.exports = {CreateBlog ,DeleteBlog, GetBlogs , PutBlogs , GetOneBlog}