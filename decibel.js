let silence = (Math.floor(Math.random() * 100));

console.log(silence + ' decibels');
//making a decibel meter

const decibelReader = () => {
    if(silence < 40){
    return console.log('silence is golden');    
}
    return console.log('bring the noise')

}
decibelReader();
