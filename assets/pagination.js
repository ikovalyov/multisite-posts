/**
 * Created by bosmer on 17.11.2016.
 */
$(document).ready(function(){
    console.log('pagination script loaded');
});
function mspLoadPage(blog_id, page, widget_id, event){
    event.preventDefault();
    var data = {
        'action': msppagination.action,
        'blog_id': blog_id,
        'widget_id': widget_id,
        'blogPageNumber': page
    };
    console.log(data);
    // We can also pass the url value separately from ajaxurl for front end AJAX implementations
    jQuery.post(msppagination.ajaxurl, data, function(response) {
        var parent = $("ul[data-blogid = "+blog_id+"]").parent();
        parent.html('');
        parent.append(response);
    });
    return false;
}