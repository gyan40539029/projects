
const collegeHelper = require('../helpers/colleges.helpers')
const createCollege = async(req, res) => {
    try {
        const college = req.body
        
        if (college?.collegeId) {

            const college_rcd = await collegeHelper.createCollege(college)
            console.log(college_rcd)

            if (college_rcd === "college not created") {
                return res.status(401).json({
                    status: "already exhisting college on this id",
                    result: college_rcd

                })

            }

            else {

                return res.status(201).json({
                    status: "new college added successfully",
                    result: college

                })

            }

        }
        else {
            return res.status(404).json({
                status: "error",
                desc: "please enter the college id"
            })
        }
    }
    catch (err) {
        console.log("internal error", err, err.message);


        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }

}

const getCollegebyId = async(req, res) => {
    try {
        const collegeId = req.params.collegeId //// need to  change query to param
        const collegeRecord = await collegeHelper.getCollegebyId(collegeId)
       
        if (collegeId > 0) {
          
            
            if (collegeRecord === "college data not fetch") {
                return res.status(401).json({
                    status: "error",
                    result: collegeRecord
                })
            }
            else {
                return res.status(201).json({
                    status: "data fetch successfully",
                    result: collegeRecord
                })
            }
        } else {
            console.log('hellow brother')
            return res.status(501).json({
                status: "missing field input",
                remdy: "please enter the collegeId"
            })
        }
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getColleges = (req, res) => {                     /// daat come in query

}

const updateCollegeById = (req, res) => {   /// update college by id  need to change  and neet to param for id
    try{
    const collegeData = req.body
    const collegeId = req.params.collegeId
   

    if ((collegeData && Object.keys(collegeData).length > 0) && collegeId > 0) {
        const data = collegeHelper.updateCollegeById(collegeData,collegeId)

        if (data == "college data successfully updated") {
           return  res.status(201).json({
                status: "data update successfully",
                result: collegeData
            })

        }
        else {
           return res.status(401).json({
                status: "data not updated"
            })
        }
    }

    else {
         console.log('hellow')
      return  res.status(401).json({
            status: "college data empty or collegeId empty",
            remdy : "check the college data or collegeId"
           
        })
    }

}catch(err){
    console.log(err,err.message)
    return res.status(505).json({
        error : "internal error",
        desc : err.message

    })
}
}


const updateColleges = (req, res) => {

}


const deleteCollegeById = (req,res)=>{

}


const deleteColleges = (req,res)=>{

}





module.exports = {
    createCollege,
    getCollegebyId,
    getColleges,
    updateCollegeById,
    updateColleges,
    deleteCollegeById,
    deleteColleges

}