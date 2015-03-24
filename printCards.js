//The function calculates and prints at the console the frequency of each card face in format "card_face -> frequency". 
//The frequency is calculated by the formula appearances / N and is expressed in percentages with exactly 2 digits after the decimal point. 
//The card faces with their frequency should be printed in the order of the card face's first appearance in the input. 
//The same card can appear multiple times in the input, but its face should be listed only once in the output. 

function findCardFrequency(str) {
    //Remove empty spaces,zeros and split to array.
    var r = /[^\b\w\)]/gi;
    var r2 = /0/g;
    var isolateSpaces = str.replace(r, '');
    var noZero = isolateSpaces.replace(r2, '')
    var arr = noZero.split('')
    var percentage = 0;
    //...............................................
    //Filling up objects in "arrObjects"
    var arrObjects = [{},{},{},{},{},{},{},{},{},{},{},{},{}]
    var two = 0, three = 0, four = 0, five = 0, six = 0, seven = 0; eight = 0, nine = 0, one = 0; jack = 0; queen = 0; king = 0; ace = 0;
    arr.forEach(function (element, index) {
        switch (element) {
            case "2": arrObjects[0]["prop"] = element; arrObjects[0]["count"] = ++two; break;
            case "3": arrObjects[1]["prop"] = element; arrObjects[1]["count"] = ++three; break;
            case "4": arrObjects[2]["prop"] = element; arrObjects[2]["count"] = ++four; break;
            case "5": arrObjects[3]["prop"] = element; arrObjects[3]["count"] = ++five; break;
            case "6": arrObjects[4]["prop"] = element; arrObjects[4]["count"] = ++six; break;
            case "7": arrObjects[5]["prop"] = element; arrObjects[5]["count"] = ++seven; break;
            case "8": arrObjects[6]["prop"] = element; arrObjects[6]["count"] = ++eight; break;
            case "9": arrObjects[7]["prop"] = element; arrObjects[7]["count"] = ++nine; break;
            case "1": arrObjects[8]["prop"] = element; arrObjects[8]["count"] = ++one; break;
            case "J": arrObjects[9]["prop"] = element; arrObjects[9]["count"] = ++jack; break;
            case "Q": arrObjects[10]["prop"] = element; arrObjects[10]["count"] = ++queen; break;
            case "K": arrObjects[11]["prop"] = element; arrObjects[11]["count"] = ++king; break;
            case "A": arrObjects[12]["prop"] = element; arrObjects[12]["count"] = ++ace; break;
            default: console.log("Error in source code or invalid input"); break
        }
    });
    //......................................................
    //Synchronize arr and arrObjects indexes for print order;
    var arrIndexFixerForPrint = []
    for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < arrObjects.length; k++) {
            if (arr[i] === arrObjects[k].prop) {
                arrIndexFixerForPrint[i] = arrObjects[k];
                arrObjects.splice(k, 1);
            }
        }
    }
    //...................................................
    // Just calculate percentages
    for (var i = 0; i < arrIndexFixerForPrint.length; i++) {
        percentage = arrIndexFixerForPrint[i].count;
        if (percentage == undefined) {
            continue;
        }
        percentage = (percentage / arr.length) * 100;
        var decimalFix = percentage.toFixed(2);
    //....................................................
    //Print    
        if (arrIndexFixerForPrint[i].prop === "1") {
            console.log("10" + "->" + decimalFix + "%")
        }
        else {
            console.log(arrIndexFixerForPrint[i].prop + "->" + decimalFix + "%");
        }
    }
    console.log("---------")
    //...................................................
}
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');
