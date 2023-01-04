module.exports = function toReadable(number) {

    let str = '';
    let num = '' + number;
    // let num1 = '' + Math.floor(number / 100);
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (num.length == 1) {
        str = ones[num[0]];
    } else if (num.length == 2) {
        if (num[0] == '1') {
            if (num[1] == '1') {
                str = 'eleven';
            } else if (num[1] == '2') {
                str = 'twelve';
            } else if (num[1] == '3') {
                str = 'thirteen';
            } else if (num[1] == '4') {
                str = 'fourteen';
            } else if (num[1] == '5') {
                str = 'fifteen';
            } else if (num[1] == '6') {
                str = 'sixteen';
            } else if (num[1] == '7') {
                str = 'seventeen';
            } else if (num[1] == '8') {
                str = 'eighteen';
            } else if (num[1] == '9') {
                str = 'nineteen';
            } else if (num[1] == '0') {
                str = 'ten';;
            }
        } else if (num[1] == '0') {
            str = tens[num[0]];
        } else {
            str = tens[num[0]] + ' ' + ones[num[1]];
        }
    } else if (num.length == 3) {
        if (num[1] == '0' && num[2] == '0') {
            str = ones[num[0]] + ' hundred';
        } else if (num[1] == '0' && num[2] != '0') {
            str = ones[num[0]] + ' hundred ' + ones[num[2]];
        } else if (num[1] != '0' && num[2] == '0') {
            str = ones[num[0]] + ' hundred ' + tens[num[1]];
        } else if (num[1] == '1' && num[2] != '0') {
            if (num[2] == '1') {
                str = ones[num[0]] + ' hundred ' + 'eleven';
            } else if (num[2] == '2') {
                str = ones[num[0]] + ' hundred ' + 'twelve';
            } else if (num[2] == '3') {
                str = ones[num[0]] + ' hundred ' + 'thirteen';
            } else if (num[2] == '4') {
                str = ones[num[0]] + ' hundred ' + 'fourteen';
            } else if (num[2] == '5') {
                str = ones[num[0]] + ' hundred ' + 'fifteen';
            } else if (num[2] == '6') {
                str = ones[num[0]] + ' hundred ' + 'sixteen';
            } else if (num[2] == '7') {
                str = ones[num[0]] + ' hundred ' + 'seventeen';
            } else if (num[2] == '8') {
                str = ones[num[0]] + ' hundred ' + 'eighteen';
            } else if (num[2] == '9') {
                str = ones[num[0]] + ' hundred ' + 'nineteen';
            }
        } else {
            str = ones[num[0]] + ' hundred ' + tens[num[1]] + ' ' + ones[num[2]];
        }
    }

    return str;

}