/**
 * Created with JetBrains RubyMine.
 * User: MacKE
 * Date: 10/07/2013
 * Time: 07:33
 * To change this template use File | Settings | File Templates.
 */
var JH_Input = document.getElementById("user_usertype_jobhunter");
var jobHunter = document.getElementById("jobHunter");

function form() {

    if (JH_Input.checked=true) {
    jobHunter.style.visibility = "visible";
    jobHunter.style.height = "auto";
    }
}

