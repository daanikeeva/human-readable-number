module.exports = function toReadable (number) {
        const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const firstTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
          const strArr = [];
          const numArr = String(number).split('').reverse();
          for (i = 0; i < numArr.length; i++) {
             if (number == 0) {
              strArr.unshift('zero')
             }        
             else if (i == 0) {
                strArr.unshift(units[numArr[i]])
             }
             else if (i == 1 && numArr[i] == 1) {
              strArr.pop();
              strArr.unshift(firstTen[numArr[0]])
             }
             else if (i == 1 && numArr[i] > 1) {
              strArr.unshift(tens[numArr[i]])
             }
             else if (i == 2) {
              strArr.unshift('hundred');
              strArr.unshift(units[numArr[i]])
             }
           }
           const strFilter = strArr.filter(Boolean)
           return strFilter.join(' ')
}
