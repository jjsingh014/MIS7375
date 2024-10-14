/* 
 Name: Jaskarn Singh
 File: hw2-scripts.js
 Date Created: 2024-10-08
 Date Updated: 2024-10-13
 Purpose: Redisplay/validate data from a the patient form
 Notes: IF we are going to use document.write, we have to either include some HTML from another file 
 and bring it in here in the script, OR use document.writes to inject html code for proper formatting.
*/

// Console log error check
function errorcheck()
  {
    var error_flag = 0;
    console.log(error_flag);
  }

/*
function getData{
    var form_data = document.getElementById(patientdata);
    var form_data_output;
    var i;

    form_data_output="<table class='useroutput'><th>Name</th><<th>Value</th>";

    for (i = 0; i < form_data.length; i++) {
                data=form_data.elements[i].type;
            }
}
*/

// Checks the user password to see it meets password requirement  
function passwordentry() {
    var passwordoutput;
    var passwordinput = document.getElementById("pwd").value;
    console.log(passwordinput);
    // Validate lowercase letters
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter At least 1 lower case letter";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("first_message").innerHTML = passwordoutput;
    // Validate capital letters
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("second_message").innerHTML = passwordoutput;
  // Validate numbers
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "EnteraAt least 1 number";
    error_flag = 1;
    } else {
    passwordoutput = "Got at least 1 number";
    }
    document.getElementById("third_message").innerHTML = passwordoutput;
    // Validate special chars
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter At least 1 special character";
    error_flag = 1;
    } else {
    passwordoutput = "Got at least 1 special character";
    }
    document.getElementById("_fourth_message").innerHTML = passwordoutput;
  // Validate length
  if(passwordinput.length < 8) {
      passwordoutput = "Enter a Minimum 8 characters";
      error_flag = 1;
  } else {
      passwordoutput = "Password is now 8 or more characters";
  }
  document.getElementById("fifth_message").innerHTML = passwordoutput;
  }

// Password check between the two password fields
function pwdcheck() {
    x=document.getElementById("pwd").value;
    y=document.getElementById("pwd2").value;
    if ( x==y )
    {
      document.getElementById("pwd2_text").innerHTML = "Passwords match";
    } else  
      {
         document.getElementById("pwd2_text").innerHTML = "Passwords DO NOT match";
         error_flag = 1;
      }
    }

