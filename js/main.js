function register()
{
    const username = document.querySelector('#regUsername').value;
    const password = document.querySelector('#regPassword').value;

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
            if(jsonObject.message == 'login')
            {
                window.location.href = "../html/character_sheet.html";
            }
        });
}

function login()
{
    const username = document.querySelector('#logUsername').value;
    const password = document.querySelector('#logPassword').value;

    const url = "http://localhost:3000/login";

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
            if(jsonObject.message == 'login')
            {
                window.location.href = "../html/character_sheet.html";
            }
        });
}