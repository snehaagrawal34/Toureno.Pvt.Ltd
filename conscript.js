document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // You can add your form submission logic here, such as sending the data to a server or displaying a success message
    alert('Your message has been sent!');

    // Reset the form fields after submission
    form.reset();
  });
});
