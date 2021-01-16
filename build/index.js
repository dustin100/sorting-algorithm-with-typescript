"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 34, 1, 9, 99]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Strings
var charactersCollection = new CharactersCollection_1.CharactersCollection('XaaBFdsa');
charactersCollection.sort();
console.log(charactersCollection);
// Linked List
var linkList = new LinkedList_1.LinkedList();
linkList.add(500);
linkList.add(-10);
linkList.add(20);
linkList.add(55);
linkList.add(98);
linkList.sort();
linkList.print();
