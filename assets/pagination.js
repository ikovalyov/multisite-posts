/**
 * Created by bosmer on 17.11.2016.
 */
$(document).ready(function(){
    console.log('pagination script loaded');
});
function mspLoadPage(blog_id, page){
    var data = {
        'action': msppagination.action,
        'blog_id': blog_id,
        'pageNumber': page
    };
    // We can also pass the url value separately from ajaxurl for front end AJAX implementations
    jQuery.post(msppagination.ajaxurl, data, function(response) {
        var parent = $("ul[data-blogid = "+blog_id+"]").parent();
        parent.html('');
        parent.append(response);
    });
    return false;
}