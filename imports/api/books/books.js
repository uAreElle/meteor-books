// /imports/api/books/books.js

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import faker from 'faker';

// Defining server side collection, export as const 

export const Books = new Mongo.Collection('books');

// Defining schema 

Books.schema = new SimpleSchema({
	title: { type: String },
	author: { type: String },
	genre: { type: String },
	year: { type: Number },
})

// Not sure where to put from step 9 so pasted here
/* const book = {
        author: `${faker.name.firstName()}
      ${faker.name.firstName()}`,
        title: `${faker.lorem.words()}`,
        genre: `${faker.lorem.words()}`,
        year: faker.random.number(),
}; */

// Not asked to validate so commented out
// Books.schema.validate(book);

// Attaching schema 

Books.attachSchema(Books.schema);