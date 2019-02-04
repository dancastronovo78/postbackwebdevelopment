<!DOCTYPE HTML>
<html lang="en">
    <head>
        <title>Postback Connect</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/connect.css" rel="stylesheet" />
        <link href="css/connectMediaQuery.css" rel="stylesheet" />
         <link href="css/nav.css" rel="stylesheet" />
         <link href="css/social.css" rel="stylesheet" />
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
 <meta name="description" content="Looking for dynamic designs for web development, web video production, graphic design, and eLearning development, Postback Web Development is here for you! Contanct Postback Web Development.">
        <meta name="keywords"   content="Postback, Postback Austin, Postback Austin Texas, Postback Austin TX,  Postback Web Development, Postback Web Development Austin, Postback Web Development Austin Texas, Postback Web Development Austin TX, Daniel Castronovo, Daniel Castronovo Austin, Daniel Castronovo Austin Texas, Daniel Castronovo Austin TX, Freelance, Freelance Web Developer, Freelance Web developer Austin, Freelance Web developer Austin Texas, Freelance Web developer Austin TX, Daniel Castronovo Freelance Web Developer, Daniel Castronovo Freelance Web developer Austin, Daniel Castronovo Freelance Web developer Austin Texas, Daniel Castronovo Freelance Web developer Austin TX,  Web development, Web development Austin, Web development Austin Texas, Web development Austin TX, Web design, Web design Austin, Web design Austin Texas, Web design Austin TX, Front end development, Front end development Austin, Front end development Austin Texas, Front end development Austin TX, Back end development, Back end development Austin, Back end development Austin Texas, Back end development Austin TX, Fullstack development, Fullstack development Austin, Fullstack development Austin Texas, Fullstack development Austin TX, JavaScript, Web designer, Web designer Austin, Web designer Austin Texas, Web designer Austin TX, Front end developer, Front end developer Austin, Front end developer Austin Texas, Front end developer Austin TX, Back end developer, Back end developer Austin, Back end developer Austin Texas, Back end developer Austin TX, Fullstack developer, Fullstack developer Austin, Fullstack developer Austin Texas, Fullstack developer Austin TX, Full stack developer, Full stack developer Austin, Full stack developer Austin Texas, Full stack developer Austin TX, Full stack development, Full stack development Austin, Full stack development Austin Texas, Full stack development Austin TX, ASP, PHP, jQuery, MySql, SQL, Graphic design, Web video, Web video production, Web video design, Web video development, elearning, E-Learing, eLearning, ELearning,">
        <script src="js/nav.js"></script>
    </head>
    <body>
        <header>
            <?php include 'includes/header.php';?>
        </header>
        <div id="titleH1"><h1 tabindex="1">Connect</h1></div>
          <!--Main Container-->
        <div>
        <main id="mainContainer">
            <div id="col1" class="col4">
                <div class="emptyDiv1">
                    <h2 class="cardH2" tabindex="1">We want to hear what you have to say!</h2>
                <p class="card">Go ahead and send us a message and let us know how we can partner with you. Postback is here to help see your goals realized. We look forward to new challenges and exciting outcomes. Postback wants to change the way you view dynamic issues by providing creative and unique web solutions that meet your business or personal requirements.</p>
                <p class="card">We look forward to hearing from you!</p>
                    <p class="card">-Postback</p> 
                </div>
            </div>
            <div id="col2" class="col4">
                 <div class="emptyDiv2">
                     <form id="form1" method="post" action="send_email.php">
                         <fieldset>
                             <legend>Contact Form</legend>
                             <input type="text" id="fname" name="fname" aria-label="First name" placeholder="First Name" required>
                             <input type="text" id="lname" name="lname" aria-label="Last name" placeholder="Last Name" required>
                             <input type="email" id="email" name="email" aria-label="Email" placeholder="Email" required>
                             <textarea id="msgBox" name="msgBox" aria-label="Message box" placeholder="Leaves us a message" required></textarea>
                             <input type="submit" value="Submit" name="submit" id="myBtn">
                         </fieldset>
                    </form>
                </div>
            </div>
           </main>
       </div>
          <footer tabindex="1">
            <?php include 'includes/footer.php';?>
          </footer>
          <div id="social">
                <?php include 'includes/social.php'; ?>
            </div>
    </body> 
</html>