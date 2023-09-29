const colorDisplay = document.getElementById('color-display');
        const colorPicker = document.getElementById('color-input');
        const generateButton = document.getElementById('generate-button');

        
        function updateBackgroundColor(color) {
            document.body.style.backgroundColor = color;
            colorDisplay.textContent = `Background Color: ${color}`;
        }

        
        colorPicker.addEventListener('input', () => {
            const selectedColor = colorPicker.value;
            updateBackgroundColor(selectedColor);
        });

        
        generateButton.addEventListener('click', () => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            colorPicker.value = randomColor;
            updateBackgroundColor(randomColor);
        });