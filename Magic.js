

function parseRSS(url) {
    $.ajax({
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        success: function (data) {
            callback(data.responseData.feed);
        }
    });
}
function callback(data) {


}

$(document).ready(
  function () {
      var urls = [];

      urls.push("http://blog.hackerearth.com/feed");
      urls.forEach(parseRSS, this);
  });
