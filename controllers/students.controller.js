const Student = require("../models/Student.model.js");
module.exports.studentsController = {
  getStudents:(req,res) =>{
    Student.find({}).then((data) => {
      res.json(data)
    })
  },
  createStudent: (req, res) => {
    const { name, phone, age } = req.body;
    Student.create({
      name,
      phone,
      age,
    }).then(() => {
      res.json("Студент добавлен");
    });
  },

  deleteStudents: (req, res) => {
    Student.findByIdAndRemove(req.params.id).then(()=>
    res.json('Cтудент удален')
    )
  },
  patchStudents: (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body).then(() =>{
      res.json("Студент изменен");
    })
  },
};