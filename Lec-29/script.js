function handleRequest() {
    var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function () {
        if (xhttp.status == 201 && this.readyState == 4) {
            document.getElementById('loading').style.display = 'none'
            console.log('post created');
        }
        else {
            document.getElementById('loading').style.display = 'block'
        }
    }

    // Data which will be sent to server
    var obj = {
        userId: 1,
        id: 101,
        title: 'Post request',
        body: 'making apost request'
    }

    //making a post request
    xhttp.open('POST', 'https://jsonplaceholder.typicode.com/posts/', true);
    xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhttp.send(JSON.stringify(obj));

}


function displayData() {
    var n = document.getElementById('name').value;

    try {
        if (n.trim() === '') {
            throw 'Please enter correct data';
        }
        else if (n.length <= 3) {
            throw 'Please enter a valid name';
        }
        else {
            alert(n);
        }
    }

    catch (err) {
        alert(err);
    }

    finally {
        console.log('finally ' + n);
        document.getElementById('name').value = '';
    }
}

