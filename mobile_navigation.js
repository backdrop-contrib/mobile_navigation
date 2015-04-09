/**
 * @file
 * Mobile navigation behavior definition.
 *
 * Get fron Backdrop the settings specified on mobile navigation administration page
 * and place them in a parameters structures to run the Mobile Menu plugin.
 */

(function($) {

  // Execute mobile-navigation construction with the settings on mobile_navigation.
  Backdrop.behaviors.mobile_navigation = {
    attach: function(context) {
      if ($(Backdrop.settings.mobile_navigation.menuSelector, context).length) {
        var settings = {
          breakpoint       : Backdrop.settings.mobile_navigation.breakpoint,
          menuPlugin       : Backdrop.settings.mobile_navigation.menuPlugin,
          showEffect       : Backdrop.settings.mobile_navigation.showEffect,
          showItems        : Backdrop.settings.mobile_navigation.showItems,
          tabHandler       : Backdrop.settings.mobile_navigation.tabHandler,
          menuWidth        : Backdrop.settings.mobile_navigation.menuWidth,
          specialClasses   : Backdrop.settings.mobile_navigation.specialClasses,
          mainPageSelector : Backdrop.settings.mobile_navigation.mainPageSelector,
          useMask          : Backdrop.settings.mobile_navigation.useMask,
          menuLabel        : Backdrop.settings.mobile_navigation.menuLabel,
          expandActive : Backdrop.settings.mobile_navigation.expandActive
        };
        $(Backdrop.settings.mobile_navigation.menuSelector, context).mobile_menu(settings);
      }
    }
  }

})(jQuery);
