const courseSchema =require('../model/courses.model')


// adding new trainig
exports.addNewTrainig =async (req, res) => {
    const {title, day, duration, intencity, image} = req.body;
    try {
    const find = await courseSchema.findOne({title:title});
    if (find){
    res.status(400).send({msg:"this course already exist"})
    }
    const training = new courseSchema(req.body)
    await training.save();
    res.status(200).send({msg: 'added successfully'})
    } catch (error) {
    }
    }

  
exports.displayTrainings =  async (req,res)=>{
    try {
       const Training =  await courseSchema.find();
        res.status(200).send({msg:"list",Training});
    } catch (error) {
        res.status(500).send({msg:"could not list"})
    }
}
exports.deleteTraining= async(req, res)=> {
    const {ID} = req.params
    try {
    const removedtraining = await courseSchema.findByIdAndDelete(ID)
    res.status(200).send({msg:'successfully removed training', removedtraining})
    } catch (error) {
    res.status(500).send({msg:'cannot be removed', error}) 
    }
    }