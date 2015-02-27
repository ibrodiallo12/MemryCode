<?php
if(isset($_COOKIE['lang'])){
	$lang = $_COOKIE['lang'];
}else{$lang = 'HTML';}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Tap to beat of your thinking</title>

    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="container">
      <div class="masthead">
        <h3 class="text-muted" style="text-align: center;">... Quickly and Easily, Tap to the Beat of your Thinking ...</h3>
      </div>

      <!-- Jumbotron -->
      <div class="jumbotron" style="padding-bottom: 20px;">
        <h1>&lt;{&gt; MeMRyCoDe &lt;}&gt;</h1>
        <p class="lead"><br />" Memorize your favorite language, being fast to coding and more productif. "<br />" Quickly and Easily, tap to the beat of your thinking with these languages: "<br />"<b> HTML / CSS / JavaScript / PHP / Python / SQL "</b></p>
        <p style="margin: 60px;"><a class="btn btn-lg btn-success col-lg-12" href="memrycode.php?lang=<?php echo $lang;?>" role="button">Get started</a></p>
      </div>

      <!-- Example row of columns -->
      <div class="row" style="margin-top: 70px;">
        <div class="col-lg-4">
          <h2>Memorize Programming Language!</h2>
          <p class="text-danger">Make small wrongs.</p>
          <p>The memorize a programming language. You just need to the typing more code in that programming language and coding more because your head just need that.</p>
        </div>
        <div class="col-lg-4">
          <h2>Coding Fast!</h2>
          <p>If you got the code of a programming language in your head you will coding fast because your don't need to find the code</p>
       </div>
        <div class="col-lg-4">
          <h2>Memorize The Keyboard</h2>
          <p>Tap more and more on the buttons on your keyboard with all character who used on your programming language</p>
        </div>
      </div>

      <!-- Site footer -->
      <footer class="footer">
        <p>&copy; MemryCode 2015</p>
      </footer>

    </div> <!-- /container -->


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="assets/js/bootstrap.min.js"></script>
  </body>
</html>
