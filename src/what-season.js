module.exports = function getSeason(date) {
  if (typeof date == 'undefined') {
    return 'Unable to determine the time of year!';
  } else if (typeof date !== 'object' || date == null || date instanceof Date !== true) {
    throw Error; 
  } else {
    let options = {
      month: 'numeric',
    };
    let month = date.toLocaleString("en-US", options);
    console.log(month);
    let times = {
      1: "winter",
      2: "winter",
      3: 'spring',
      4: 'spring',
      5: 'spring',
      6: 'summer',
      7: 'summer',
      8: 'summer',
      9: 'fall',
      10: 'fall',
      11: 'fall',
      12: "winter",
    };
    return times[month];
  }
};
