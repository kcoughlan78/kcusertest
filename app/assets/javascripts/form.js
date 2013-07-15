/**
 * Created with JetBrains RubyMine.
 * User: MacKE
 * Date: 10/07/2013
 * Time: 07:33
 * To change this template use File | Settings | File Templates.
 */



jQuery(function($){
$("select[id=user_usertype]").click(function(){
    if ($('option').val() == "Jobhunter") {
        $(".jobHunter").slideDown("fast");
        $(".commonFields").slideDown("fast");
        $(".freeAcc").slideDown("fast");
        $(".bizCommon").slideUp("fast");
        $(".premium").slideUp("fast");
        $(".recruiters").slideUp("fast");
        $(".smallBiz").slideUp("fast");
        $(".hireBiz").slideUp("fast");
    }
    if ($('input[name=usertype]:checked').val() == "Freelancers & Small Businesses") {
        $(".smallBiz").slideDown("fast");
        $(".commonFields").slideDown("fast");
        $(".freeAcc").slideDown("fast");
        $(".bizCommon").slideDown("fast");
        $(".premium").slideUp("fast");
        $(".recruiters").slideUp("fast");
        $(".jobHunter").slideUp("fast");
        $(".hireBiz").slideUp("fast");
    }
    if ($('input[name=usertype]:checked').val() == "Hiring Business") {
        $(".hireBiz").slideDown("fast");
        $(".commonFields").slideDown("fast");
        $(".bizCommon").slideDown("fast");
        $(".premium").slideDown("fast");
        $(".freeAcc").slideUp("fast");
        $(".recruiters").slideUp("fast");
        $(".jobHunter").slideUp("fast");
        $(".smallBiz").slideUp("fast");
    }
    if ($('input[name=usertype]:checked').val() == "Recruitment Company") {
        $(".recruiters").slideDown("fast");
        $(".commonFields").slideDown("fast");
        $(".bizCommon").slideDown("fast");
        $(".premium").slideDown("fast");
        $(".hireBiz").slideUp("fast");
        $(".freeAcc").slideUp("fast");
        $(".jobHunter").slideUp("fast");
        $(".smallBiz").slideUp("fast");
    }
});
});






