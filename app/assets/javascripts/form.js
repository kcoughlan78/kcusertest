/**
 * Created with JetBrains RubyMine.
 * User: MacKE
 * Date: 10/07/2013
 * Time: 07:33
 * To change this template use File | Settings | File Templates.
 */




$("input[name=usertype]").click(function(){
    if ($('input[name=usertype]:checked').val() == "Jobhunter") {
        $("#jobHunter").slideDown("fast");
        $("#recruiters").slideUp("fast");
        $("#smallBiz").slideUp("fast");
        $("#hireBiz").slideUp("fast");
    }
    if ($('input[name=usertype]:checked').val() == "Freelancers & Small Businesses") {
        $("#smallBiz").slideDown("fast");
        $("#recruiters").slideUp("fast");
        $("#jobHunter").slideUp("fast");
        $("#hireBiz").slideUp("fast");
    }
    if ($('input[name=usertype]:checked').val() == "Hiring Business") {
        $("#hireBiz").slideDown("fast");
        $("#recruiters").slideUp("fast");
        $("#jobHunter").slideUp("fast");
        $("#smallBiz").slideUp("fast");
    }
    if ($('input[name=usertype]:checked').val() == "Recruitment Company") {
        $("#recruiters").slideDown("fast");
        $("#hireBiz").slideUp("fast");
        $("#jobHunter").slideUp("fast");
        $("#smallBiz").slideUp("fast");
    }
});







