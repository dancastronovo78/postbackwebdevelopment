<div id="logoDiv">
    <a href="index.php" tabindex="1"><img id="logoImg" src="images/logo.png" alt="Postback logo." /></a>
</div>
<nav id="navDiv">
    <div tabindex="1" id="navClick" title="Nav bar." class="container" onclick="myFunction2(this)">
        <div id="bar1" class="bar1"></div>
        <div id="bar2" class="bar2"></div>
        <div id="bar3" class="bar3"></div> 
    </div>
    <div id="myDropdown" class="dropdown-content">
        <a href="index.php">Home</a>
        <a href="about.php">Who is Postback</a>
        <a href="projects.php">Projects</a>
        <a href="connect.php">Connect</a>
        <a href="tidbits.php">Tidbits</a>
    </div>
    <script>
    var input = document.getElementById("navDiv");
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("navClick").click();
        }
    });
    </script>
</nav>    