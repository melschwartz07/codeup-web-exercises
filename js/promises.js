// TODO: Generate a Personal Access Token for the GitHub API.
//  We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
//  fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
//  Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.
//  Reference the github api documentation to achieve this.

const lastPush = (user) => {
    fetch('https://api.github.com' , {headers: {'Authorization': 'token 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'}})
        .then(res =>  res.json())
        .then(data => {
            console.log(data);
            document.getElementById('userPush').innerHTML = user;
            document.getElementById('user').innerHTML = `<li>User: Melanie Schwartz</li>`;
            document.getElementById('user').innerHTML += `<li>Username: melschwartz07</li>`;


});
    };

lastPush("melschwartz07");




// TODO: Create Your Own Promise
//  Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//  wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//  wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//  1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

function wait(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve();
        }, num)
    });
}

wait(1000).then(() => console.log('1 second'));
wait(3000).then(() => console.log('3 seconds'));