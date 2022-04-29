const StudentService=require("./../../lib/services/StudentService.js");

describe("Test para StudentService",()=>{
    test("1. Consultar los emails de todos los estudiantes que tengan certificación haveCertification",()=>{
        const students=Reader.readJsonFile("./test/data/visualpartners_1.json")
        const studentEmailsWithCertification=StudentService.getStudentsEmailsWithCertification(students);
        expect(studentEmailsWithCertification.length).toBe(51);
    });
});