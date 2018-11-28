jribbble.shots({token: "fcc723f7d2fd415b44f64487f408f8b4a666670560204b9b971293f4cbb7e195"}, function(shots) {
  document.querySelector(".dribbble-shots-list").innerHTML = shots.reduce(function(html, shot) {
    return html + '<li><a href="'+  shot.html_url + '" target="_blank"><img src="' + shot.images.hidpi + '"></a></li>';
  }, "");
});
