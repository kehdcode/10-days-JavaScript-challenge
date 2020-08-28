let amount = prompt("Please Enter the amounts");
        let balance = 5000;
     
      
        function accountDetails(x, y){
        
       if(amount <= balance){
        console.log(amount);
         
           document.write("Withdrawl successful");
       }else{
           document.write("Insufficiecnt Balance");
       }
   }
      
   accountDetails( amount, balance);