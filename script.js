//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
            // Check if there are saved credentials in local storage
            const savedUsername = localStorage.getItem('username');
            const savedPassword = localStorage.getItem('password');
            const existingButton = document.getElementById('existing');
	if (savedUsername && savedPassword) {
                existingButton.style.display = 'block';
            }
	document.getElementById('loginForm').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent page reload

                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const rememberMe = document.getElementById('checkbox').checked;
		 if (rememberMe) {
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                }
		 alert(`Logged in as ${username}`);
		if (rememberMe) {
                    existingButton.style.display = 'block';
                } else {
                    existingButton.style.display = 'none';
                }
	});
		
});
	function loginAsExistingUser() {
            const username = localStorage.getItem('username');
            if (username) {
                alert(`Logged in as ${username}`);
            }
        }