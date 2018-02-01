import { Meteor } from 'meteor/meteor';
//to attach middleware
import { WebApp } from 'meteor/webapp';
//executes at load
import '../imports/api/users';

import '../imports/startup/simple-schema-config';

Meteor.startup(() => {
    
});
