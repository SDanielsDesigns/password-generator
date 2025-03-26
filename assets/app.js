
 let outputPass = document.querySelector("#outputField")



outputPass.textContent = "";


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
        
        
        outputPass.textContent = secret;
        return secret;
        
       
}
