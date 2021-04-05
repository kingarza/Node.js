const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35]
console.log(people)

// We export what we want to return
// We want to return people and ages in this case
module.exports = {
    people: people,
    ages: ages,
}