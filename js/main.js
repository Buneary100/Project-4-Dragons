function login()
{
    const username = document.querySelector('#username').value;
    const note = document.querySelector('#password').value;

    const url = "http://localhost:3000";
    const params = `?username=${username}&password=${password}`;

    const fetchObject = {
        method: 'GET',
        headers: {
            'Content-Type' : 'text/html'
        }
    };

    fetch(url + params, fetchObject)
        .then(response => response.json())               // obtain json object sent from server
        .then(jsonObject => {                            // use jsonObject and get its message property
            console.log(jsonObject.message);   // set innerHTML of span to message sent in jsonObject
        });
    location.reload();
}