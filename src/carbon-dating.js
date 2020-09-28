const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == "string" && typeof Number(sampleActivity) == "number" ) {
    
    if (Number(parseFloat(sampleActivity, 10)) > 0) {
      
      if (Number(parseFloat(sampleActivity, 10)) < 15) {
        let k = 0.693 / HALF_LIFE_PERIOD;
        let number = Math.log(MODERN_ACTIVITY / Number(parseFloat(sampleActivity, 10))) / k;
        
        if (Number.isNaN(number)) {
          return false;
        } else {
          return Math.ceil(number);
        };

      }else {
        return false;
      };

    } else {
      return false;
    };
      
  } else {
    return false;
  };
};
