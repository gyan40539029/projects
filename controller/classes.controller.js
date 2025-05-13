
const classHelper = require('../helpers/classes.helpers')
const createClass = (req, res) => {
    try {
        const claas = req.body
        
        if (claas?.classId) {

            const class_rcd = classHelper.createClass(claas)

            if (class_rcd === "class not created") {
                return res.status(401).json({
                    status: "already exhisting college on this id",
                    result: class_rcd

                })

            }

            else {

                return res.status(201).json({
                    status: "new class added successfully",
                    result: class_rcd

                })

            }

        }
        else {
            return res.status(404).json({
                status: "error",
                desc: "please enter the class id"
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

const getClassById = (req, res) => {
    try {
        const classId = req.params.classId //// need to  change query to param
        const classRecord = classHelper.getClassbyId(classId)
       
        if (classId > 0) {
          
            
            if (classRecord === "class data not fetch") {
                return res.status(401).json({
                    status: "error",
                    result: classRecord
                })
            }
            else {
                return res.status(201).json({
                    status: "class data fetch successfully",
                    result: classRecord
                })
            }
        } else {
            console.log('hellow brother')
            return res.status(501).json({
                status: "missing field input",
                remdy: "please enter the classId"
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

const getClasses = (req, res) => {                     /// daat come in query

}

const updateClassById = (req, res) => {   /// update college by id  need to change  and neet to param for id
    try{
    const classData = req.body
    const classId = req.params.classId
   

    if ((classData && Object.keys(classData).length > 0) && classId > 0) {
        const data = classHelper.updateClassById(classData,classId)

        if (data == "class data successfully updated") {
           return  res.status(201).json({
                status: " class data update successfully",
                result: classData
            })

        }
        else {
           return res.status(401).json({
                status: "class data not updated"
            })
        }
    }

    else {
         console.log('hellow')
      return  res.status(401).json({
            status: "class data empty or classId empty",
            remdy : "check the class data or classId"
           
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


const updateClasses = (req, res) => {

}


const deleteClassById = (req,res)=>{

}


const deleteClasses = (req,res)=>{

}





module.exports = {
    createClass,
    getClassById,
    getClasses,
    updateClassById,
    updateClasses,
    deleteClassById,
    deleteClasses

}