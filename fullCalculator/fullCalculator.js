import { LightningElement,track } from 'lwc';
 
export default class FullCalculator extends LightningElement {
   
    previousinput;
    entireinput;
    resultvalue;
    seperatedexpression;
    lastoperation;
    handleclick(event){
     
        let operationvalues=['+','−','*','/'];
        let latestinput=event.target.label;
        if(this.previousinput==undefined){
            this.resultvalue=latestinput;
        }
        alert("latest"+latestinput);
        alert("past"+this.previousinput);
        //alert(operationvalues.includes(latestinput));
       if( operationvalues.includes(latestinput) && operationvalues.includes(this.previousinput)){
            this.resultvalue='Invalid Expression';
            //alert('result'+this.resultvalue)
            this.entireinput=this.entireinput+latestinput;
        }else{
            if(operationvalues.includes(latestinput)){
                this.lastoperation=latestinput;
            }
         
            if(this.entireinput==undefined){
                this.entireinput=latestinput;
            }else{
                this.entireinput=this.entireinput+latestinput;
                this.seperatedexpression = this.entireinput.split(/[+,*,−,/]+/);
                alert('seperate'+this.seperatedexpression.length);
                
                if((this.seperatedexpression.length>1)&&(!operationvalues.includes(latestinput))){
                   
                    if(this.lastoperation=='+') {
                        this.resultvalue=parseInt(this.resultvalue)+parseInt(this.seperatedexpression[this.seperatedexpression.length-1]);
                        alert(this.seperatedexpression[this.seperatedexpression.length-1]);
                    } 
                    if(this.lastoperation=='−') {
                        alert(this.seperatedexpression[this.seperatedexpression.length-1]);
                        this.resultvalue=parseInt(this.resultvalue)-parseInt(this.seperatedexpression[this.seperatedexpression.length-1]);
                    }
                    if(this.lastoperation=='*') {
                        alert(this.seperatedexpression[this.seperatedexpression.length-1]);
                        this.resultvalue=parseInt(this.resultvalue)*parseInt(this.seperatedexpression[this.seperatedexpression.length-1]);
                    }
                    if(this.lastoperation=='/') {
                        alert(this.seperatedexpression[this.seperatedexpression.length-1]);
                        this.resultvalue=parseInt(this.resultvalue)/parseInt(this.seperatedexpression[this.seperatedexpression.length-1]);
                    }          
                }
            }
            this.previousinput=latestinput;
            if(latestinput == 'CLR'){
                this.entireinput = null;
                this.resultvalue = null;
            }


         
         //alert('entireinput'+this.entireinput);
        }
    }
} 