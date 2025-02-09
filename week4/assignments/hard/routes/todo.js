const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const { User, Todo } = require("../database");
const router = Router();

// todo Routes
router.post('/',adminMiddleware.userMiddleware,async (req, res) => {
    // Implement todo creation logic
    const userId=req.userId;
    if(!userId){
        return res.status(403).json({
            message:'not authorised.',
            Error:'user id is not available'
        })
    }

    const {title,done}=req.body;
    if(!title || typeof done !== 'boolean'){
        return res.status(400).json({
            message:'bad request',
            Error:'all fields must be valid and required to have.'
        })
    }

    const existingUser=await User.findOne({_id:userId})
    if(!existingUser){
        res.status(403).json({
            message:'not authorised',
            Error:'user is not registered'
        })
    }

    const todoCreated=await Todo.create({
        title,
        done,
        userId
    })
    if(!todoCreated){
        return res.status(500).json({
            message:'server error',
            Error:'not able to store the data in database'
        })
    }

    res.json({
        message:'todo created successfully'
    })
});

router.put('/', adminMiddleware.userMiddleware, (req, res) => {
    // Implement update todo  logic
    const userId=req.userId;
    if(!userId){
        return res.status(403).json({
            message:'not authorised',
            Error:'user id not available'
        })
    }

    const {title}=req.body;
    if(!title){
        res.status(400).json({
            message:'bad request',
            Error:'must provide tittle to update.'
        })
    }
});

// router.delete('/', adminMiddleware, (req, res) => {
//     // Implement delete todo logic
// });

// router.delete('/:id', adminMiddleware, (req, res) => {
//     // Implement delete todo by id logic
// });


// router.get('/', adminMiddleware, (req, res) => {
//     // Implement fetching all todo logic
// });

// router.get('/:id', adminMiddleware, (req, res) => {
//     // Implement fetching todo by id logic
// });

module.exports = router;