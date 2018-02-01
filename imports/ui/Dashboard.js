import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import PrivateHeader from './PrivateHeader';


//presentational component with no props
export default () => {

    return (
        <div>
            <PrivateHeader title="Dashboard" />
            <div className="page-content">
                Dashboard Page Content
            </div>
        </div>
    );
}

