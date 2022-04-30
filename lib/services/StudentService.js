class StudentService{
    static getStudentsEmailsWithCertification(students){
        const studentsWithCertification=students.filter((student)=>student.haveCertification==true);
        return studentsWithCertification.map((student) => student.email);
    }

    static getStudentsWithCreditsOver500(students){
        return students.filter((student)=>student.credits>500);
    }
}

module.exports=StudentService;