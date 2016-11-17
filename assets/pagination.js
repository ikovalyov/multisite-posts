/**
 * Created by bosmer on 17.11.2016.
 */
$(document).ready(function(){
    $(".msp-pagination a").on('click', function(){
        console.log($(this).attr('hiddenHref'));
        return false;
    });
    $(".msp-pagination a").each(function(){
        $(this).attr('hiddenHref',$(this).attr('href'));
        $(this).attr('href','#');
    });
})();