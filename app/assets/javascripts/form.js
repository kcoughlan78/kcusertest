/**
 * Created with JetBrains RubyMine.
 * User: MacKE
 * Date: 10/07/2013
 * Time: 07:33
 * To change this template use File | Settings | File Templates.
 */



jQuery(function($){
    $('#user_usertype').change(function(){
        var selected = $(this).find(':selected');
        $('.reg').hide();
        $('.'+selected.val()).show();
    });
});






