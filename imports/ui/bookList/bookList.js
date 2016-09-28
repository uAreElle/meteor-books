
import { insertBook } from '/imports/api/books/methods.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Books } from '/imports/api/books/books.js';
import './bookList.html';
import faker from 'faker';

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

    'click #js-insert-book'() { 

        const book = {
          author: `${faker.name.firstName()}
${faker.name.firstName()}`,
        title: `${faker.lorem.words()}`,
        genre: `${faker.lorem.words()}`,
        year: faker.random.number(),

        };

        console.log("You clicked something");
        insertBook.call(book);


    }, 
});