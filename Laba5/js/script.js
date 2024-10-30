const validate = (event) => {
    event.preventDefault();
    const inputs = document.getElementsByTagName('input');
    let allValid = true;

    for (let element of inputs) {
        const regexPattern = element.getAttribute('regex');
        const regex = new RegExp(`^${regexPattern}$`);
        const value = element.value;
        const errorMessage = document.getElementById(`error-${element.id}`);

        if (!regex.test(value)) {
            element.classList.add('error');
            errorMessage.style.display = 'block';
            allValid = false;
        } else {
            element.classList.remove('error');
            errorMessage.style.display = 'none';
        }
    }

    if (allValid) {
        displayValidatedData();
    }
};

const displayValidatedData = () => {
    document.getElementById('validated full-name').innerText = 'ПІБ: ' + document.getElementById('full-name').value;
    document.getElementById('validated group number').innerText = 'Група: ' + document.getElementById('group-number').value;
    document.getElementById('validated id-number').innerText = 'Номер id-картки: ' + document.getElementById('id-number').value;
    document.getElementById('validated birthday').innerText = 'День народження: ' + document.getElementById('birthday').value;
    document.getElementById('validated email').innerText = 'Email: ' + document.getElementById('email').value;
    document.getElementById('correct-data').style.display = 'block';
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const initializeColorPickerAndHoverEffect = () => {
    const cell = document.getElementById('my-cell-data');
    const colorPicker = document.getElementById('color-picker');

    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = getRandomColor();
    });

    cell.addEventListener('click', () => {
        colorPicker.click();
    });

    colorPicker.addEventListener('input', (event) => {
        cell.style.backgroundColor = event.target.value;
    });

    colorPicker.addEventListener('change', (event) => {
        cell.style.backgroundColor = event.target.value;
    });

    cell.addEventListener('dblclick', () => {
        changeColumnColors(cell);
    });
};

const changeColumnColors = (startingCell) => {
    const table = startingCell.closest('table');
    const cellIndex = startingCell.cellIndex;
    const color = getRandomColor();

    for (let i = cellIndex; i < table.rows[0].cells.length; i += 2) {
        for (let row of table.rows) {
            row.cells[i].style.backgroundColor = color;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initializeColorPickerAndHoverEffect();
});
