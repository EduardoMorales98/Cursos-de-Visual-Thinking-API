const Reader=require("./../../lib/utils/Reader.js");

describe("Test para Reader",()=>{
    test("Lectura de datos",()=>{
        const visualpartners=Reader.readJsonFile("./test/data/visualpartners_1.json");
        expect(visualpartners.length).toBe(51);

    });
});