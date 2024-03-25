"use strict";
function printYardSize(house) {
    var _a;
    const yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    }
    else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}
let home = {
    sqft: 500,
};
printYardSize(home);
