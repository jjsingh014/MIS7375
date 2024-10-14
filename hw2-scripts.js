/* 
 Name: Jaskarn Singh
 File: hw2-scripts.js
 Date Created: 2024-10-08
 Date Updated: 2024-10-08
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

/*function getData{
    var form_data = document.getElementById(patientdata);
    var form_data_output;
    var i;

    form_data_output="<table class='useroutput'><th>Name</th><<th>Value</th>";

    for (i = 0; i < form_data.length; i++) {
                data=form_data.elements[i].type;
            }
}*/

// Password check between the two password fields
function pwdcheck() {
    x=document.getElementById("password").value;
    y=document.getElementById("pwd2”).value;
    if ( x==y ) 
    {
      document.getElementById("pwd2_text").innerHTML = "Passwords match";
    } else  
      {
         document.getElementById("pwd2_text").innerHTML = "Passwords DO NOT match";
         error_flag = 1;
      }
    }

