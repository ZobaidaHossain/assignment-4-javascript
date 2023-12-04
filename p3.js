function canPay(changeArray, totalDue) {
    if(changeArray.length==0 || !Array.isArray(changeArray) || typeof totalDue !=='number'){
        return "please enter a valid input";
    }
    else{
        let sum=0;
        for(let i=0;i<changeArray.length;i++){
            sum=sum+changeArray[i];
        }
        if(sum>=totalDue){
            return true;
        }
        else{
            return false;
        }
    }
}
const rr=[1,5,5];
const rrr=10;
console.log(canPay(rr,rrr));


