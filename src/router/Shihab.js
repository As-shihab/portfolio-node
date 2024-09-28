const express = require('express')
const { CreateBlog, GetBlogs, PutBlogs, DeleteBlog , GetOneBlog} = require('../controllers/BlogController')
const {CreateGuyst , GetGuyst  , UpdateGuyst , DeleteGuyst} = require('../controllers/GuystController')
const shihab = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "Uploads")
    },
    filename: function (req, file, cb) {
        const dataname = Math.floor(200000000 + Math.random() * 900000);
        const actual = dataname + "file" + path.extname(file.originalname)
        cb(null, actual)
        req.body.blogfilename = actual
    }
})
const upload = multer({ storage: storage })

shihab.post('/blog', upload.single('blogfile'), CreateBlog)
shihab.get('/blogs', GetBlogs)
shihab.put('/blog', PutBlogs)
shihab.delete('/blog', DeleteBlog)
shihab.get('/blog/:id' , GetOneBlog)


// guyst router

shihab.post('/guyst', CreateGuyst);
shihab.get('/guyst/:id', GetGuyst)
shihab.put('/guyst/:id', UpdateGuyst)
shihab.delete('/guyst/:id', DeleteGuyst)
// end guyst router




module.exports = shihab