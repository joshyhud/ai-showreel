const myvids = [];

const video_1 =
  "https://player.vimeo.com/progressive_redirect/playback/791146946/rendition/720p/file.mp4?loc=external&signature=7f96cb47955e5ac8c130741c5596ffaedb0458b805e9599fce4cc4bb1beceb42";
const video_2 =
  "https://player.vimeo.com/progressive_redirect/playback/791147112/rendition/720p/file.mp4?loc=external&signature=24e936da53d10a22f747314f0166e4840ba981324461e435c285b57f5477c550";
const video_3 =
  "https://player.vimeo.com/progressive_redirect/playback/791147263/rendition/720p/file.mp4?loc=external&signature=fa74e881c990b409ad7b4def6812c3a141bac776a23a2d954fdbd2087214606d";
const video_4 =
  "https://player.vimeo.com/progressive_redirect/playback/791147518/rendition/720p/file.mp4?loc=external&signature=e61dffee55d2b4ed87d5f8b5266edfc28f1023a3b205c7dc6df4387b3fa4f729";
const video_5 =
  "https://player.vimeo.com/progressive_redirect/playback/791147664/rendition/720p/file.mp4?loc=external&signature=ddc45b32791d429ea2860aeca9477685c1633f839bd56961109f3a7c40d3dd96";
const video_6 =
  "https://player.vimeo.com/progressive_redirect/playback/791147381/rendition/720p/file.mp4?loc=external&signature=afd881528f8e15a4f8532552044d8aa4371ce6da0e377e97e5262dd07a1d59b5";

function updateVideo(obj) {
  var data = obj.options[obj.selectedIndex].getAttribute("data");

  if (data == 1) {
    myvids.push(video_1);
  } else if (data == 2) {
    myvids.push(video_2);
  } else if (data == 3) {
    myvids.push(video_3);
  } else if (data == 4) {
    myvids.push(video_4);
  } else if (data == 5) {
    myvids.push(video_5);
  } else {
    myvids.push(video_6);
  }
}

//update the button to active when last entry filled
function updateBtn() {
  document.querySelector("button").disabled = false;
  $(".button-class").addClass("animate__animated animate__jackInTheBox");
}

// function to update video url to source when button pressed
function myFunction() {
  var video = document.getElementById("myVideo");
  var source = document.createElement("source");

  document.querySelector("button").disabled = true;

  source.setAttribute("src", myvids[0]);
  source.setAttribute("type", "video/mp4");

  video.appendChild(source);

  var count = 0;

  $(".gif_wrap").addClass("visible");

  var interval = setInterval(function () {
    if (count >= 5) {
      clearInterval(interval);
      $(".gif_wrap").fadeOut();
      $(".gif_wrap").removeClass("visible");
      $("#myVideo").addClass("visible");
      $("#myVideo").fadeIn();
      video.play();
    }
    giphy();
    ai_speech(count);
    count++;
  }, 1500);

  video.addEventListener("ended", function () {
    video.classList.remove("visible");
    location.reload();
  });
}

function ai_speech(count) {
  const words = [
    "logging on to neural load balancer",
    "assessing algorithm updates",
    "uploading artificial intelligence chat bot",
    "inserting metaverse pointlessly",
    "creating showreel of dreams",
  ];
  $(".ai_words").text(words[count]);
}

function giphy() {
  // Initiate gifLoop for set interval
  var refresh;
  // Duration count in seconds
  const duration = 1000;
  // Giphy API defaults
  const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/",
    apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
    tag: "artificial intelligence",
    type: "random",
    rating: "pg-13",
  };
  // Target gif-wrap container
  const $gif_wrap = $(".gif_wrap");
  // Giphy API URL
  let giphyURL = encodeURI(
    giphy.baseURL +
      giphy.type +
      "?api_key=" +
      giphy.apiKey +
      "&tag=" +
      giphy.tag +
      "&rating=" +
      giphy.rating
  );

  // Call Giphy API and render data
  var newGif = () => $.getJSON(giphyURL, (json) => renderGif(json.data));

  // Display Gif in gif wrap container
  var renderGif = (_giphy) => {
    // Set gif as bg image
    $gif_wrap.css({
      "background-image": 'url("' + _giphy.images.original.url + '")',
    });
  };

  // Call Giphy API for new gif
  newGif();
}
