/**
 * Created by bosmer on 17.11.2016.
 */
$(document).ready(function(){
    console.log('pagination script loaded');
    $(".msp-pagination a").on('click', function(){
        console.log($(this).attr('href'));
        //return false;
    });
});