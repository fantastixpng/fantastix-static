
const Scripts = () => (
  <>
    <script src="https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.js" defer="defer"></script>
    <script src="/js/vendor/scrollreveal.js" defer="defer"></script>

    <script src="https://vjs.zencdn.net/7.17.0/video.min.js" defer="defer"></script>
    <script src="/js/vendor/video.min.js" defer="defer"></script>

    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" defer="defer"></script>
    <script src="/js/vendor/swiper-bundle.min.js" defer="defer"></script>

    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" defer="defer"></script>
    <script src="/js/vendor/slick.min.js" defer="defer"></script>

    <script src="https://unpkg.com/jarallax@1/dist/jarallax.min.js" defer="defer"></script>
    <script src="/js/vendor/jarallax.min.js" defer="defer"></script>

    <script src="/js/vendor/modernizr-3.11.2.min.js" defer="defer"></script>
    <script src="/js/vendor/bootstrap.min.js" defer="defer"></script>
    <script src="/js/vendor/aos.js" defer="defer"></script>
    <script src="/js/vendor/jquery.countTo.js" defer="defer"></script>
    <script src="/js/vendor/jquery.waypoints.min.js" defer="defer"></script>
    <script src="/js/vendor/jquery.sticky.js" defer="defer"></script>
    <script src="/js/vendor/parallax.min.js" defer="defer"></script>
    <script src="/js/vendor/lazysizes.min.js" async=""></script>
    <script src="/js/vendor/wow.min.js" defer="defer"></script>
    <script src="/js/plugins.js" defer="defer"></script>
    <script src="/js/theme.min.js" defer="defer"></script>

    <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
    <script>
      window.ga = function() { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
      ga('create', 'site.google_analytics', 'auto'); ga('set', 'anonymizeIp', true); ga('set', 'transport', 'beacon'); ga('send', 'pageview')
    </script>
    <script src="https://www.google-analytics.com/analytics.js" async></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=<%= site.google_analytics"></script>
    <script src="/js/vendor/ga.js"></script>
    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "111201024522571");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v12.0'
      });
    };

      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    </script>
    <script src="https://code.tidio.co/wcdvhmo1vg2mcksqfuflpiunnkpru7ep.js" async></script>
  </>
)

export default Scripts;