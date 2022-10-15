const User = require("../model/databs")


// Get API
const getAlluser = async(req,h)=>{
    try{
        const getUser = await User.query()
        if(!getUser)
        return h.response({
            status:false,
            msg:"any data is not there"
        })
        else 
        return h.response({
            status:true,
            msg:"get all data",
            data: getUser
        })
    }
    catch(err){
        return h.response ({
            status:false,
            msg :err
        })
    }
}


// Get user by Id 
const getUserById = async(req,h)=>{
    try {
        let id = req.params.id
        let data = await User.query().where({id:id})
        if(data.length>0)
            return h.response({
                status:true,
                count:data.length,
                msg:"successfully data get by Id",
                details:data,
            })
        else
            return ({
                status:false,
                msg:"Id not found"
            })
        
    } catch (error) {
        return h.response ({
            status:false,
            msg :error
        })
    }
}

// Post API
const postUser = async(req,h)=>{
    const {username, email,Psw, phone_No}=req.payload
    // console.log(username)
    try{
        if(!username || !email || !Psw || !phone_No){
            return h.response({status:false,msg:"Enter all filed"})
        }
        else{
            const createUser = await User.query().insert({
                username,
                email,
                Psw,
                phone_No
        });
        // console.log(createUser);
            if(!createUser)
                return h.response({
                status:false,
                msg:"data is not created yet",
                })
            else 
                return h.response({
                    status:true,
                    msg: "data created Succesfully"
                })
        }
    }
    catch(err){
        return h.response ({
            status:false,
            msg :err
        })
    }
}

// Update user by Id
const updateUserById = async(req,h)=>{
    const {username, email,Psw, phone_No} = req.payload
    try {
        let id = req.params.id
        let userUpdate = await User.query().findById(id).patch({username, email,Psw, phone_No});
        if(userUpdate > 0){
            return h.response({status:true,message:"users details updated successfully"})
        }else{
            return h.response({status:false,message:"id not found"})
        }
    } catch (error) {
        return h.response ({
            status:false,
            msg :err
        })
    }
}


// Delete user by Id
const deleteUserById = async(req,h)=>{
    try {
        let id = req.params.id
        let data = await User.query().deleteById(id);
        if(data>0)  
            return h.response({
                status:true,
                msg:"Successfully data deleted"
            })
        else
            return h.response({
                status:false,
                msg:"enter correct id"
            })
        
    } catch (error) {
        return h.response ({
            status:false,
            msg :err
        })
    }
}


module.exports = {postUser,
    getAlluser,
    getUserById,
    deleteUserById,
    updateUserById}
