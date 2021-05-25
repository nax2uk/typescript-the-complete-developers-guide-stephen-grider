"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
matchReader.matches.forEach(function (match) {
    if (match[1] == 'Man United' && match[5] == MatchResult_1.MatchResult.HomeWin)
        manUnitedWins++;
    else if (match[2] == 'Man United' && match[5] == MatchResult_1.MatchResult.AwayWin)
        manUnitedWins++;
});
console.log("Man United won " + manUnitedWins + " matches");
