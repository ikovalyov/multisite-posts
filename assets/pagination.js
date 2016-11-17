/**
 * Created by bosmer on 17.11.2016.
 */
$(document).ready(function(){
    console.log('pagination script loaded');
    $(".msp-pagination a").on('click', function(){
        alert($(this).attr('hiddenHref'));
        return false;
    });
    $(".msp-pagination a").each(function(){
        $(this).attr('hiddenHref',$(this).attr('href'));
        $(this).attr('href','#');
    });
});