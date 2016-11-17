/**
 * Created by bosmer on 17.11.2016.
 */
(function() {
    function loadPageMSP() {

    }
    $(document).ready(function(){
        $(".msp-pagination a").on('click', 'loadPageMSP');
        $(".msp-pagination a").each(function(){
            $(this).attr('hiddenHref',$(this).attr('href'));
            $(this).attr('href','');
        })
    });
})();