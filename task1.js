function total_refund(fare, delay) {
    if (delay == 30 || delay < 30) {
        console.log("Sorry, No refund is Granted");
        return 0;
    } 
    else if (delay > 30 && delay <= 120) {
        refund = 0.1 * fare;
        if(refund==100 || refund>100 ){
            return 100;
        }
        return refund;
    } 
    else if (delay > 120 && delay <= 300) {
        refund= 0.2 * fare;
        if(refund==100 || refund>100 ){
            return 100;
        }
        return refund;
    } 
    else if(delay > 300){
        refund = 0.5 * fare;
        if(refund==100 || refund>100 ){
            // console.log("Your Value crossing 100...");
            return 100;
        }
        return refund;
    }
    else{
        return -1;
    }
}
var fare = prompt("Enter The Amount of Fare. ");
var delay = prompt("Please Enter the Delay Time. "); 
var refund_amount = total_refund(fare, delay);
console.log(refund_amount);
