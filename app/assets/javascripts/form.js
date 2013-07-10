/**
 * Created with JetBrains RubyMine.
 * User: MacKE
 * Date: 10/07/2013
 * Time: 07:33
 * To change this template use File | Settings | File Templates.
 */
var JH_Input = document.getElementById("user_usertype_jobhunter");
var jobHunter = document.getElementById("jobHunter");


$("#user_usertype_jobhunter").checked(function(){
    $(jobHunter).css({height: 'auto', visibility: 'visible'});
});






