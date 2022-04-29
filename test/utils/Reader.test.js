const Reader=require("./../../lib/utils/Reader.js");

describe("Test para Reader",()=>{
    test("Lectura de datos",()=>{
        const visualpartners=Reader.readJsonFile("visualpartners.json")
        expect(visualpartners.length).toBe(50);

    });
});