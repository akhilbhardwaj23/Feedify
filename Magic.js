

function parseRSS(url) {
    $.ajax({
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        success: function (data) {
            callback(data.responseData.feed);
        }
    });
}
function callback(feed) {
    feed.entries.forEach(createFeed, this);
}

function createFeed(item) {
    var div = "<div class=\"list-group\"> <a href=\"" + item.link + "\">" + item.title + "</a></div>";

    $(".feeds").append(div)
}
$(document).ready(
  function () {
      var urls = [];

      urls.push("http://blog.hackerearth.com/feed");
      urls.forEach(parseRSS, this);
  });
