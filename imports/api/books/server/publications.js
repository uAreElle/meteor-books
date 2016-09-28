import { Meteor } from 'meteor/meteor';
import { Books } from '/imports/api/books/books.js';

Meteor.publish('books.all', function () {
           return Books.find({});
});