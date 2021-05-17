const moment = require('moment');

const getDate = function (deadline) {
    
    var date = moment(new Date(deadline.replace('th','').replace('st','').replace('st','').replace('rd','').replace('nd','')));
    if(!date.isValid())
        return null;
    return date.format('YYYY-MM-DD');
};

module.exports = getDate;