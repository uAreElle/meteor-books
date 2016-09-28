
import { insertBook } from '/imports/api/books/methods.js';
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

Template.bookList.events({
    // changed to btn for testing purposes
    'click btn'() { //'click #js­insert­book'() {

        console.log("You clicked something");
        insertBook.call(book);


    }, 
});