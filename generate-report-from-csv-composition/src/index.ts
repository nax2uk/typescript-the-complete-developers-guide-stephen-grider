import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;
matchReader.matches.forEach(match => {
  if (match[1] == 'Man United' && match[5] == MatchResult.HomeWin) manUnitedWins ++;
  else if (match[2] == 'Man United' && match[5] == MatchResult.AwayWin) manUnitedWins++;
});

console.log(`Man United won ${manUnitedWins} matches`);