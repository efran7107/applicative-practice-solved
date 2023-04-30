/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
    let numOfPeople = array.length;
    if (numOfPeople == 0) {
        return undefined;
    }
    let min = cb(array[0]);
    for (let el of array) {
        if (cb(el) < min) {
            min = cb(el);
        }
    }
    let minPerson = array.find(person => cb(person) === min);
    return minPerson;
}

export function maxBy(array, cb) {
    if (array.length === 0) {
        return undefined;
    }
    let max = cb(array[0]);
    for (let el of array) {
        if (cb(el) > max) {
            max = cb(el);
        }
    }
    let maxPerson = array.find(person => cb(person) === max);
    return maxPerson;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function