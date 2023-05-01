/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {

    let yearMostDescoveries = data.asteroids.map(function(asteroids) {
        return asteroids.discoveryYear;
    })

    yearMostDescoveries.sort();

    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < yearMostDescoveries.length; i++) {
        for (let j = i; j < yearMostDescoveries.length; j++) {
            if (yearMostDescoveries[i] == yearMostDescoveries[j])
                m++;
            if (mf < m) {
                mf = m;
                item = yearMostDescoveries[i];
            }
        }
        m = 0;
    }

    return item;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function