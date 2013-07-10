/**
 * Created with JetBrains RubyMine.
 * User: MacKE
 * Date: 10/07/2013
 * Time: 07:33
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){


$(".radio").click(function(){
    if ($('input[id=user_usertype_jobhunter]:checked').val() == "Jobhunter") {
    $("#jobHunter").slideDown("fast");
    }
});

});





