 textField = document.getElementById("generatedPassword")

      
        




function generatePassword() {
 const crypto = window.crypto || window.msCrypto;
      
        if (typeof crypto === 'undefined') {
          throw new Error('Crypto API is not supported. Please upgrade your web browser');
        }
      
        const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%';
      
        const indexes = crypto.getRandomValues(new Uint32Array(15));
      
        let secret = '';
      
        for (const index of indexes) {
          secret += charset[index % charset.length];
        }
        
        textField = secret
        alert(secret)
        return secret;







 
    // var length = 15,
    //     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + "!.@#$",
    //     retVal = "";
    //     for (var i = 0, n = charset.length; i < length; ++i) {
    //     retVal += charset.charAt(Math.floor(Math.random() * n));
    //     }
         
    //     textField = retVal

    //     console.log(textField)
    //     alert(textField)
    //     return retVal
}        

     


