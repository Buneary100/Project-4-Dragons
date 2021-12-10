function loginFunction()
{
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    const url = "http://localhost:3000/register";

    const dataObject = {
        username: username,
        password: password
    };

    const fetchObject = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataObject)
    };

    fetch(url, fetchObject)
        .then(response => response.json())               // obtain json object sent from server
        .then(jsonObject => {                            // use jsonObject and get its message property
            //outputSpan.innerHTML = jsonObject.message;   // set innerHTML of span to message sent in jsonObject
            console.log(jsonObject.message)
        });
}