"use strict";
// enum
// numeric enum
// enum Month {
//   JAN = 1,
//   FEB,
//   MAR,
//   APR,
//   MAY,
// }
// console.log(Month);
// string enum
var Month;
(function (Month) {
    Month["JAN"] = "January";
    Month["FEB"] = "February";
    Month["MAR"] = "March";
    Month["APR"] = "April";
    Month["MAY"] = "May";
})(Month || (Month = {}));
console.log(Month.FEB);
