/**
 * Created by bosmer on 17.11.2016.
 */
$(document).ready(function(){
    console.log('pagination script loaded');
    $(".msp-pagination a").on('click', function(){
        var data = {
            'action': msppagination.action,
            'blog_id': $(this).attr('blogid'),
            'pageNumber': $(this).text()
        };
        // We can also pass the url value separately from ajaxurl for front end AJAX implementations
        jQuery.post(msppagination.ajaxurl, data, function(response) {
            var parent = $("ul[data-blogid = "+$(this).attr('blogid')+"]").parent();
            $("ul[data-blogid = "+$(this).attr('blogid')+"]").remove();
            parent.append(response);
        });
        return false;
    });
});