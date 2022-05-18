const moment = require("moment");

const showDateTime = {
  showToday: function () {
    return moment().format("YYYYMMDD");
  },
};

module.exports = showDateTime;
