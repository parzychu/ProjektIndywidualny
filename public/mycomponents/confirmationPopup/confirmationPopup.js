(function confirmationPopupWrapper() {
    'use strict';

    window.ConfirmationPopup = Polymer({
        is: 'pi-confirmation-popup',
        properties: {
            msg: {
                type: String,
                observer: '_msgChanged'
            }
        },

        _msgChanged: function _msgChanged() {
            var msgElement = this.$$('#confirmation-popup-msg');

            msgElement.innerHTML = this.msg;
        },

        factoryImpl: function(msg) {
            this.msg = msg;
        },

        attached: function() {
            var self = this,
                confirmationPopup = self.$$('paper-dialog');

            function confirmationPopupClosed() {
                var closingReason = confirmationPopup.closingReason;

                self.closingReason = closingReason;
                self.fire('popup-closed', closingReason);
            }
            confirmationPopup.addEventListener('iron-overlay-closed', confirmationPopupClosed.bind(this));
        },

        detached: function() {
            confirmationPopup.removeEventListener('iron-overlay-closed');
        },

        open: function open() {
            this.$$('paper-dialog').open();
        }

    });
})();
