const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();


    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function writeToDocument(type) {
    let el = document.getElementById("data");
    el.innerHTML = "";
    getData(type, function(data) {
        data = data.results;

        data.forEach(function(item) {
            Object.keys(item).forEach(function(key) {
                console.log(key);

            })

            
                el.innerHTML += "<p>" +  item.name + "</p>";
        });

    });
}



