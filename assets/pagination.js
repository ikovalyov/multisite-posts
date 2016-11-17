/**
 * Created by bosmer on 17.11.2016.
 */
$(document).ready(function(){
    console.log('pagination script loaded');
    $(".msp-pagination a").on('click', function(){
        var data = {
            'action': msppagination.action,
            'whatever': 1//ajax_object.we_value      // We pass php values differently!
        };
        // We can also pass the url value separately from ajaxurl for front end AJAX implementations
        jQuery.post(msppagination.ajaxurl, data, function(response) {
            console.log('Got this from the server: ' + response);
        });
        return false;
    });
});