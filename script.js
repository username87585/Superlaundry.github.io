document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("booking-form");

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const option = document.getElementById("option").value;
    const loadSize = document.getElementById("load").value;
    const service = document.getElementById("service").value;
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const instructions = document.getElementById("instructions").value.trim();
    const payment = document.getElementById("payment").value;

    // Validate form
    if (!option || !loadSize || !service || !address || !email || !phone || !payment) {
      alert("Please fill in all the required fields!");
      return;
    }

    // Prepare the form data to be sent to Formspree
    const formData = new FormData();
    formData.append("option", option);
    formData.append("load", loadSize);
    formData.append("service", service);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("instructions", instructions ? instructions : "None");
    formData.append("payment", payment);

    // Send the form data to Formspree
    fetch("https://formspree.io/f/xzzdgwyo", {
      method: "POST",
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      alert("Booking confirmed! Your details have been submitted.");
      // Optionally, clear the form
      bookingForm.reset();
    })
    .catch((error) => {
      console.error("Error sending booking details: ", error);
      alert("There was an error with your booking. Please try again.");
    });
  });
});


