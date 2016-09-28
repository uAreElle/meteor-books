import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Books } from '/imports/api/books/books.js';
import './bookList.html';

Template.bookList.onCreated(function () {
  this.autorun(() => {
      this.subscribe('books.all');
  });
});
     
Template.bookList.helpers({
  books() {
      return Books.find({});
  },
});