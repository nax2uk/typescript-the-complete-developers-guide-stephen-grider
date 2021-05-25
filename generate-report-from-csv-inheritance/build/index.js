"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var manUnitedWins = 0;
reader.data.forEach(function (match) {
    if (match[1] == 'Man United' && match[5] == MatchResult_1.MatchResult.HomeWin)
        manUnitedWins++;
    else if (match[2] == 'Man United' && match[5] == MatchResult_1.MatchResult.AwayWin)
        manUnitedWins++;
});
console.log("Man United won " + manUnitedWins + " matches");
