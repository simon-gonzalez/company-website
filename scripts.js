document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('diagnostic-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            displaySuccessMessage();
        }
    });

    function validateForm() {
        const companyName = document.getElementById('company-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const additionalInfo = document.getElementById('additional-info').value;

        if (companyName === '' || email === '' || phone === '' || additionalInfo === '') {
            alert('Please fill in all fields.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function displaySuccessMessage() {
        alert('Form submitted successfully!');
    }
});
