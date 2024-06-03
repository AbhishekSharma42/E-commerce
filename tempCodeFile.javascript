let incrementCount = parseInt(tc.getVar("incrementCount") || "0");
let code = tc.response.status;

if (incrementCount <= 3 && code !== 200) {
  incrementCount = incrementCount + 1;
  tc.setVar("incrementCount", incrementCount);
  console.log("retrying request", incrementCount);

  await tc.delay(incrementCount * 1000); // exponential delay of 1 secs
  await tc.retryRequest();
} else {
  tc.setVar("incrementCount", 0);
  console.log("reset incrementCount = 0");
}