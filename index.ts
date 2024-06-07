// Number Types mini-challenge 10 10.2 (takes full intergers/floats)
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number (syntax to set number parameter)
const reviewTotalDisplay = document.querySelector('#reviews')
const userNameDisplay = document.querySelector('#user')
const returningUserDisplay = document.querySelector('#returning-user')

let isOpen : boolean

const reviews = [
    {
        name: 'Sheia', 
        stars: 5, //integer
        loyaltyUser: true, //boolean
        date: '01-04-2021' //string
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// Function to display total number of reviews
function showReviewTotal (value : number, reviewer: string, isLoyalty : boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)


const you = {
    userName: 'Bobby',
    isReturning: true,
}

function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}
populateUser(you.isReturning, you.userName)