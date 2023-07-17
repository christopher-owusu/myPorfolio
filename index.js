let theme = localStorage.getItem('theme');

if (theme === null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDot = document.getElementsByClassName('theme-dot');

for (let i = 0; i < themeDot.length; i++) {
    themeDot[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        console.log('option clicked:', mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    let themeStyle = document.getElementById('theme-style');

    switch (mode) {
        case 'light':
            themeStyle.href = 'style.css';
            break;
        case 'aqua':
            themeStyle.href = 'aqua.css';
            break;
        case 'green':
            themeStyle.href = 'green.css';
            break;
        case 'purple':
            themeStyle.href = 'purple.css';
            break;
        default:
            themeStyle.href = 'style.css';
    }

    localStorage.setItem('theme', mode);
}



function sendMail() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get form data
      let name = document.getElementById("name").value;
      let subject = document.getElementById("subject").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      let btn = document.getElementById("submit-btn");
  
      // Perform form validation (you can add more validation logic as needed)
      if (name.trim() === "" || subject.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        btn.disabled = true;
      } 
      else {
        let templateParams = {
          name: name,
          subject: subject,
          email: email,
          message: message
        };
  
        emailjs.send("service_h3rmbwd", "template_aw11hpw", templateParams)
          .then(res => { 
            document.getElementById("name").value = ""; 
            document.getElementById("subject").value = ""; 
            document.getElementById("email").value = "";
            document.getElementById("message").value = ""; 
            console.log(res);
  
            // Display success message
            document.getElementById("success-message").style.display = "block";
  
            // Hide success message after 2 seconds
            setTimeout(function() {
              document.getElementById("success-message").style.display = "none";
            }, 2000);
  
            // Reset the form
            document.getElementById("contact-form").reset();
          })
          .catch(err => console.log(err));
      }
    });
  }
  