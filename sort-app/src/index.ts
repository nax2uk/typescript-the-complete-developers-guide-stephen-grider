import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection} from './CharactersCollection';

const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection('aIohiojiHDN');
const characterSorter = new Sorter(charactersCollection)
characterSorter.sort();
console.log(charactersCollection.data);
