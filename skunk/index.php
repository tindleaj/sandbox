<?php

// It all starts here


$context = Timber::get_context();
$templates = array('index.twig');
Timber::render($templates, $context);


?>
