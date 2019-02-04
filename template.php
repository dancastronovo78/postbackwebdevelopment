<!DOCTYPE HTML>
<html>
    <head>
        <title>Postback Template</title>
        <link href="main.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100" rel="stylesheet">
        <script type = "text/javascript" 
         src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>
		
      <script type = "text/javascript" 
         src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js">
      </script>
      <script src="js/cardHover.js"></script>
      <script src="js/cardHoverBack.js"></script>
    </head>
    <body>
        <header>
                <?php include('includes/header.php');?>
        </header>
        <div id="titleH1"><h1>Title</h1></div>
        <div id="mainContainer">
            <!--Main Container-->
            <div id="col1" class="col4"><h2 class="cardH2">Column 1</h2></div>
            <div id="col2" class="col4"><h2 class="cardH2">Column 2</h2></div>
            <div id="col3" class="col4"><h2 class="cardH2">Column 3</h2></div>
            <div id="col4" class="col4"><h2 class="cardH2">Column 4</h2></div>
        </div>
        <footer>
            <?php include('includes/footer.php');?>
        </footer>
    </body> 
</html>