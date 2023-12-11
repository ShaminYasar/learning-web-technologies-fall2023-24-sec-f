<!DOCTYPE html>
<html lang="en">
<head>
    <title>Rookie Job Marketplace Sign Up</title>
</head>
<body>

    <script>
        function validateForm() {
            let fullname = document.getElementById('fullname').value;
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;
            let confirmPassword = document.getElementById('confirmPassword').value;
            let email = document.getElementById('email').value;

            if (fullname === '' || username === '' || password === '' || confirmPassword === '' || email === '') {
                alert('Please fill in all required fields');
                return false;
            }
            if (password !== confirmPassword) {
                alert('Passwords is not matching');
                return false;
            }
            return true;
        }
    </script>
</body>
</html>