// Attach a click event listener to the button
document.getElementById("checkBtn").addEventListener("click", function () {
    // Grab the password value from the input
    const password = document.getElementById("passwordInput").value.trim();
    
    // References to the elements where we display results
    const strengthResult = document.getElementById("strengthResult");
    const suggestions = document.getElementById("suggestions");
  
    // Basic checks
    const lengthScore = password.length >= 8 ? 1 : 0;        // 1 if at least 8 characters
    const hasNumbers = /\d/.test(password) ? 1 : 0;          // 1 if there's a digit
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 1 : 0; // 1 if there's a special char
    const hasUppercase = /[A-Z]/.test(password) ? 1 : 0;     // 1 if there's an uppercase letter
  
    // Calculate total score
    const score = lengthScore + hasNumbers + hasSpecial + hasUppercase;
  
    // Determine strength level
    let strength = "";
    let suggestionList = [];
  
    // Score of 0 means no checks passed
    if (score === 0) {
      strength = "Very Weak";
      suggestionList.push("Use at least 8 characters.");
      suggestionList.push("Include numbers, special characters, and uppercase letters.");
    } else if (score === 1) {
      strength = "Weak";
      if (!lengthScore)  suggestionList.push("Use at least 8 characters.");
      if (!hasNumbers)   suggestionList.push("Include digits (0-9).");
      if (!hasSpecial)   suggestionList.push("Include special characters (!, @, etc.).");
      if (!hasUppercase) suggestionList.push("Include uppercase letters (A-Z).");
    } else if (score === 2) {
      strength = "Moderate";
      if (!hasSpecial)   suggestionList.push("Add special characters for extra strength.");
      if (!hasUppercase) suggestionList.push("Use uppercase letters to mix things up.");
    } else if (score === 3) {
      strength = "Strong";
      if (!hasUppercase) suggestionList.push("Add uppercase for top security.");
    } else {
      // Score 4 means all checks passed
      strength = "Very Strong";
    }
  
    // Update the page with results
    strengthResult.textContent = `Strength: ${strength}`;
    
    // Display suggestions
    if (suggestionList.length > 0) {
      suggestions.innerHTML = "Suggestions:<br>- " + suggestionList.join("<br>- ");
    } else {
      suggestions.innerHTML = "";
    }
  });
  