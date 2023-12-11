<!DOCTYPE html>
<html lang="en">
<head>
    <title>Js Validation</title>
</head>
<body>

    <script>
        function validateForm() {

            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;

            if (username === '' || password === '') {
                alert('Please fill all the details');
                return false;
            }
            return true;
        }
    </script>
</body>
</html>