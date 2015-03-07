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
    <link rel="icon" href="assets/icon/favicon.ico">

    <title>Code to the rhythm of your Thinking</title>

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
        <h3 class="text-muted" style="text-align: center;">... Quickly and Easily, Code to the rhythm of your Thinking ...</h3>
      </div>

      <!-- Jumbotron -->
      <div class="jumbotron" style="padding-bottom: 20px;">
        <h1>&lt;{&gt; MeMRyCoDe &lt;}&gt;</h1>
        <p class="lead"><br />" Memorize your favorite language, being fast to coding and more productive. "<br />" Quickly and Easily, be a best programmer with these languages: "<br /><b>" HTML / CSS / JavaScript / PHP / Python / SQL / Java / C / C++ / Shell "</b></p>
        <p style="margin: 60px;"><a class="btn btn-lg btn-success col-lg-12" href="memrycode.php?lang=<?php echo $lang;?>" role="button">Get started</a></p>
      </div>

      <!-- Example row of columns -->
      <div class="row" style="margin-top: 70px;">
        <div class="col-lg-4">
          <h2>Memorize a Programming Language!</h2>
          <p class="text-danger">Read the codes prior to code!</p>
          <p>Store a programming language in your head is easy with this rule used in MemryCode tap the keywords (variables, conditions, functions, methods, arrays ...) coding more code and the success of the mastery of your favorite language is guaranteed. <b><a href="memrycode.php?lang=<?php echo $lang;?>" title="Try it!">Try it yourself !!!.</a></b></p>
        </div>
        <div class="col-lg-4">
          <h2>Coding Fast, Being Productive!</h2>
          <p class="text-success">Observe your progress!</p>
          <p>If you master a programming language, you code faster because you don't seek to know how to use a particular function, method, loop... or how to create an array, a variable,... with these conditions you will be more productive in your projects.</p>
       </div>
        <div class="col-lg-4">
          <h2>Mastering Your Keyboard!</h2>
          <p class="text-info">Tap more and more caracteres!</p>
          <p>On MemryCode you do not just hit some letters but rather of the characters used in programming languages such as (} "<> @ # _ + _ ~` |? + + - % ^ & ()''/\ ! ....). And numbers you become faster with your keyboard because you hit all possible characters.</p>
        </div>
      </div>

      <!-- Site footer -->
      <footer class="footer">
        <p style="margin-top: 50px;">&copy; 2014 MemryCode, Inc. &middot; <a href="#">Help</a> &middot; <a href="#">About</a></p>
      </footer>

    </div> <!-- /container -->


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="assets/js/bootstrap.min.js"></script>
  </body>
</html>
