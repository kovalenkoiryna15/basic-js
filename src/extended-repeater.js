module.exports = function repeater(str, options) {
  let string = String(str);
  // let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  let result = [];
  if (typeof options.separator == 'undefined') {
    options.separator = '+';
  };
  if (typeof options.additionSeparator == 'undefined') {
    options.additionSeparator = '|';
  };
  if (typeof options.repeatTimes == 'undefined') {
    options.repeatTimes = 1;
  };
  if (typeof options.additionRepeatTimes == 'undefined') {
    options.additionRepeatTimes = 1;
  };

  for (let i = 0; i < options.repeatTimes; i++) {
    let resultPart = [];
    let additionResult = [];

    resultPart.push(string);

    if (typeof options.addition != 'undefined') {
      let additionString = String(options.addition);
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        additionResult.push(additionString);        
      };
      let additionResultString = additionResult.join(options.additionSeparator);
      resultPart.push(additionResultString);
    };    
    let resultPartString = resultPart.join('');
    result.push(resultPartString);
  };

  let resultString = result.join(options.separator);  
  return resultString;
};
  