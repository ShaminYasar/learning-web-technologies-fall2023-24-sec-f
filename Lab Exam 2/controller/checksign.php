<?php 
    session_start();
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    if($username == "" || $password == "" ){
        echo "no user is found";

    }else if ($username == $_SESSION['user']['username'] && $password == $_SESSION['user']['password']){
        $_SESSION['flag'] = 'true';
        header('location: homepage.html');
    }else{
        echo "invalid user!";
    }
?>