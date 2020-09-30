
window.onload = () =>{
initCalculator()
}

function initCalculator() {
    // Shortcut to get elements
    var el = function(element) {
        
    if (element.charAt(0) === "#") {
        // If passed an ID...
        return document.querySelector(element); // ... returns single element
    }
      return document.querySelectorAll(element); // Otherwise, returns a nodelist

    };

    // Variables
    var viewer = el("#viewer"), // Calculator screen where result is displayed
        preViewer = el("#preViewer"), // Calculator screen where previous result is displayed   
        equals = el("#equals"), // Equal button
        del = el("#delete"), // Delete button
        clear = el("#clear"), // Clear button
        nums = el(".num"), // List of numbers
        ops = el(".ops"), // List of operators
        theNum = "", // Current number
        opsValue=[], // Value of operator
        resultNum // Result
     
        

    //When: operation is valid , let opertion carry on.
    var validOperation =(atribute)=>{ 
        if (atribute == '.' && theNum.includes(".")){// 
            return false
        }else if (theNum.length == 0 && opsValue.includes(atribute) && isNaN(parseInt(lastValue()))){
            return false
        }else if ( theNum.length > 0 && opsValue.includes(atribute) && isNaN(parseInt(lastValue()))){
            return false
        }else{
            return true
        }
    }

    // When: Number is clicked. add the current number selected
    var appendNumber = function(){
        var atribute=this.getAttribute("data-num")
        
        if (theNum=="0"){
         // If first current digit is zero , digit is not added 
            theNum ="";
        }
        if (!validOperation(atribute)) {
        // If a current digit is a dot and new number has dot, digit is not added 
            theNum = theNum
        }else {
            theNum += atribute;
        }
     
    preViewer.innerHTML = theNum; // Display on screen preview current digit number
    
    };

    // When: Operators is clicked. add the valid operation.  
    var appendOperation = function(){
        let atribute=this.getAttribute("data-ops")
        if (!validOperation(atribute)) {
            // If first digit is an operator sign , set digit to zero
            theNum ="0";
        }
        else if (!validOperation(atribute)){
            // If there is an operator sign , set the operator a current digit operator 
             theNum = theNum.substring(0,theNum.length-1) 
             theNum += atribute; 
        }
        else {
            // Otherwise, add digit to previous number (this is a string!)
             theNum += atribute;  
        }
        preViewer.innerHTML = theNum; // Display current operation
    };

    // When: Get the last digit added on preview display.
    var lastValue = function(){
        return theNum.substring(theNum.length-1)
    }

      // When: Delete button is pressed. Delete digit by digit
    var delDigit = function() {
        if(theNum.length<=1){
            console.log('validacion')
            theNum="0"
            preViewer.innerHTML = theNum; // when: delete all digits  display 0
        }else{
            theNum= theNum.slice(0,-1)
            preViewer.innerHTML = theNum; // Display current operation by deleted digit
        }
};

// When: Equals is clicked. Calculate result
    var mathOperation = function(){
        // Variables
        var plus = theNum.indexOf('+'), //Get position operation sum sign
        minus = theNum.indexOf('-'), //Get position operator substraction sign
        multiply = theNum.indexOf('x'), //Get position operator multiply sign
        divide = theNum.indexOf('/'); //Get position operator divide sign

        // Perform operation
        if (plus !=-1){
            arr=theNum.split('+',2)
            resultNum= parseFloat( arr[0]) + parseFloat(arr[1]);
        }else if (minus !=-1){
            arr=theNum.split('-',2)
            resultNum= parseFloat( arr[0])- parseFloat(arr[1]);
        }else if (multiply !=-1){
            arr=theNum.split('x',2)
            resultNum= parseFloat(( arr[0]) * parseFloat(arr[1]));
        }else if (divide !=-1){
            arr=theNum.split('/',2)
            resultNum= parseFloat(( arr[0])/parseFloat(arr[1]));
        }else{
            resultNum=theNum;
        }

        //  If NaN or Infinity returned
      if (!isFinite(resultNum)) {
         
        if ( isNaN(resultNum)) {
             console.log('result:',resultNum)
          // If result is not a number; set by zero,
          resultNum = 0;
        }
        else {
          // If result is infinity, set off by dividing by zero
          resultNum = "Look at what you've done";
          el("#calculator").classList.add("broken"); // Break calculator
        }
      }

    // Display result, finally!
    preViewer.innerHTML = resultNum;
    viewer.innerHTML = resultNum;

    // Convert number input to string!
    theNum=resultNum.toString();

    }

    // When: Clear button is pressed. Clear everything
    var clearAll = function() {
        theNum = "0";
        resultNum = theNum;
        preViewer.innerHTML = theNum;
        viewer.innerHTML = theNum;
    };

    /* The click events */

    // Add click event to numbers
    for (var i = 0, l = nums.length; i < l; i++) {
      nums[i].onclick = appendNumber;
    }

    // Add click event to operators
    for (var i = 0, l = ops.length; i < l; i++) {
        ops[i].onclick = appendOperation;
        opsValue.push(ops[i].getAttribute("data-ops"))//Make a array operators.
    }

    // Add click event to equal sign
    equals.onclick = mathOperation;

    // Add click event to clear button
    clear.onclick = clearAll;

    // Add click event to delete button
    del.onclick = delDigit;
};

 


