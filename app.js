function getPin(){
const pin=generatePin();
const pinString=pin+'';

if(pinString.length===4){
return pin;
}
else{
    // console.log('The 3 digit pin is not allowed');
    return getPin();
}
}

function generatePin(){
const random=Math.round(Math.random()*10000);
return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin=getPin();
    // console.log(pin);

    // display-pin
  const displayPinField= document.getElementById('display-pin');
  displayPinField.value=pin;

})

document.getElementById('calculator').addEventListener('click',function(event){
    const number=event.target.innerText;
    const typeNumberField=document.getElementById('typed-number');
    const previousTypedNumber=typeNumberField.value;
    if(isNaN(number)){
    if(number==='C'){
        typeNumberField.value='';
    }
    else if(number==='<'){
        const digit=previousTypedNumber.split('');
        digit.pop();
        const remainDigits=digit.join('');
        typeNumberField.value=remainDigits;
    }
    }
    else{  
        const newTypedNumber=previousTypedNumber+number;
        typeNumberField.value=newTypedNumber;
    }
})


document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField=document.getElementById('display-pin');
    const currentPin=displayPinField.value;

    const typeNumberField=document.getElementById('typed-number');
    const typeNumber=typeNumberField.value;

    const pinSuccessMassege=document.getElementById('pin-success');
    const pinFailureMassege=document.getElementById('pin-failure');
    if(typeNumber===currentPin){
     
      pinSuccessMassege.style.display='block';
      pinFailureMassege.style.display='none';

    }
    else{

        pinFailureMassege.style.display='block';
        pinSuccessMassege.style.display='none';
    }
})