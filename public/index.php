<?php

// Valid PHP Version?
$minPHPVersion = '7.3';
if (version_compare(PHP_VERSION, $minPHPVersion, '<'))
{
    die("Your PHP version must be {$minPHPVersion} or higher to run CodeIgniter. Current version: " . PHP_VERSION);
}
unset($minPHPVersion);

// Path to the front controller (this file)
define('FCPATH', __DIR__ . DIRECTORY_SEPARATOR);

/*
 *---------------------------------------------------------------
 * BOOTSTRAP THE APPLICATION
 *---------------------------------------------------------------
 * This process sets up the path constants, loads and registers
 * our autoloader, along with Composer's, loads our constants
 * and fires up an environment-specific bootstrapping.
 */

// Ensure the current directory is pointing to the front controller's directory
chdir(__DIR__);

function get_sub_domain(){
    preg_match("/(([a-z0-9\-]+\.)*)([a-z0-9\-]+)\.([a-z]{3,4}|[a-z]{2,3}\.[a-z]{2})(\:[0-9]+)?$/", $_SERVER['HTTP_HOST'], $matches);
    $sub_domain = null;
    if($matches[1]) $sub_domain = substr($matches[1], 0, -1);

    return $sub_domain;
}

/**
 * @date 20210625
 * @modify 황기석
 * @desc public 경로지정
 */
define("HOMEPATH", str_replace("\\", "/", dirname(__DIR__)));
define("DOCROOT", HOMEPATH . "/public");

$subdomain = 'cli';
if(isset($_SERVER['HTTP_HOST']) == true){
    $host = $_SERVER['HTTP_HOST'];
    // Extract eventual subdomain
    $subdomain = get_sub_domain();
    if(empty($subdomain) == true) $subdomain = 'www';
}

// Load our paths config file
// This is the line that might need to be changed, depending on your folder structure.
require realpath(FCPATH . '../app_'.$subdomain.'/app/Config/Paths.php') ?: FCPATH . '../app_'.$subdomain.'/app/Config/Paths.php';
//require realpath(FCPATH . '../app/Config/Paths.php') ?: FCPATH . '../app/Config/Paths.php';
$paths = new Config\Paths();
// ^^^ Change this if you move your application folder
// Location of the framework bootstrap file.
$bootstrap = rtrim($paths->systemDirectory, '\\/ ') . DIRECTORY_SEPARATOR . 'bootstrap.php';
$app       = require realpath($bootstrap) ?: $bootstrap;

/*
 *---------------------------------------------------------------
 * LAUNCH THE APPLICATION
 *---------------------------------------------------------------
 * Now that everything is setup, it's time to actually fire
 * up the engines and make this app do its thang.
 */
$app->run();
