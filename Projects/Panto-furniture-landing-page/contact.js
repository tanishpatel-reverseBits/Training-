const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phoneNumber").value,
    city: document.getElementById("city").value,

    inquiryType: document.getElementById("inquiryType").value,
    productName: document.getElementById("productName").value,
    material: document.getElementById("preferredMaterial").value,

    message: document.getElementById("message").value,

    preferredContact:
      document.querySelector('input[name="contact"]:checked')?.value || null,

    urgent: document.getElementById("urgent").checked,
  };

  console.log("Contact Form Data:", formData);

  event.target.reset();
});
