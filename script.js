// create arrays
const horoscopeSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const luck = ['good luck', 'bad luck'];
const action = ['trust no one', 'spend more time outside', 'avoid people', 'make some friends'];

// select random index
const horoscopeSignsIndex = Math.floor(Math.random() * horoscopeSigns.length);
const luckIndex = Math.floor(Math.random() * luck.length);
const actionIndex = Math.floor(Math.random() * action.length);

// print formatted message
const printMessage = () => {
    console.log(`Your sign is ${horoscopeSigns[horoscopeSignsIndex]}.`);
    console.log(`You are having ${luck[luckIndex]}.`);
    console.log(`You should ${action[actionIndex]}.`);
}
                    
printMessage();