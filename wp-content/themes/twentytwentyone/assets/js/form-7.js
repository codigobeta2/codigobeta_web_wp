document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los inputs, textareas y labels dentro del formulario
    const inputs = document.querySelectorAll('.wpcf7-form-control');
    const labels = document.querySelectorAll('label');
    const form = document.querySelector('.wpcf7-form'); // Asume que el formulario tiene esta clase

    function removeAllUpClasses() {
        // Elimina la clase 'up' de todos los labels
        labels.forEach(label => label.classList.remove('up'));
    }

    function addClassToLabel(label) {
        // Añade la clase 'up' al label específico
        label.classList.add('up');
    }

    function handleFocus(input) {
        // Encuentra el contenedor <p> del input actual
        const container = input.closest('p');

        if (container) {
            // Encuentra el label dentro del contenedor <p>
            const label = container.querySelector('label');

            if (label) {
                addClassToLabel(label);
            }
        }
    }

    function handleBlur(input) {
        const container = input.closest('p');
        const label = container.querySelector('label');

        // Si el input está vacío, elimina la clase 'up' del label
        if (!input.value && label) {
            label.classList.remove('up');
        }
    }

    inputs.forEach(input => {
        // Añade la clase cuando el input recibe foco
        input.addEventListener('focus', () => handleFocus(input));

        // Mantiene la clase mientras el input tenga contenido
        input.addEventListener('input', () => handleFocus(input));

        // Controla la clase 'up' cuando el input pierde el foco
        input.addEventListener('blur', () => handleBlur(input));
    });

    labels.forEach(label => {
        label.addEventListener('click', function(event) {
            // Previene el comportamiento por defecto del label
            event.preventDefault();

            // Encuentra el input asociado al label
            const input = label.parentElement.querySelector('.wpcf7-form-control');
            if (input) {
                // Coloca el foco en el input asociado
                input.focus();

                // Simula un clic en el input para asegurarse de que el cursor esté dentro
                input.click();

                // Añade la clase 'up' al label
                handleFocus(input);
            }
        });
    });

    // Mantener la clase 'up' en los labels de campos que ya tienen contenido
    inputs.forEach(input => {
        if (input.value) {
            handleFocus(input);
        }
    });
});
