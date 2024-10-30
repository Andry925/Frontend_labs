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
