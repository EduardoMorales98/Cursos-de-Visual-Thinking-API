const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Cursos de Visual Thinking API welcome!"});
});

app.get("/v1/students", (request, response) => {
    const allStudents=StudentController.getAllStudents();
    response.json(allStudents);
});

app.get("/v1/students/emails", (request, response) => {
    const studentsWithCertification=StudentController.getStudentsEmailsWithCertification();
    response.json({haveCertification: studentsWithCertification});
});

app.get("/v1/students/credits", (request, response) => {
    const studentsWithCreditsOver500=StudentController.getStudentsWithCreditsOver500();
    response.json({credits : studentsWithCreditsOver500});
});

app.listen(port, () => {
    console.log(`Cursos de Visual Thinking  API in localhost:${port}`);
});