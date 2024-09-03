(function() {
    const addEventListenerOriginal = EventTarget.prototype.addEventListener;

    EventTarget.prototype.addEventListener = function(type, listener, options) {
        let useCapture = false;

        if (typeof options === 'boolean') {
            useCapture = options;
            options = { passive: false, capture: useCapture }; // Cambiar passive a false
        } else if (typeof options === 'object' && options !== null) {
            useCapture = options.capture || false;

            if (type === 'touchstart' || type === 'touchmove') {
                // Solo establece `passive: false`
                options.passive = false;
            }
        } else {
            // Si options es undefined, convierte a objeto con `passive: false`
            if (type === 'touchstart' || type === 'touchmove') {
                options = { passive: false, capture: useCapture };
            }
        }

        // Llama al método original con las opciones modificadas
        addEventListenerOriginal.call(this, type, listener, options);
    };
})();

