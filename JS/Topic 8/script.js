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

    debugger;

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

// Implement Global Error Handling
class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "AppError";
    this.status = status;
  }
}

function getUser(id) {
  if (!id) {
    throw new AppError("User ID is required", 400);
  }

  if (id != 1) {
    throw new AppError("Invalid user ID", 400);
  }

  return { id: 1, name: "Tanish" };
}

async function fetchOrders(userId) {
  if (!userId) {
    throw new Error("Orders: userId missing");
  }

  return ["order-1", "order-2"];
}

function GlobalErrorHandler(error) {
  console.error("Global Error Caught:", {
    name: error.name,
    message: error.message,
    status: error.status || "N/A",
  });
}

async function main() {
  try {
    const user = getUser(2);
    const orders = await fetchOrders(user.id);
    console.log("Orders fetched:", orders);
  } catch (error) {
    GlobalErrorHandler(error);
  }
}

main();

// Handle API errors properly
async function loadUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/invalid-url");

    // ❗ fetch does NOT throw on 404/500
    if (!res.ok) {
      throw new Error("Server error: " + res.status);
    }

    const data = await res.json();
    console.log("Users:", data);
  } catch (error) {
    console.error("API ERROR:", error.message);
    alert("Failed to load users");
  }
}

loadUsers();
