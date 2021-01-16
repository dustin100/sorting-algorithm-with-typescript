import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 34, 1, 9, 99]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Strings
const charactersCollection = new CharactersCollection('XaaBFdsa');
charactersCollection.sort();
console.log(charactersCollection);



// Linked List
const linkList = new LinkedList();
linkList.add(500);
linkList.add(-10);
linkList.add(20);
linkList.add(55);
linkList.add(98);

linkList.sort();
linkList.print();
