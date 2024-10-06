function analyzeVoterData(voters) {
    return voters.reduce((stats, { age, voted }) => {
        if (age >= 18 && age <= 25) {
            stats.numYoungPeople++;
            if (voted) stats.numYoungVoters++;
        } else if (age >= 26 && age <= 35) {
            stats.numMiddleAgedPeople++;
            if (voted) stats.numMiddleAgedVoters++;
        } else if (age >= 36) {
            stats.numOldPeople++;
            if (voted) stats.numOldVoters++;
        }
        return stats;
    }, {
        numYoungVoters: 0,
        numYoungPeople: 0,
        numMiddleAgedVoters: 0,
        numMiddleAgedPeople: 0,
        numOldVoters: 0,
        numOldPeople: 0
    });
}

// Example usage:
const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 28, voted: true },
    { name: "Zack", age: 19, voted: false }
];

console.log(analyzeVoterData(voters));
// Output:
// {
//   numYoungVoters: 1,
//   numYoungPeople: 4,
//   numMiddleAgedVoters: 3,
//   numMiddleAgedPeople: 4,
//   numOldVoters: 3,
//   numOldPeople: 4
// }
