class StudentService{
    static getStudentsEmailsWithCertification(students){
        const studentsWithCertification=students.filter((student)=>student.haveCertification==true)
        return studentsWithCertification.map((student) => student.email);
    }
}

module.exports=StudentService;