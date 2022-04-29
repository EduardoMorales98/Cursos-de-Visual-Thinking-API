const Reader=require("./../utils/Reader.js");

class StudentController{
    static getAllStudents(){
        const students=Reader.readJsonFile("visualpartners.json");
        return students
    }
}

module.exports=StudentController;