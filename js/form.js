<script>
        function sendEmail(){
        Email.send({
            Host: "smtp-mail.outlook.com",
            Username: "jhonataniam@outlook.com",
            Password: "Lo$5flores",
            To: "jhonataniam@outlook.com",
            From: document.getElementById("email").value,
            Subject: "New Contact Form Inquiry",
            Body: "Name:" + document.getElementById("name").value +
                "<br> Email: " + document.getElementById("email").value +
                "<br> Message: " + document.getElementById("message").value +
        }).then(
            message => alert("Message Sent Succesfully")
        );
        }
</script>