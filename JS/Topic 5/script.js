// Convert callbacks to promises
// Callback
function getData(callback) {
  setTimeout(() => {
    callback(null, "DATA RECEIVED");
  }, 1000);
}

getData((err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

// promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("DATA RECEIVED");
  }, 1000);
});

promise.then((value) => console.log(value)).catch((err) => console.log(err));

// Handle API calls with async/await
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchData();

// Implement retry logic
function unstableTask() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.6;
    setTimeout(() => {
      if (success) {
        resolve("Task completed successfully");
      } else {
        reject("Task failed");
      }
    }, 500);
  });
}

async function retryTask(task, retries) {
  try {
    const result = await task();
    return result;
  } catch (error) {
    if (retries === 0) {
      throw error;
    }
    return retryTask(task, retries - 1);
  }
}

retryTask(unstableTask, 5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("All retries failed:", error);
  });
