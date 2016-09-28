// /imports/api/books/methods.js

import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Books } from './books.js';
export const insertBook = new ValidatedMethod({
    name: 'books.insert',
    validate: Books.schema.validator(),

    run({ title, author, genre, year }) {
    // call insert method on Books collection
    // and return result (id of newly inserted book)
    // or throw error if bad args passed

    //const title = Books.findOne(titleId);

    /* if (book.isPrivate() && title.userId !== this.userId) {
      throw new Meteor.Error('books.insert.accessDenied',
        'Cannot add books to a private list that is not yours');
    }*/

    const book = {
      title,
      author,
      genre,
      year,
      checked: false,
      createdAt: new Date(),
    }
    // insert new book into Books collection
    Books.insert(book);
    
    }
});