function telephoneCheck(str) {
  var regexp = /^(1\s)?(\(\d{3}\)|\d{3})[\s\-?]?\d{3}[\s\-?]?\d{4}$/;
  return regexp.test(str);
}

//^(1\s)?--country code
//(\(\d{3}\)|\d{3})--first 3 digits and/or parentheses
//[\s\-?]?\d{3}[\s\-?]?--second 3 digits and dash/space
//\d{4}--last 4 digits


console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("2555-555-5555"));
console.log(telephoneCheck("555-5555-5555"));