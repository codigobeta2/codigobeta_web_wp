document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tooltip');

    buttons.forEach(buttonWrapper => {
        const button = buttonWrapper.querySelector('.tooltip-button');
        const infoBox = buttonWrapper.querySelector('.tooltip-box');
        const closeButton = infoBox.querySelector('button'); // Selecciona el botón "Close"

        const showInfoBox = () => {
            const buttonRect = button.getBoundingClientRect();
            const infoBoxRect = infoBox.getBoundingClientRect();
            const spaceAbove = buttonRect.top;
            const spaceBelow = window.innerHeight - buttonRect.bottom;
            const spaceRight = window.innerWidth - buttonRect.right;

            // Ajusta la posición del info-box dependiendo del espacio disponible
            if (spaceAbove > infoBoxRect.height) {
                infoBox.style.top = '';
                infoBox.style.bottom = '100%';
            } else if (spaceBelow > infoBoxRect.height) {
                infoBox.style.top = '100%';
                infoBox.style.bottom = '';
            } else {
                infoBox.style.top = '100%';
                infoBox.style.bottom = '';
            }

            // Ajusta la posición horizontal
            if (spaceRight < infoBoxRect.width) {
                infoBox.style.left = 'auto';
                infoBox.style.right = '0';
            } else {
                infoBox.style.left = '0';
                infoBox.style.right = '';
            }

            infoBox.style.display = 'block'; // Mostrar el info-box
        };

        const hideInfoBox = () => {
            infoBox.style.display = 'none'; // Ocultar el info-box
        };

        button.addEventListener('mouseover', showInfoBox);
        button.addEventListener('mouseout', hideInfoBox);

        // También puedes agregar estos eventos al contenedor si quieres que el comportamiento sea más robusto
        buttonWrapper.addEventListener('mouseover', showInfoBox);
        buttonWrapper.addEventListener('mouseout', hideInfoBox);

        // Cerrar el tooltip al hacer clic en el botón "Close"
        closeButton.addEventListener('click', hideInfoBox);
    });
});
