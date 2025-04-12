# Password Strength Checker (AI Hackfest 2025)

**Hackathon:** AI Hackfest (April 11–13, 2025), hosted by MLH

## Project Description

A simple web-based **Password Strength Checker** that helps users understand how secure their passwords are. While this tool isn’t directly powered by AI, it demonstrates core principles of cybersecurity—an essential piece of any AI-enabled system.  

**Key Features**  
- **Checks password length** (8 or more characters recommended).  
- **Detects special characters, numbers, and uppercase letters** to gauge complexity.  
- **Provides suggestions** on improving password security.  

**Why it Matters**  
- Cybersecurity is crucial in all aspects of technology, including AI.  
- A strong password is the first line of defense in protecting AI models and data.

---

## How to Use

1. **Clone or Download** this repository  
   - Via GitHub Desktop or command line:  
     ```bash
     git clone https://github.com/hair-ball-28/password-strength-checker.git
     ```
   - Or click “Code” and choose “Download ZIP.”

2. **Open `index.html`**  
   - Double-click `index.html` to open it in your default browser, or drag-and-drop it into a browser window.

3. **Check a Password**  
   - Type any password into the input field.  
   - Click **Check Strength** to see how strong it is and get suggestions for improvement.

---

## Files & Structure
-  password-strength-checker/ 
-  ├── index.html (Main HTML page)
-  ├── style.css (Basic styling) 
-  └── script.js (Password strength logic)

- **index.html**  
  Contains the form input and button to trigger the password check.  

- **style.css**  
  Adds basic styling to center the content and make it look neat.  

- **script.js**  
  Implements the logic for analyzing password length, numbers, special characters, and uppercase letters. Also displays feedback.

---

## Technologies Used

- **HTML** for structure  
- **CSS** for styling  
- **JavaScript** for password strength logic

No server framework is required; everything runs in the browser.

---

## Future Enhancements

### AI Integration
- Implement an AI-based password generator or use AI to offer personalized feedback based on user behavior.

### Real-time Checking
- Check the password strength as the user types (on `keyup`).

### Additional Security Checks
- Check for commonly used passwords or dictionary words.
- Integrate a password breach API to see if the password has been exposed before.

---

## Contributing
We welcome pull requests and suggestions! If you find a bug or have an idea for an improvement, please open an issue.


## Acknowledgments
- **MLH** for hosting AI Hackfest.  
- All the mentors and fellow hackers who helped brainstorm ideas.

