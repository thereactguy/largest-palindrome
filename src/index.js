function palNumber(S) {
  const digits = S.split("").map(Number);
  const counts = Array(10).fill(0);
  digits.forEach((d) => counts[d]++);

  // Initialize variables to build the palindrome
  let palindrome = "";
  let middleDigit = -1;

  // Iterate over the digits from 0 to 9
  for (let i = 0; i <= 9; i++) {
    // If the current digit occurs at least once
    if (counts[i] > 0) {
      if (counts[i] % 2 === 0) {
        palindrome =
          i.toString().repeat(counts[i] / 2) +
          palindrome +
          i.toString().repeat(counts[i] / 2);
        counts[i] = 0;
      } else {
        middleDigit = i;
        counts[i]--;
        palindrome =
          i.toString().repeat(Math.floor(counts[i] / 2)) +
          palindrome +
          i.toString().repeat(Math.floor(counts[i] / 2));
        counts[i] = 0;
      }
    }
  }

  // If there is a middle digit, add it to the middle of the palindrome
  if (middleDigit !== -1) {
    palindrome =
      palindrome.slice(0, Math.floor(palindrome.length / 2)) +
      middleDigit.toString() +
      palindrome.slice(Math.floor(palindrome.length / 2));
  }

  // Remove leading zeros
  while (palindrome.length > 1 && palindrome[0] === "0") {
    palindrome = palindrome.slice(1);
  }

  // Remove ending zeros
  while (palindrome.length > 1 && palindrome[palindrome.length - 1] === "0") {
    palindrome = palindrome.slice(0, palindrome.length - 1);
  }

  // Return the final palindrome
  document.getElementById("seeResult").innerHTML = palindrome;
}

let inputContent;
// Get the input value
document.getElementById("checkNum").addEventListener("change", (event) => {
  inputContent = event.target.value;
});

// set button click event
document.getElementById("checkResult").addEventListener("click", () => {
  palNumber(inputContent);
});
