'use strict';

const ReactDOM = require('react-dom');

const Routes = require('./routes');

function getResumePath() {
    return '/public/resume.json';
}

function getNavigation() {
    return {
        home: 'Home',
        about: 'About',
        work: 'Work',
        talks: 'Talks',
        education: 'Education'
    };
}

ReactDOM.render(
    Routes.get({
        resumePath: getResumePath(),
        navigation: getNavigation()
    }),
    document.getElementById('app')
);
