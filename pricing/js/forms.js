const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const cityInput = document.getElementById('city');
    const stateInput = document.getElementById('state');
    const pincodeInput = document.getElementById('pincode');

    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const cityValue = cityInput.value.trim();
    const stateValue = stateInput.value.trim();
    const pincodeValue = pincodeInput.value.trim();

    // Validate First Name and Last Name (Should contain at least one alphabet)
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstNameValue) || !nameRegex.test(lastNameValue)) {
        alert('First Name and Last Name should contain at least one alphabet.');
        return;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate Phone (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneValue)) {
        alert('Phone number must be 10 digits.');
        return;
    }

    // Validate City, State, and Pincode
    const alphanumericRegex = /^[A-Za-z\s]+$/;
    const pincodeRegex = /^[0-9]{6}$/;
    if (
        !alphanumericRegex.test(cityValue) ||
        !alphanumericRegex.test(stateValue) ||
        !pincodeRegex.test(pincodeValue)
    ) {
        alert('Please enter valid City, State, and Pincode.');
        return;
    }

    const bodyContent = `First Name: ${firstNameValue}\nLast Name: ${lastNameValue}\nEmail: ${emailValue}\nPhone: ${phoneValue}\nCity: ${cityValue}\nState: ${stateValue}\nPincode: ${pincodeValue}`;
    const emailLink = `mailto:infinityschoolofbanking@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = emailLink;
});