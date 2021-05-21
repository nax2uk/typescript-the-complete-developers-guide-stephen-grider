"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var manUnitedWins = 0;
reader.data.forEach(function (match) {
    if (match[1] == 'Man United' && match[5] == 'H')
        manUnitedWins++;
    else if (match[2] == 'Man United' && match[5] == 'A')
        manUnitedWins++;
});
console.log("Man United won " + manUnitedWins + " matches");
