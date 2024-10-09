/* 
 Name: Jaskarn Singh
 File: hw2-scripts.js
 Date Created: 2024-10-08
 Date Updated: 2024-10-08
 Purpose: Redisplay/validate data from a the patient form
 Notes: IF we are going to use document.write, we have to either include some HTML from another file 
 and bring it in here in the script, OR use document.writes to inject html code for proper formatting.
*/

function getData{
    var form_data = document.getElementById(patientdata);
    var form_data_output;
    var i;

    form_data_output="<table class='useroutput'><th>Name</th><<th>Value</th>";

    for (i = 0; i < form_data.length; i++) {
                data=form_data.elements[i].type;
            }
}
