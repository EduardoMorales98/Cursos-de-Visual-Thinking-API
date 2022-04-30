const StudentController=require("./../../lib/controllers/StudentController.js");
describe("Test para StudentController",()=>{
    test("1. Obtener todos los estudiantes con todos sus campos",()=>{
        const allStudents=StudentController.getAllStudents();
        expect(allStudents.length).toBe(51);
    });

    test("2. Consultar los emails de todos los estudiantes que tengan certificación haveCertification",()=>{
        const studentsWithCertification=StudentController.getStudentsEmailsWithCertification();
        expect(studentsWithCertification.length).toBe(29);
    });

    test("3. Consultar todos los estudiantes que tengan credits mayor a 500",()=>{
        const studentsWithCreditsOver500=StudentController.getStudentsWithCreditsOver500();
        expect(studentsWithCreditsOver500.length).toBe(27);
    });
});