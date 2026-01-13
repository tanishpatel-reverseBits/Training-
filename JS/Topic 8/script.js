class InvalidNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidNumberError";
  }
}

function inchesToMeters(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new InvalidNumberError("Input must be a number");
  }

  const mVal = (num * 2.54) / 100;
  console.log(mVal);

  const m2dp = mVal.toFixed(3);
  return m2dp;
}

console.log(inchesToMeters(12));

// Master Example
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

function validateForm(data) {
  if (!data.name) {
    throw new ValidationError("Name is required");
  }

  if (!data.email.includes("@")) {
    throw new ValidationError("Invalid email address");
  }
}

function fakeApiRequest(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.4;

      if (!success) {
        reject(new NetworkError("Failed to connect to server"));
      } else {
        resolve({ status: "ok" });
      }
    }, 1000);
  });
}

async function submitContactForm(formData) {
  try {
    console.log("Submitting form data:", formData);

    validateForm(formData);

    debugger; // pause here during debugging if needed

    const response = await fakeApiRequest(formData);

    console.log("Server response:", response);

    return "Form submitted successfully";
  } catch (error) {
    console.error("Submission failed", {
      errorName: error.name,
      message: error.message,
      data: formData,
    });

    if (error instanceof ValidationError) {
      return `Validation Error: ${error.message}`;
    }

    if (error instanceof NetworkError) {
      return "Network issue. Please try again later.";
    }

    return "Unexpected error occurred.";
  } finally {
    console.log("Submission attempt finished");
  }
}

const formData = { name: "Bob", email: "bobexample.com" };

submitContactForm(formData).then((result) => {
  console.log("Result:", result);
});
