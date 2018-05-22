var ul = document.querySelector("ul.response");
var btn = document.querySelector(".btn#callback");
var countElement = document.querySelector("code");

result = "";
count = 0;

var loadData = function(){
    var http = new XMLHttpRequest();
    // So this method is imported in all modern browse except the stone age browser 
    // and this allow us to send http request and get response data back form the server

    // So on onreadystatechange run when the readystate is changed
    // Ready States:
    // 0 - Request has not been initialized
    // 1 - Request has been set up. 
    // 2 - Request has been sent.
    // 3 - Request is in process
    // 4 - Request is complete 
    // And we need to check the status of our request.
    
    // http.onreadystatechange = function(){
    //     if( this.readyState===4 && this.status===200 ){
    //         ulLiData(JSON.parse(http.response));
    //     }
    // }
    
    // http.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    // Open method just set ups the request method and tell the js the request method, url and third boolean about weather the behaviour is Asuync or not
    // So to grab the data we need the send method
    // http.send();
    
    $.get("https://jsonplaceholder.typicode.com/posts", function(data){
        ulLiData(data);
        console.table(data);
    });
};

function ulLiData(data){
    data.forEach(element => {
        result += `<li class="list-group-item"=>${element.id} ).  ${element.title}</li>`;
        count++;
    });
    ul.innerHTML = result;
    countElement.innerHTML = count;
}

btn.addEventListener("click", loadData);