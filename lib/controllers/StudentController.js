const Reader=require("./../utils/Reader.js");
const StudentService=require("./../services/StudentService.js");

class StudentController{
    static getAllStudents(){
        const students=Reader.readJsonFile("visualpartners.json");
        return students;
    }

    static getStudentsEmailsWithCertification(){
        const students=StudentController.getAllStudents();
        const studentsWithCertification=StudentService.getStudentsEmailsWithCertification(students);
        return studentsWithCertification;
    }

    static getStudentsWithCreditsOver500(){
        const students=StudentController.getAllStudents();
        const studentsWithCreditsOver500=StudentService.getStudentsWithCreditsOver500(students);
        return studentsWithCreditsOver500;
    }
}

module.exports=StudentController;