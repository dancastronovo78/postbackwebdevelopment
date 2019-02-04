<!DOCTYPE HTML>
<html lang="en">
    <head>
        <title>Postback Gallery</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="slick/slick.css" rel="stylesheet" />
        <link href="slick/slick-theme.css" rel="stylesheet" />
        <link href="css/tidbits.css" rel="stylesheet" />
        <link href="css/nav.css" rel="stylesheet"/>
        <link href="css/tidbitsMediaQuery.css" rel="stylesheet"/>
        <link href="css/navMediaQuery.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Muli:200" rel="stylesheet">
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        <script src="js/nav.js"></script>
        <style type="text/css">
                html, body {
                  margin: 0;
                  padding: 0;
                }

                * {
                  box-sizing: border-box;
                }

                .slider {
                    width: 50%;
                    margin: 100px auto;
                }

                .slick-slide {
                  margin: 0px 20px;
                }

                .slick-slide img {
                  width: 100%;
                }

                .slick-prev:before,
                .slick-next:before {
                  color: black;
                }


                .slick-slide {
                  transition: all ease-in-out .3s;
                  opacity: .2;
                }

                .slick-active {
                  opacity: .5;
                }

                .slick-current {
                  opacity: 1;
                }
        </style>
    </head>
    <body>
        <header>
            <?php include 'includes/header.php';?>
        </header>
        <div id="titleH1"><h1 tabindex="1">Gallery</h1></div>
        <!--Main Container-->
        <main id="mainContainer">
            <section class="lazy slider" data-sizes="50vw">
                <div>
                    <img data-lazy="images/eLearningSml.png" data-srcset="images/eLearningSml.png" data-sizes="100vw">
                </div>
                <div>
                  <img data-lazy="" data-srcset="" data-sizes="100vw">
                </div>
                <div>
                  <img data-lazy="http://placehold.it/350x300?text=3-350w"  data-srcset="http://placehold.it/650x300?text=3-650w 650w, http://placehold.it/960x300?text=3-960w 960w" data-sizes="100vw">
                </div>
                <div>
                  <img data-lazy="http://placehold.it/350x300?text=4-350w"  data-srcset="http://placehold.it/650x300?text=4-650w 650w, http://placehold.it/960x300?text=4-960w 960w" data-sizes="100vw">
                </div>
                <div>
                  <img data-lazy="http://placehold.it/350x300?text=5-350w"  data-srcset="http://placehold.it/650x300?text=5-650w 650w, http://placehold.it/960x300?text=5-960w 960w" data-sizes="100vw">
                </div>
                <div>
                  <!-- this slide should inherit the sizes attr from the parent slider -->
                  <img data-lazy="http://placehold.it/350x300?text=6-350w"  data-srcset="http://placehold.it/650x300?text=6-650w 650w, http://placehold.it/960x300?text=6-960w 960w">
                </div>
          </section>

          <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
          <script src="./slick/slick.min.js" type="text/javascript" charset="utf-8"></script>
          <script type="text/javascript">
            $(document).on('ready', function() {
              $(".lazy").slick({
                lazyLoad: 'ondemand', // ondemand progressive anticipated
                infinite: true
              });
            });
            </script>

                </main>
                <footer tabindex="1">
                    <?php include 'includes/footer.php';?>
                </footer>
    </body> 
</html>