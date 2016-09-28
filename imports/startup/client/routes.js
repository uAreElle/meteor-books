// /imports/startup/client/routes.js


// /imports/startup/client/index.js
import './routes.js';
// /imports/startup/client/index.js
import { Router } from 'meteor/iron:router';

import '/imports/ui/bookList/bookList.js';

Router.route('/', {
	name: 'home',
	action: function () {
			this.render('bookList');
	},
});