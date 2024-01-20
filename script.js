document.addEventListener('DOMContentLoaded', function () {
    // Show feedback form when the envelope icon is clicked
    document.querySelector('.fa-envelope').addEventListener('click', function () {
        document.getElementById('feedback-form').style.display = 'block';
    });

    // Handle form submission
    document.getElementById('feedbackForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
        // You can add code here to handle the form submission, for example, send the feedback to a server.
        // For now, let's just hide the form.
        document.getElementById('feedback-form').style.display = 'none';
        alert('Thank you for your feedback!');
    });
});