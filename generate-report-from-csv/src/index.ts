import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;
reader.data.forEach(match => {
  if (match[1] == 'Man United' && match[5] == 'H') manUnitedWins ++;
  else if (match[2] == 'Man United' && match[5] == 'A') manUnitedWins++;
});

console.log(`Man United won ${manUnitedWins} matches`);