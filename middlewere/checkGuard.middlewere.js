
//college secation middlewere

const collegeCheckSecquirty = (req,res,next)=>{     /// for get and update
    const param = req.params.collegeId
    if(param <= 0){
        return res.status(505).json({
            status : "error from middlewere",
            remdy : "please enter the collegeId"
        })
    }
    else {
        return next()
    }



}
const collegeCheckSecquirtForBody = (req,res,next)=>{    //// for create
    const body = req.body
    if(!body || !body.collegeId) {
        return res.status(501).json({
            status : "error",
            remdy : "empty fields input or collegeId"
        })
    }
    else{
        return next()
    }
}


//course secation middlewere

const courseCheckSecquirty = (req,res,next)=>{     /// for get and update
    const param = req.params.collegeId
    if(param <= 0){
        return res.status(505).json({
            status : "error from middlewere",
            remdy : "please enter the collegeId"
        })
    }
    else {
        return next()
    }



}
const courseCheckSecquirtForBody = (req,res,next)=>{    //// for create
    const body = req.body
    if(!body || !body.collegeId) {
        return res.status(501).json({
            status : "error",
            remdy : "empty fields input or collegeId"
        })
    }
    else{
        return next()
    }
}







//class secation middlewere


const classCheckSecquirty = (req,res,next)=>{     /// for get and update
    const param = req.params.collegeId
    if(param <= 0){
        return res.status(505).json({
            status : "error from middlewere",
            remdy : "please enter the collegeId"
        })
    }
    else {
        return next()
    }



}
const classCheckSecquirtForBody = (req,res,next)=>{    //// for create
    const body = req.body
    if(!body || !body.collegeId) {
        return res.status(501).json({
            status : "error",
            remdy : "empty fields input or collegeId"
        })
    }
    else{
        return next()
    }
}







//books secation middlewere


const bookCheckSecquirty = (req,res,next)=>{     /// for get and update
    const param = req.params.collegeId
    if(param <= 0){
        return res.status(505).json({
            status : "error from middlewere",
            remdy : "please enter the collegeId"
        })
    }
    else {
        return next()
    }



}
const bookCheckSecquirtForBody = (req,res,next)=>{    //// for create
    const body = req.body
    if(!body || !body.collegeId) {
        return res.status(501).json({
            status : "error",
            remdy : "empty fields input or collegeId"
        })
    }
    else{
        return next()
    }
}






//student secation middlewere

const studentCheckSecquirty = (req,res,next)=>{     /// for get and update
    const param = req.params.collegeId
    if(param <= 0){
        return res.status(505).json({
            status : "error from middlewere",
            remdy : "please enter the collegeId"
        })
    }
    else {
        return next()
    }



}
const studentCheckSecquirtForBody = (req,res,next)=>{    //// for create
    const body = req.body
    if(!body || !body.collegeId) {
        return res.status(501).json({
            status : "error",
            remdy : "empty fields input or collegeId"
        })
    }
    else{
        return next()
    }
}










//trainer secation middlewere


const trainerCheckSecquirty = (req,res,next)=>{     /// for get and update
    const param = req.params.collegeId
    if(param <= 0){
        return res.status(505).json({
            status : "error from middlewere",
            remdy : "please enter the collegeId"
        })
    }
    else {
        return next()
    }



}
const trainerCheckSecquirtForBody = (req,res,next)=>{    //// for create
    const body = req.body
    if(!body || !body.collegeId) {
        return res.status(501).json({
            status : "error",
            remdy : "empty fields input or collegeId"
        })
    }
    else{
        return next()
    }
}










//user secation middlewere

const userCheckSecquirty = (req,res,next)=>{     /// for get and update
    const param = req.params.collegeId
    if(param <= 0){
        return res.status(505).json({
            status : "error from middlewere",
            remdy : "please enter the collegeId"
        })
    }
    else {
        return next()
    }



}
const userCheckSecquirtForBody = (req,res,next)=>{    //// for create
    const body = req.body
    if(!body || !body.collegeId) {
        return res.status(501).json({
            status : "error",
            remdy : "empty fields input or collegeId"
        })
    }
    else{
        return next()
    }
}








//account secation middlewere



const accountCheckSecquirty = (req,res,next)=>{     /// for get and update
    const param = req.params.collegeId
    if(param <= 0){
        return res.status(505).json({
            status : "error from middlewere",
            remdy : "please enter the collegeId"
        })
    }
    else {
        return next()
    }



}
const accountCheckSecquirtForBody = (req,res,next)=>{    //// for create
    const body = req.body
    if(!body || !body.collegeId) {
        return res.status(501).json({
            status : "error",
            remdy : "empty fields input or collegeId"
        })
    }
    else{
        return next()
    }
}



module.exports = {
    collegeCheckSecquirty,
    collegeCheckSecquirtForBody,
    courseCheckSecquirty,
    courseCheckSecquirtForBody,
    classCheckSecquirty,
    classCheckSecquirtForBody,
    bookCheckSecquirty,
    bookCheckSecquirtForBody,
    studentCheckSecquirty,
    studentCheckSecquirtForBody,
    trainerCheckSecquirty,
    trainerCheckSecquirtForBody,
    userCheckSecquirty,
    userCheckSecquirtForBody,
    accountCheckSecquirty,
    accountCheckSecquirtForBody
    

}