/**
 * Created with JetBrains RubyMine.
 * User: MacKE
 * Date: 10/07/2013
 * Time: 07:33
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){


$("#user_usertype_jobhunter").click(function(){
    if ($('input[name=usertype]:checked').val() == "Jobhunter") {
    $("#jobHunter").css({display: "block"});
    }
});

});





