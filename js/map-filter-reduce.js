
// 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.✅

// 2. Use .map to create an array of strings where each element is a user's email address✅

// 3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.✅

// 4. Use .reduce to get the longest email from the list of users.

// 5. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.✅


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: ' luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: ' zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: ' fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: ' justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let lang = users.filter((users) => users.languages.length >= 3);
console.log(lang);

let contact = users.map((users) => users.email);
console.log(contact);

let totalYears = users.reduce((years, user) => {
    return years + user.yearsOfExperience;
}, 0);

let avg = totalYears / users.length;

console.log(totalYears);
console.log(avg);

let longEmail = users.reduce((longest, users) => {
    if (users.email.length > longest.length) {
        return users.email;
            } else {
                return longest;
}
    }, "");

console.log(longEmail);

let instructors = users.reduce((instructorGreet, users) =>{
    return instructorGreet.concat(users.name)
},[]);
console.log(`Your instructors are: ${instructors}`);