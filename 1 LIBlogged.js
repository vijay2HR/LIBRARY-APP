function formValidation()
{
var passidw = document.registration.passid;
var uemail = document.registration.email;
var y=0
  if(ValidateEmail(uemail))
  {
    y++;
        if(passid_validation(passidw))
        {
          y++;
        }
  }
if(y>=2){
  return true;
}
else{
 return false;
}
} 




    function ValidateEmail(uemail)
    {
      var mailformat=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
    }
    } 


function passid_validation(passidw)
{ 
var password3 = /^(?=.*\d)(?=.*[a-z])(?=.*[$@$!%*#?&])(?=.*[A-Z]).{8,}$/;
    
if(passidw.value.match(password3))
{
  alert('Form Succesfully Submitted');
return true;
}
else
{
alert('Password must contain at least one number, one special symbol, one uppercase and lowercase letter, and at least 8 or more characters');
passidw.focus();
return false;
}
}





function CheckPasswordStrength(password) {
  var password_strength = document.getElementById("password_strength");
 
  var password_strength=document.getElementById("password_strength");
          if (password.length == 0) {
              password_strength.innerHTML = "";
          }
   
          var regex1 = new Array();
          regex1.push("[A-Z]"); 
          regex1.push("[a-z]"); 
          regex1.push("[0-9]"); 
          regex1.push("[$@$!%*#?&]"); 
   
          var passed = 0;
   
          for (var i = 0; i < regex1.length; i++) 
          {
              if (new RegExp(regex1[i]).test(password)) 
              {
                  passed++;
              }
          }
   
          if (passed > 2 && password.length >= 8) {
              passed++;
          }
          var color = "";
          var strength = "";
          switch (passed) {
              case 0:
              case 1:
                  strength = "Weak";
                  color = "darkred";
                  break;
              case 2:
                  strength = "Good";
                  color = "darkorange";
                  break;
              case 3:
              case 4:
                  strength = "Strong";
                  color = "darkgreen";
                  break;
              case 5:
                  strength = "Very Strong";
                  color = "darkblue";
                  break;

          }
          password_strength.innerHTML = strength;
          password_strength.style.color = color;
}