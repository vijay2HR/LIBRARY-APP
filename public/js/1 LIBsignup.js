function formValidation()
{
var passidw = document.registration.passid;
var rptpasword = document.registration.repeatPassword;
var uname = document.registration.username;
var uadd = document.registration.address;
// var ucountry = document.registration.country;
var phoneNo = document.registration.phno;
var uemail = document.registration.email;
var umsex = document.getElementById("msex");
var ufsex = document.getElementById("fsex");
var uother = document.getElementById("other");
var dob = document.registration.dob;
var y=0
if(allLetter(uname))
{
  y++;
  if(ValidateEmail(uemail))
  {
    y++;
    if(alphanumeric(uadd))
    {
      y++;
      if(allnumeric(phoneNo))
      {
        y++;
        if(passid_validation(passidw))
        {
          y++;
          if(rptpassword_validation(rptpasword))
          {
            y++;
            if(dob_validation(dob))
            {
              y++;
              if(sex_validation(umsex,ufsex,uother))
              {
                y++;
              }
            }
          } 
        }
      }
    }
  }
}
if(y>=8){
  return true;
}
else{
 return false;
}
} 


function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
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

function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}

    function allnumeric(phoneNo)
    { 
    var numbers = /^([0-9]{10})+$/;
    // /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(phoneNo.value.match(numbers))
    {
    return true;
    }
    else
    {
    alert('Phone number code must have numeric characters only and should consist 10 digits');
    phoneNo.focus();
    return false;
    }
    }
    // console.log(passidw);

function passid_validation(passidw)
{ 
var password3 = /^(?=.*\d)(?=.*[a-z])(?=.*[$@$!%*#?&])(?=.*[A-Z]).{8,}$/;
    
if(passidw.value.match(password3))
{
return true;
}
else
{
alert('Password must contain at least one number, one special symbol, one uppercase and lowercase letter, and at least 8 or more characters');
passidw.focus();
return false;
}
}

// console.log(rptpasword);

      function rptpassword_validation(rptpasword)
      {
      if(rptpasword.value==document.registration.passid.value)
      {
      return true;
      }
      else
      {
      alert("Password not matching");
      rptpasword.focus();
      return false;
      }
      }

function dob_validation(dob)
{
var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
// Match the date format through regular expression
  if(dob.value.match(dateformat))
    {
      // dob.focus();
      //Test which seperator is used '/' or '-'
      var opera1 = dob.value.split('/');
      var opera2 = dob.value.split('-');
      lopera1 = opera1.length;
      lopera2 = opera2.length;
      // Extract the string into month, date and year
        if (lopera1>1)
        {
        var pdate = dob.value.split('/');
        }
          else if (lopera2>1)
          {
          var pdate = dob.value.split('-');
          }
      var dd = parseInt(pdate[0]);
      var mm  = parseInt(pdate[1]);
      var yy = parseInt(pdate[2]);
        // Create list of days of a month [assume there is no leap year by default]
      var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
        if (mm==1 || mm>2)
        {
            if (dd>ListofDays[mm-1])
            {
            alert('Invalid date format! Input a valid date [dd/mm/yyyy or dd-mm-yyyy format]');
            return false;
            }
        }
        if (mm==2)
        {
        var lyear = false;
          if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
          {
          lyear = true;
          }
        if ((lyear==false) && (dd>=29))
        {
        alert('Invalid date format! Input a valid date [dd/mm/yyyy or dd-mm-yyyy format]');
        return false;
        }
        if ((lyear==true) && (dd>29))
        {
        alert('Invalid date format! Input a valid date [dd/mm/yyyy or dd-mm-yyyy format]');
        return false;
        }
    
    }
  return true;
}
else
{
alert("Invalid date format! Input a valid date [dd/mm/yyyy or dd-mm-yyyy format]");
dob.focus();
return false;
}
}

function sex_validation(umsex,ufsex,uother)
  {
  x=0; 
    if(umsex.checked) 
    {
    x++;
    } 
      if(ufsex.checked)
      {
      x++; 
      }
        if(uother.checked)
        {
        x++; 
        }
    if(x==0)
    {
      alert('Select Male/Female/Other');
      umsex.focus();
      return false;
    }
    else
    {
      alert('Form Succesfully Submitted');
      // window.location.reload()
      return true;
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

    



