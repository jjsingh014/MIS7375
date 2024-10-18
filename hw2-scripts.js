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

//This function looks throught the form and displays the data below the form for the user to check
function getData(){
    var form_data = document.getElementById("patientdata");
    var form_data_output;
    var data;
    var i;
    form_data_output="<table class='useroutput'><th>Name</th><<th>Value</th>";
    for (i = 0; i < form_data.length; i++) {
         console.log("item: "+i+" "+form_data.elements[i].name+" = "+form_data.elements[i].value);
         data = form_data.elements[i].type;
         switch (data){
          case "radio":
                if (form_data.elements[i].checked){
                    form_data_output = form_data_output + "<tr><td align='left'>"+form_data.elements[i].name+"</td>";
                    form_data_output = form_data_output +"<td class='outputdata'>"+ form_data.elements[i].value+"</td></tr>";
                }
           break;
           case "checkbox":
                if (form_data.elements[i].checked){
                    form_data_output = form_data_output + "<tr><td align='left'>"+form_data.elements[i].name+"</td>";
                    form_data_output = form_data_output +"<td class='outputdata'>"+ form_data.elements[i].value+"</td></tr>";
                }
           break;
           case "button": case "reset": case "submit":
           break;
          default:
               form_data_output = form_data_output + "<tr><td align='left'>"+form_data.elements[i].name+"</td>";
               form_data_output = form_data_output + "<td class='outputdata'>"+ form_data.elements[i].value+"</td></tr>";
         }
    }
  if(form_data_output.length>0){
     form_data_output = form_data_output + "</table>";
     document.getElementById("outputformdata").innerHTML = form_data_output;

  }
}


// Checks the user password to see it meets password requirement  
function pwdvalidation() {
    var passwordoutput;
    var passwordinput = document.getElementById("pwd").value;
    console.log(passwordinput);
    // This validates that user enters at least 1 lowercase letter
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter at least 1 lowercase letter";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("first_message").innerHTML = passwordoutput;
    // This validates that the user enters at least 1 capital letter
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 uppercase letter";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("second_message").innerHTML = passwordoutput;
  // This validates that the user enters at least 1 numbers
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "Enter at least 1 number";
    error_flag = 1;
    } else {
    passwordoutput = "Got at least 1 number";
    }
    document.getElementById("third_message").innerHTML = passwordoutput;
    // This validates that the user enters at least 1 special charater
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter at least 1 special character";
    error_flag = 1;
    } else {
    passwordoutput = "Got at least 1 special character";
    }
    document.getElementById("fourth_message").innerHTML = passwordoutput;
  // This validates that the user has minimum length of 8 characters in the password
  if(passwordinput.length < 8) {
      passwordoutput = "Enter a minimum of 8 characters";
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

//Checking DoB is valid
function checkDoB(){
   var doc = document;
   var birth = doc.getElementById("dob");
   var checkValue = doc.getElementById("checkValue");
   
   checkValue.addEventListener("click", function(){
   var birthDate = new Date(birth.value);
   var todayDate = new Date();
   var dateDiff = new Date(todayDate - birthDate);
   var YEAR_OFFSET = 1970;
   var z = dateDiff.getFullYear()-YEAR_OFFSET;
   if(0 >= z < 120){
       	doc.getElementById("display").innerHTML = ("DoB is good!");
       }else {
       	doc.getElementById("display").innerHTML = ("DoB is Invalid");
        error_flag = 1
       }
   });
}
