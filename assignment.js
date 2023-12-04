function cubeNumber(number) {
    if(typeof number !=='number'){
        return "please enter a number";

    }
    else{
        const res=Math.pow(number,3);
        return res;
    }
    
}


function matchFinder(string1, string2) {
    if(typeof string1 !=='string' || typeof string2!=='string'){
        return "please enter a string value";
    }
    else{
        const result=string1.includes(string2);
        return result;
    }

}


function sortMaker(arr) {
    if(arr.length!=2 || !Array.isArray(arr)){
        return "please enter a valid array";
    }
    else{
        const arr1=arr[0];
        const arr2=arr[1];
        let res1=0;
        if(arr1 >=0 && arr2>=0){
            if(arr1>arr2){
                res1=[arr1,arr2];
                return res1;
            }
            else if(arr1<arr2){
                res1=[arr2,arr1];
                return res1;
            }
            else if(arr1==arr2){
                return "equal";
            }
        }
        else{
            return "Invalid Input";
        }
    }
}


function findAddress(obj) {
    
    if(typeof obj !=='object'){
        return "please enter proper object";
    }
    else{
        
        const street=obj.street || '__';
        const house=obj.house || '__';
        const society=obj.society || '__';
        return street+','+house+','+society;

}
}


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
