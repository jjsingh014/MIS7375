/* 
 Name: Jaskarn Singh
 File: hw4-scripts.js
 Date Created: 2024-10-08
 Date Updated: 2024-11-26
 Purpose: Redisplay/validate data from a the patient form
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
    //var form_data2 = document.getElementByTagName("label");
    var form_data_output;
    var data;
    var i;
    form_data_output="<table class='useroutput'><th>Name</th><th>Value</th>";
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
   var checkValue = doc.getElementById("dob");
   
   checkValue.addEventListener("click", function(){
   var birthDate = new Date(birth.value);
   var todayDate = new Date();
   var dateDiff = new Date(todayDate - birthDate);
   var YEAR_OFFSET = 1970;
   var z = dateDiff.getFullYear()-YEAR_OFFSET;
   if(z < 120 && z >= 0){
       	doc.getElementById("display").innerHTML = ("DoB is good!");
       }else {
       	doc.getElementById("display").innerHTML = ("DoB is Invalid");
        error_flag = 1
       }
   });
}

//On the fly checking
function fnamevalidation(){
   x = document.getElementById("fname").value;
   if(x.length<2) { 
       document.getElementById("fname_message").innerHTML = "The name is too short.";  
       error_flag = 1;
   }else {
       if (x.match(/[a-zA-Z3-5'-]+$/)) {
           document.getElementById("fname_message").innerHTML = "";  
       }else  {
          document.getElementById("fname_message").innerHTML = "The name has invalid character.";
          error_flag = 1;
        }
    }
   }

function lnamevalidation(){
   x = document.getElementById("lname").value;
   if(x.length<2) { 
       document.getElementById("lname_message").innerHTML = "The name is too short.";  
       error_flag = 1;
   }else {
       if (x.match(/[a-zA-Z3-5'-]+$/)) {
           document.getElementById("lname_message").innerHTML = "";  
       }else  {
          document.getElementById("lname_message").innerHTML = "The name has invalid character.";
          error_flag = 1;
        }
    }
   }

function ssnvalidation(){
   x = document.getElementById("ssn").value;
   if(x.length<11) { 
       document.getElementById("ssn_message").innerHTML = "The SSN is too short.";  
       error_flag = 1;
   }else {
       if (x.match(/[0-9]+$/)) {
           document.getElementById("ssn_message").innerHTML = "";  
       }else  {
          document.getElementById("ssn_message").innerHTML = "The name has invalid character.";
          error_flag = 1;
        }
    }
   }

function phonevalidation(){
   var phoneoutput;
   var phoneinput = document.getElementById("phone").value;
   console.log(phoneinput);
   if(phoneinput.length<12) { 
       document.getElementById("phone_message").innerHTML = "The phone number is too short.";  
       error_flag = 1;
   }else {
       if (phoneinput.match(/[0-9-]+$/)) {
           document.getElementById("phone_message").innerHTML = "";  
       }else  {
          document.getElementById("phone_message").innerHTML = "The phone has invalid character.";
          error_flag = 1;
        }
    }
 
   if (phoneinput.search(/[-]/)< 0){
       phoneoutput = "The phone number has no dashes.";
       error_flag = 1;
   }else {
       phoneoutput = "It has dashes";
   }
   document.getElementById("phone_message2").innerHTML = phoneoutput;
}


function emailvalidation(){
   x = document.getElementById("email").value;
   if(x.length<8) { 
       document.getElementById("email_message").innerHTML = "The email is too short.";  
       error_flag = 1;
   }else {
       if (x.match(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]+$/)) {
           document.getElementById("email_message").innerHTML = "";  
       }else  {
          document.getElementById("email_message").innerHTML = "The email has invalid character.";
          error_flag = 1;
        }
    }
   }

function useridvalidation(){
   x = document.getElementById("userid").value;
   if(x.length<8) { 
       document.getElementById("userid_message").innerHTML = "The user id is too short.";  
       error_flag = 1;
   }else {
       if (x.match(/[A-Za-z]+[A-Za-z0-9-_]+$/)) {
           document.getElementById("userid_message").innerHTML = "";  
       }else  {
          document.getElementById("userid_message").innerHTML = "The user id has invalid character.";
          error_flag = 1;
        }
    }
   }

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    confirm("Welcome again " + user + "! Not " + user + "? Press Clear");
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 2);
     }
  }
}
