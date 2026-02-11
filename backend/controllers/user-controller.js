
const userController = async (req, res) => {
    const user = req.user;
    
    console.log("User controller here");
    res.status(200).json({
        success: true,
        message: 'User controller Here',
        data: user
    })
}

module.exports = {userController};