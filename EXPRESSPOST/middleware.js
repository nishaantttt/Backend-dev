import fs from "fs";

let logfun = (req,res,next)=>{
    let logText = `timestamp: ${new Date().toString()} url ${req.url} method ${req.method} \n`

    fs.appendFileSync("./log.txt",logText)
    console.log(logText)
    next()
}


let userValidation = (req,res,next)=>{
    if(!username || !password){
        return res.status(400).json({
            message: "password and username required"
        })
    }

    if(password.length<6){
        return res.status(400).json({
            message: "password is small"
        })
    }
}
export { logfun, userValidation }