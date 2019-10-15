function validator(ccNumber) {
    let ccString = ccNumber.toString();
    // length must be 16
    if (ccString.length < 16 || ccString.length > 16) {
        console.log(`Credit Card No. length is incorrect. Length is ${ccString.length}`);
    }
    
    // test length is 16
    
    // test any non digits are present:
    let result = /\D/g.test(ccString);
    if (result === false) {
        console.log("Test for any non-digits: " +result);
        console.log('The CC Number contains only digits');
    }

    // if one number occurs 16 times, there is only one number.
    // there must be at least 2.

    // Explanation for the below regex
    // We take the first digit and store in group 1: /^(\d)
    // Then backreference with \1{15}$/
    let multipleDigits =/^(\d)\1{15}$/.test(ccString);
    if (multipleDigits === false) {
        console.log('The CC Number has more than one digit.');
        //console.log('More than one digit? ' + !multipleDigits);
    }

    // Test if the final digit is even
    let endRegex = /\d$/;
    const lastDigit = parseInt(endRegex.exec(ccString));
    console.log(lastDigit);

    
    




    // the sum of all digits must be > 16
    /*for (var i = 0; i < ccNumber.length; i++) {
        let sum = 0;
        sum = sum + ccNumber[i];
        console.log(sum);
    }*/
}

//validator(1111111111111111);
validator(1111211111111111);
//validator('143904819');