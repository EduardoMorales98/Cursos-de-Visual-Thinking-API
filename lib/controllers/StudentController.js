const Reader=require("./../utils/Reader.js");
const StudentService=require("./../services/StudentService.js");

class StudentController{
    static getAllStudents(){
        const students=Reader.readJsonFile("visualpartners.json");
        return students
    }

    static getStudentsEmailsWithCertification(){
        const students=StudentController.getAllStudents()
        const studentsWithCertification=StudentService.getStudentsEmailsWithCertification(students);
        return studentsWithCertification;
    }
}

module.exports=StudentController;