





console.log("Concurrent execution Starts here")

setTimeout(function(){
    console.log("First Timeoutcode(delayed 1")
    setTimeout(function(){
        console.log("Inner Timeout")
    }, 0);
},1000);//+1 Sec

setTimeout(function(){
    console.log("Second Timeout code (delayed 2")
},2000);//+1+2 Sec

setTimeout(function(){
    console.log("Third Timeout code (delayed 2")
},3000);//+1+2+3 Sec

console.log("Concurrent execution Ends here")

