const StudentService=require("./../../lib/services/StudentService.js")
const Reader=require("./../../lib/utils/Reader.js")

describe("Test para StudentService",()=>{
    test("2. Consultar los emails de todos los estudiantes que tengan certificación haveCertification",()=>{
        const students=Reader.readJsonFile("./test/data/visualpartners_1.json")
        const studentsEmailsWithCertification=StudentService.getStudentsEmailsWithCertification(students)
        expect(studentsEmailsWithCertification.length).toBe(29)
    });
});