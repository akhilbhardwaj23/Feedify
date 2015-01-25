

function parseRSS(source) {
    $.ajax({
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(source.url),
        dataType: 'json',
        success: function (data) {
            createFeed(data.responseData.feed, source);
        }
    });
}

function createFeed(feed, source) {
    feed.entries.forEach(function (item, index) {
        var staticContent = "<div><span class=\"label label-default\">" + source.domain + "</span></div>"

        var comments = "<div class=\"comments\">Comments</div>";
        staticContent += comments;


        var buttonsSection = "<div class=\"btn-group\" role=\"group\" aria-label=\"...\"> \
                        <button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-star\">Star</span></button> \
                        <button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-check\">Mark as unread</span></button> \
                        <button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-share-alt\">Send To</span></button> \
                        <button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-share\">Share</span></button> \
                        <button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-heart\">Like</span></button> </div>";

        staticContent += buttonsSection;
        var div = "<div class=\"well well-lg\">\
            <a class=\"feed-title\" href=\"" + item.link + "\" target=\"_blank\">" + item.title + "</a>" + staticContent +
            "</div>";
        

        $(".feeds").append(div)
    });
}


$(document).ready(
  function () {
      var feedSources =[];
      feedSources.push({ url: "http://blog.hackerearth.com/feed", domain: "Hacker News" });
      //feedSources.push({ url: "http://blog.hackerearth.com/feed", domain: "Hacker News" });

      //feedSources.push({ url: "http://blog.hackerearth.com/feed", domain: "Hacker " });

      //feedSources.push({ url: "http://blog.hackerearth.com/feed", domain: "HackerEarth" });

      feedSources.forEach(parseRSS, this);
  });
