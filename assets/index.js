 textField = document.getElementById("generatedPassword")





function generatePassword() {
    
    var length = 15,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + "!.@#$",
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
        }
         
        textField = retVal

        console.log(textField)
        alert(textField)
        return retVal
}        

     


