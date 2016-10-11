### This is the newest version of my rails app.

This application uses **_Ruby 2.2.4_** patch 230 (ruby 2.2.4p230) along with **_Rails 5.0.0_**
This version uses mysql2 in the place of sqlite3 as the default database manager and paperclip for managing profile pictures.
All gems are listed below.
* `paperclip ~> 4.2`
* `mysql2, ~> 0.4.4`
* `sass-rails ~> 5.0`
* `uglifier >= 1.3.0`
* `jquery-rails`
* `turbolinks`
* `jbuilder ~> 2.0`
* `sdoc ~> 0.4.0`
* `byebug (for test and development environments)`
* `web-console ~> 2.0 (for development environments only)`
* `spring (for development environments only)`

Since the upgrade to mysql from sqlite3, there are two databases for development and testing environments.
These databases are stored on the developer's local machine and are listed below.

- `cms_portfolio_dev` is the database used for development
- `cms_portfolio_test` is the database used for testing

All changes to my personal portfolio will most likely be on this application
Log of current implemented/transitioned features is organized below;
### Material Messenger
* User database
* Card-style sign up page
* Sliding side menu
* Fully equipped navigation bar
* Login and logout functions
* Sign up function
* Settings menu
* List of other users
* Profile pictures

### Index page
* Dynamic navigation bar
* Preview of my work on first card
* Material Messenger(mm) icon on second card

Routing table below. This table is also in the `config/routes.rb` file.

|Prefix              |Verb  |URI Pattern                    |Controller#Action
|:-------------------|:-----|:------------------------------|:----------------
|root                |GET   |/                              |core#index
|core_projects       |GET   |/core/projects(.:format)       |core#projects
|core_nutrition_facts|GET   |/core/nutrition_facts(.:format)|core#nutrition_facts
|core_getmessenger   |GET   |/core/getmessenger(.:format)   |core#getmessenger
|mm_users_logout     |GET   |/mm_users/logout(.:format)     |mm_users#logout
|mm_users_logon      |GET   |/mm_users/logon(.:format)      |mm_users#logon
|mm_users_login      |POST  |/mm_users/login(.:format)      |mm_users#login
|mm_users            |POST  |/mm_users(.:format)            |mm_users#create
|mm_users_router     |GET   |/mm_users/router(.:format)     |mm_users#reroute
|new_mm_user         |GET   |/mm_users/new(.:format)        |mm_users#new
|mm_user             |GET   |/mm_users/:id(.:format)        |mm_users#show
|{none}              |DELETE|/mm_users/:id(.:format)        |mm_users#destroy
