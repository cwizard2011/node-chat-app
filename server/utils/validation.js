const isRealString = (str) => {
  return typeof str === 'string'.toLowerCase() && str.trim().length > 0;
}

module.exports = {isRealString};