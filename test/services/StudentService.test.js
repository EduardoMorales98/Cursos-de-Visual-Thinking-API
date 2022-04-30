const StudentService=require("./../../lib/services/StudentService.js")
const Reader=require("./../../lib/utils/Reader.js")

describe("Test para StudentService",()=>{
    test("2. Consultar los emails de todos los estudiantes que tengan certificación haveCertification",()=>{
        const students=Reader.readJsonFile("./test/data/visualpartners_1.json")
        const studentsEmailsWithCertification=StudentService.getStudentsEmailsWithCertification(students)
        expect(studentsEmailsWithCertification.length).toBe(29)
    });

    test("3. Consultar todos los estudiantes que tengan credits mayor a 500",()=>{
        const students=Reader.readJsonFile("./test/data/visualpartners_1.json")
        const studentsWithCreditsOver500=StudentService.getStudentsWithCreditsOver500(students)
        expect(studentsWithCreditsOver500.length).toBe(29)
    });
});