const StudentController=require("./../../lib/controllers/StudentController.js");
describe("Test para StudentController",()=>{
    test("1. Obtener todos los estudiantes con todos sus campos",()=>{
        const allStudents=StudentController.getAllStudents();
        expect(allStudents.length).toBe(51);
    });
});