module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
    let stack = [];
    let openingSymbols = [];
    let closingSymbols = [];
    for (let i of bracketsConfig) {
      openingSymbols.push(i[0]);
      closingSymbols.push(i[1]);
    }
    for (let bracket of arr) {
        let openIndex = openingSymbols.indexOf(bracket);
        let closeIndex = closingSymbols.indexOf(bracket);
        if (openIndex !== -1) {
            stack.push(openIndex);
            continue;
        }
        else if (closeIndex !== -1) {
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
