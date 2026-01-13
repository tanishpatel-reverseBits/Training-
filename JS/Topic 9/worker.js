onmessage = (e) => {
  const limit = e.data;
  let sum = 0;

  for (let i = 0; i < limit; i++) {
    sum += i;
  }

  postMessage(sum); // send result back
};
