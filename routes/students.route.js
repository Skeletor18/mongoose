const {Router} = require('express')
const {studentsController} = require('../controllers/students.controller.js')
const router = Router()
router.get('/students', studentsController.getStudents)
router.post('/students', studentsController.createStudent)
router.delete('/students/:id', studentsController.deleteStudents)
router.patch('/students/:id', studentsController.patchStudents)

module.exports = router