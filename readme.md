MOBILE NAVIGATION
===================

Mobile Navigation helps you easily implement a nice solution for displaying
menus on the mobile version of a responsive website.

I have found many ways of doing this out there, but they are not precisely
the best solution regarding performance or they need the work of implementing
a third party JQuery plugin or having to learn javascript and programming the
whole thing.

With this module you may only need to install the module as usual and then
out of the box have all that is needed to implement a mobile version for menus,
featuring some simple configurations that will let you personalize the behavior
of this mobile versions.

CONTENTS OF THIS FILE
---------------------

 - Introduction
 - Tested
 - Known Issues
 - Special Thanks
 - Requirements
 - Installation
 - Coming From Drupal?
 - Usage
 - License
 - Credits
 - Maintainers

TESTED
-----

Tested working in Backdrop 1.1

KNOWN ISSUES
---------------------

This module may conflict with a theme's mobile menu or the Responsive Menus module.

Not all themes work with every style of the mobile navigation button out of the box currently. You may have to write some CSS to make it work with your theme. Since there are so few themes for Backdrop CMS at the present, we probably will have the time to update this module for workarounds for all the released themes currently in 8/2015, so stay tuned.

SPECIAL THANKS
--------------

The Mobile Navigation module is sponsored by: MAGA Systems & Consulting. <https://drupal.org/node/2069385>
Wanna sponsor? please contact me. <https://drupal.org/user/843624>

REQUIREMENTS
------------

none

INSTALLATION
------------

Install this module using the official Backdrop CMS instructions at https://backdropcms.org/guide/modules

1. Download and extract the Mobile Navigation Module into the modules directory.
2. Go to /admin/config/user-interface/mobile_navigation. Configure.

COMING FROM DRUPAL?
-------------------

Nothing substantially different.

PERMISSIONS
------------

@todo


USAGE
-----

Currently Mobile Navigation only gets along with menus that uses tag < ul > for
the menu and < li > for menu items.
Mobile Navigation module uses some Javascript to clone the current menu of your
website and creates a version of it with a diferent behavior adapted to mobile.

At the Mobile Navigation configuration page you can administer Mobile Navigation settings. You must set two parameters for the transformation to take place:

    A Media Query for the breakpoint.

    This media query must reflect the range
    in which you don't want the mobile version to show up, that is the not
    Mobile Range of your website. The reason for this is that Media Queries
    are pretty complex stuff and usually responsive themes don't have mobile
    media query, they have media queries for the NOT MOBILE displays, so you
    can easily copy this media query from your preferred theme configuration,
    being Omega, Adaptive, any responsive theme.

    The other parameter that must be defined is the Menu Element Selector.

    By default this value is the selector for the menu the Bartik theme has by default
    (Bartik is the default Backdrop 7 theme).
    When using other menu configurations or modules(Superfish, Megamenu, any
    module you like or the Backdrop main menu), you'll have to check for the
    corret selector, that might be #supefish-1, #megamenu-menu,
    #navigation .menu, etc.
    Additionally there is the Mobile navigation behaviors configuration:

    Select a plugin for the menu. Currently suported plugins: Basic: Simply
    slide showing the menu, without any special behavior on its contents.

    Accordion: Show menu and its submenus in a organized accordion structure.
    Applies only when the menu includes submenus.

    For the accordion plugin, you can set persistance of opened items so you
    can have many submenus opened, or you may permit only current active
    trail to be oppened, so when you open a submenu, any other opened submenu
    will automaticaly close.

There is an option on the way the menu shows up, the location and the
direction.

Finally there is the option to have a tab handler attached to the menu.
Enjoy!

LICENSE
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for complete text.

CREDITS
-----------

This module is based on the Mobile Navigation module for Drupal, originally written and maintained by a large number of contributors, including:

- x7ian <https://www.drupal.org/u/x7ian>
- lauriii <https://www.drupal.org/u/lauriii>

MAINTAINERS
-----------

- biolithic <https://github.com/biolithic>

Ported to Backdrop by:

 - biolithic <https://github.com/biolithic>
