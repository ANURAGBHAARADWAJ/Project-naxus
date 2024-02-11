document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const formDataObject = Object.fromEntries(formData.entries());

        // Send form data to the backend
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObject)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            contactForm.reset();
        })
        .catch(error => console.error('Error:', error));
    });
});
