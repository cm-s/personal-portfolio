##This is the rails app for my portfolio
This application uses **_Ruby 2.3.1_** patch 112 (ruby 2.3.1p112) along with **_Rails 4.2.6_**
This version uses mysql in the place of sqlite3 as the default database manager, with all the gems listed below;
* mysql ~> 2.9, >= 2.9.1
* sass-rails ~> 5.0
* uglifier >= 1.3.0
* jquery-rails
* turbolinks
* jbuilder ~> 2.0
* sdoc ~> 0.4.0
* byebug (for test and development environments)
* web-console ~> 2.0 (for development environments only)
* spring (for development environments only)

Since the upgrade to mysql from sqlite3, there are two databases for development and testing environments.
These databases are stored on the developer's local machine and are listed below.

- cms_portfolio_dev is the database used for development
- cms_portfolio_test is the database used for testing

All changes to my personal portfolio will most likely be on this application
Log of current implemented/transitioned features is organized below;
###Material Messenger
* User database
* Card-style sign up page
* Sliding side menu
* Fully equipped navigation bar
* Login and logout functions
* Settings menu
* 'Friends' list

###Index page
* Dynamic navigation bar
* Preview of my work on first card
