## This is the newest version of my rails app.
### Gems Setup
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

### Database Setup
Since the upgrade to mysql from sqlite3, there are two databases for development and testing environments.
These databases are listed below.

- `cms_portfolio_dev` is the database used for development
- `cms_portfolio_test` is the database used for testing

The database configuration assumes you have a user named "dev" for development and a user named "test" for testing.  
There are also two environment variables that refer to the development database password and the testing database password. You can set these to your passwords by ensuring you have the following lines in your `~/.bashrc` or equivalent profile.
- `export development_db_password=PASSWORD`  
- `export testing_db_password=PASSWORD`  

PASSWORD being replaced by your password. Alternatively, you can simply alter the user and password fields in the `config/database.yml` file.
### Current Features
Log of current implemented/transitioned features is organized below;
##### Material Messenger
* User database
* Card-style sign up page
* Sliding side menu
* Fully equipped navigation bar
* Login and logout functions
* Sign up function
* Settings menu
* List of other users
* Profile pictures

##### Index page
* Dynamic navigation bar
* Preview of my work on first card
* Material Messenger(mm) icon on second card

### Routing

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
|new_mm_user         |GET   |/mm_users/new(.:format)        |mm_users#new
|mm_user             |GET   |/mm_users/:id(.:format)        |mm_users#show
|{none}              |DELETE|/mm_users/:id(.:format)        |mm_users#destroy


### Elements
Below is a table describing the place purpose of all element ID's and classes that are integrated into any of the markup in `app/views`, `app/assets/stylesheets` and `app/assets/javascripts`

| Element ID/Class         | Location                              | Definition
|:-------------------------|:--------------------------------------|:------------
| .mdi-dark                | Core & Messenger, multiple views      | Specifies color for dark Material Design icons
| .mdi-light               | Core & Messenger, multiple views      | Specified color for dark Material Design icons
| .mdi-inactive            | Core & Messenger, multiple views      | Specifies color for inactive icons respecifvely
| #index                   | Core, Index view only                 | Label for the body of index page
| #shroud                  | Core, Index view only                 | Element shrouding the user's view, when loading another page
| #standoff                | Core, Index view only                 | Loading text, residing in the #shroud
| .ripple                  | Core & Messenger, single view each    | Asethetic ripple emenating from every .button
| .button                  | Core & Messenger & Projects           | Single equilateral button made up of a Material Design icon.
| #toTop                   | Core, Index view only                 | Button taking the user to the top of the page
| #github                  | Core, Index view only                 | Button directing the user to my github page
| #github_link             | Core, Index view only                 | Github button label text
| #gradient-shadow         | Core, Index view only                 | A shadow blending the back bg with the bg image
| #card-stack              | Core, Index view only                 | Container for all three cards
| #card-one                | Core, Index view only                 | First card of the page
| #card-two                | Core, Index view only                 | Second card of the page
| #card-three              | Core, Index view only                 | Third card of the page
| #intro-container         | Core, Index view only                 | Container for my introductory sentence
| #portrait                | Core, Index view only                 | Image of myself
| #terminal-sect-container | Core, Index view only                 | Container for terminal's elements
| #terminal-explanation    | Core, Index view only                 | Paragraph accompanying the terminal
| #caveat                  | Core, Index view only                 | Special highlighted text, triggering when hovered
| #python                  | Core, Index view only                 | "Python" colored highlighting
| #java                    | Core, Index view only                 | "Java" colored highlighting
| #cplusplus               | Core, Index view only                 | "C++" colored highlighting
| #console-container       | Core, Index view only                 | Container for terminal itself
| #console-navbar          | Core, Index view only                 | Navigation bar of terminal
| .console-navbutton       | Core, Index view only                 | Navbutton in the terminal's navbar
| #window-close            | Core, Index view only                 | Close button for terminal
| #window-min              | Core, Index view only                 | Minimize button for terminal
| #window-max              | Core, Index view only                 | Maximize button for terminal
| #console-window-title    | Core, Index view only                 | Title for terminal
| #console-window          | Core, Index view only                 | Terminal's window's content container
| .terminal-line           | Core, Index view only                 | Line of text in the terminal
| #terminal-last-line      | Core, Index view only                 | Container for last line of the terminal
| #terminal-last-text      | Core, Index view only                 | Last line of text in the terminal
| #cursor                  | Core, Index view only                 | Blinking cursor in the terminal
| #card-one-footer         | Core, Index view only                 | Footer text for the first card
| #site-ext-container      | Core, Index view only                 | Container for topics
| .topic-container         | Core, Index view only                 | Container for individual topic
| .topic-title             | Core, Index view only                 | Text titling each topic
| #mm-title                | Core, Index view only                 | Messenger's topic title
| .canvas                  | Core, index view only                 | Container for topic artwork
| .mm-icon-text-line       | Core, Index view only                 | Line within Messenger's icon
| #mm-icon-right-bottom    | Core, Index view only                 | Right bottom pointed icon part
| .background-bottom       | Core, Index view only                 | Bottom background of icon part
| #blue-cutoff-left        | Core, Index view only                 | Left bottom background of icon part
| #blue-cutoff-right       | Core, Index view only                 | Right bottom background of icon part
| .mm-background-bubble    | Core, Index view only                 | Floating background bubble of Messenger's artwork
| .dritfting_direc1        | Core, Index view only                 | Class applying first drifting direction
| .dritfting_direc2        | Core, Index view only                 | Class applying second drifting direction
| .dritfting_direc3        | Core, Index view only                 | Class applying third drifting direction
| #mm-center-bubble        | Core, Index view only                 | Centermost background bubble
| #mm-outer-bubble1        | Core, Index view only                 | One outer background bubble
| #mm-outer-bubble2        | Core, Index view only                 | One outer background bubble
| #mm-outer-bubble3        | Core, Index view only                 | One outer background bubble
| .topic-button            | Core, Index view only                 | Button linking to a topic
| #messenger-link          | Core, Index view only                 | Messenger specific styles for .topic-button
| #projects-link           | Core, Index view only                 | Specific styles for projects .topic-button
| #site-ext-info-container | Core, Index view only                 | Container for info on each topic
| .site-topic-info-sect    | Core, Index view only                 | An individual info section
| .mm-forum                | Messenger, login & logout views       | Forum generic styles
| .mm-forum-button         | Messenger, login & logout views       | Forum button generic styles
| .mm-forum-entry          | Messenger, login & logout views       | Forum entry generic styles
| #login-container         | Messenger, login view only            | ID tagging the login body
| #login-forum             | Messenger, login view only            | Specific styles for the login forum
| .mm-login                | Messenger, login view only            | Specific styles for login entries
| #user-name               | Messenger, login view only            | Specific styles for the user name forum entry
| #password                | Messenger, login view only            | Specific styles for the password forum entry
| #login-button            | Messenger, login view only            | Specific styles for the login button
| #login-shroud            | Messenger, login view only            | Specific styles for the login button's shroud
| #signup-forum            | Messenger, signup view only           | Specific styles for the signup forum
| #signup-subtext          | Messenger, signup view only           | Text below signup forum
| .mm-signup               | Messenger, signup view only           | Specific styles for signup entries
| #signup-button           | Messenger, signup view only           | Specific styles for the signup button
| #signup-shroud           | Messenger, signup view only           | Specific styles for the signup button shroud
| #messenger               | Messenger, all conversation views     | ID tagging messenger logged in view body
| #navbar-container        | Messenger, all conversation views     | Container for the navbar
| #searchbar               | Messenger, all conversation views     | Search bar for searching other users
| #menu                    | Messenger, all conversation views     | Menu button
| #settings                | Messenger, all conversation views     | Settings button
| #compose                 | Messenger, all conversation views     | Compose button
| #about                   | Messenger, all conversation views     | Details menu button
| #logout-container        | Messenger, all conversation views     | Container for logout button elements
| #content-section         | Messenger, all conversation views     | Section encapsulating all primary content
| #settings-dropdown       | Messenger, all conversation views     | Dropdown menu for settings & directories
| #sd-arrow                | Messenger, all conversation views     | Setting dropdown arrow
| .sd-index                | Messenger, all conversation views     | Setting dropdown item
| .sd-divider              | Messenger, all conversation views     | Divider for settings dropdown elements
| .revealed                | Messenger, all conversation views     | Shown state of an subjected object
| .hidden                  | Messenger, all conversation views     | hidden state of a subjected object
| #details-container       | Messenger, all conversation views     | Container for conversation details section
| .pressed                 | Messenger, all conversation views     | Pressed and/or animated state of object
| .reset                   | Messenger, all conversation views     | Reset or defauly state of object
| #details-header          | Messenger, all conversation views     | Header section of details section
| #profile-info-settings   | Messenger, all conversation views     | Conversation profile info settings button
| #details-options         | Messenger, all conversation views     | Details section's options container
| .account-color           | Messenger, all conversation views     | Element being colored with $messenger-blue
| .checkbox-ripple         | Messenger, all conversation views     | Aesthetic ripple animation after checking checkbox
| .checked                 | Messenger, all conversation views     | Checked state of a checkbox
| .unchecked               | Messenger, all conversation views     | Unchecked state of a checkbox
| #details-page-info       | Messenger, all conversation views     | Page info section of #details-container
