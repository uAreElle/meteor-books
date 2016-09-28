// /imports/api/books/books.js

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Defining server side collection 

Books = new Mongo.Collection('Books');

// Defining schema 

Books.schema = new SimpleSchema({
	title: { type: String },
	author: { type: String },
	genre: { type: String },
	year: { type: Number },
})

// Attaching schema 

Books.attachSchema(Books.schema);