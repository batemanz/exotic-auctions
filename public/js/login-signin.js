const loginFormHandler = async (event) => {
    event.preventDefault();

    console.log("Successfully logged in!");

    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#pswrd').value.trim();

    if (email && password) {
        const response = await fetch('/api/bidders/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const signInFormHandler = async (event) => {
    event.preventDefault();

    console.log("Successfully signed in!");

    const name = document.querySelector('#newName').value.trim();
    const email = document.querySelector('#newUsername').value.trim();
    const password = document.querySelector('#newPswrd').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/bidders', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('.loginForm')
  .addEventListener('submit', loginFormHandler);
document
  .querySelector('.signInForm')
  .addEventListener('submit', signInFormHandler);