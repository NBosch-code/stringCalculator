const calculator = require ('./adder');

describe("Adding a string calculator",()=>{

    it("should return 0 when '' is given",()=>{
        expect(calculator('')).toEqual(0);
    });
    it("should return 1 when '1' is given",()=>{
        expect(calculator('1')).toEqual(1);
    });
    it("should return 3 when '1,2' is given",()=>{
        expect(calculator('1,2')).toEqual(3);
    });
    it("should return 10 when '1,2,3,4' is given",()=>{
        expect(calculator('1,2,3,4')).toEqual(10);
    });
    
    it("should return 6 when '1\\n2,3' is given",()=>{
        expect(calculator('1\n2,3')).toEqual(6);
    });

    it("should handle different delimiters",()=>{
        expect(calculator('//;1\n2;3')).toEqual(6);
    });
    it("should throw an error for negative numbers",()=>{
        expect(function(){calculator('1,-2,3')}).toThrow("this number: '-2' is not allowed");
    });
    it("should ignore numbers greater than 1000",()=>{
        expect(calculator('1,1001,2,`1002,3')).toEqual(6);
    });
    it("should handle delimiters of any length",()=>{
        expect(calculator('//[***]\n1***2***3')).toEqual(6);
    });
    it("should handle multiple delimiters",()=>{
        expect(calculator('//[*][%]\n1*2%3')).toEqual(6);
    });
    it("should handle multiple delimiters",()=>{
        expect(calculator('//[***][%%%]\n1*2%3')).toEqual(6);
    });
    
})
