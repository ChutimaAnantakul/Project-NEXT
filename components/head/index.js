import Head from "next/head";
function index() {
  return (
    <Head>
      <title>CHU SkinCare Products</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta property="og:title" content="Vide" />
      <meta
        name="keywords"
        content="Big store Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
            Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
      {/* <script type="application/x-javascript">
        addEventListener("load", function() {setTimeout(hideURLbar, 0)}, false);
        function hideURLbar(){window.scrollTo(0, 1)}
      </script> */}

      <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
      <link href="/css/style.css" rel="stylesheet" type="text/css" />
      <script src="/js/jquery-1.11.1.min.js"></script>
      <script type="text/javascript" src="/js/move-top.js"></script>
      <script type="text/javascript" src="/js/easing.js"></script>
      {/* <script type="text/javascript">
        jQuery(document).ready(function ($){" "}
        {$(".scroll").click(function (event) {
          event.preventDefault();
          $("html,body").animate(
            { scrollTop: $(this.hash).offset().top },
            1000
          );
        })}
        );
      </script> */}
      <link href="/css/font-awesome.css" rel="stylesheet" />
      <link
        href="//fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="//fonts.googleapis.com/css?family=Noto+Sans:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <script src="/js/jstarbox.js"></script>
      <link
        rel="stylesheet"
        href="/css/jstarbox.css"
        type="text/css"
        media="screen"
        charset="utf-8"
      />
      {/* <script type="text/javascript">
        jQuery(function (){" "}
        {jQuery(".starbox").each(function () {
          var starbox = jQuery(this);
          starbox
            .starbox({
              average: starbox.attr("data-start-value"),
              changeable: starbox.hasClass("unchangeable")
                ? false
                : starbox.hasClass("clickonce")
                ? "once"
                : true,
              ghosting: starbox.hasClass("ghosting"),
              autoUpdateAverage: starbox.hasClass("autoupdate"),
              buttons: starbox.hasClass("smooth")
                ? false
                : starbox.attr("data-button-count") || 5,
              stars: starbox.attr("data-star-count") || 5,
            })
            .bind("starbox-value-changed", function (event, value) {
              if (starbox.hasClass("random")) {
                var val = Math.random();
                starbox.next().text(" " + val);
                return val;
              }
            });
        })}
        );
      </script> */}
      <script src="/js/bootstrap.js"></script>
      <script type="text/javascript" src="/js/jquery.mycart.js"></script>

      <script src="/js/jquery.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/menumaker.js"></script>
      <script src="/js/wow.js"></script>
      <script src="/js/custom.js"></script>

      {/* <script>
        $(document).ready(function (c){" "}
        {$(".close1").on("click", function (c) {
          $(".cross").fadeOut("slow", function (c) {
            $(".cross").remove();
          });
        })}
        )
      </script>
      <script>
        $(document).ready(function (c){" "}
        {$(".close2").on("click", function (c) {
          $(".cross1").fadeOut("slow", function (c) {
            $(".cross1").remove();
          });
        })}
        )
      </script>
      <script>
        $(document).ready(function (c){" "}
        {$(".close3").on("click", function (c) {
          $(".cross2").fadeOut("slow", function (c) {
            $(".cross2").remove();
          });
        })}
        )
      </script> */}
      <script src="/js/jquery.zoomtoo.js"></script>
      {/* <script>
        $(function (){" "}
        {$("#picture-frame").zoomToo({
          magnify: 1,
        })}
        );
      </script> */}
      <script src="/js/hizoom.js"></script>

      {/* <script>
        window.jQuery || document.write('
        <script src="js/vendor/jquery-1.11.1.min.js"></script>')
      </script> */}
      <script src="js/jquery.vide.min.js"></script>
    </Head>
  );
}

export default index;
