if (typeof global.Intl === 'undefined'){
    global.Intl = require('intl');
}
require('intl-pluralrules')

global.IntlRelativeFormat = require('../');
global.expect = require('chai').expect;

require('./index');
