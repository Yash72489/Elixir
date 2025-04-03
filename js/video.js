let videoIframe;

function playVideo() {
  document.querySelector(".video-thumbnail").style.display = "none";
  const videoEmbed = document.getElementById("videoEmbed");
  videoEmbed.style.display = "block";

  // Get the iframe
  videoIframe = document.getElementById("videoFrame");
  // Change the src to trigger autoplay
  videoIframe.src =
    "https://www.youtube.com/embed/jlWMTNZNOc0?autoplay=1&enablejsapi=1";
}

function closeVideo() {
  document.querySelector(".video-thumbnail").style.display = "block";
  document.getElementById("videoEmbed").style.display = "none";

  // Pause the video when closing
  if (videoIframe) {
    videoIframe.src = "https://www.youtube.com/embed/jlWMTNZNOc0?enablejsapi=1";
  }
}

