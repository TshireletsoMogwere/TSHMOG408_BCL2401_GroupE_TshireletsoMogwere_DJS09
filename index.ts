// Number Types mini-challenge 10 10.2 (takes full intergers/floats)
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number (syntax to set number parameter)

const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

import { LoyaltyUser } from './enums.ts'

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}


function add(firstValue : (number | string), secondValue: (number | string)) {
    let result
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
        result = firstValue + secondValue
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
        result = firstValue + ' ' + secondValue
    }
    if (typeof firstValue === 'number' && typeof secondValue === 'string') {
        console.log('cannot perform this addition')
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'number') {
        console.log('cannot perform this addition')
    }
}