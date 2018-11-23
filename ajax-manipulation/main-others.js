// window.onload = function(){
//     var http = new XMLHttpRequest();
//     http.onreadystatechange = function(){
//         if( http.readyState == 4 && http.status == 200 )
//         console.table(JSON.parse(http.response));
//     }
//     http.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     http.send();
//     console.log("test");
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((mydata)=>mydata.json())
// .then((data)=>console.log(data));
// }

$(document).ready(function(){
    $btn1 = $(".btn1");
    $response = $(".response");
    $count = 0;
    $count = $("code");

    $btn1.on("click", callback);


    // function callback(){
    //     $.get("https://jsonplaceholder.typicode.com/posts", function(data){
    //        $response.html(handlecallbackdata(data));
    //        console.log(handlecallbackdata(data));
    //        console.log(data);
    //     });
    // }
    
    function callback(){
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            success: function(data){
                $response.html(handlecallbackdata(data));
            },
            error: function(error){
                console.log(error);
            }
        });
    }
    function handlecallbackdata(data){
        return data.map((res)=>
        `<li class="list-group-item"=>${res.id} ).  ${res.title}</li>`
        // "<li class='list-group-item'=>"+res.id+"). "+res.title+"</li>"
        ).join("");
    }
});

// VIA PROMISE

$(document).ready(function(){

    $btn2 = $(".btn2");
    $btn2.on("click", dataget);
    var lidata = "";
    count = 0;
    function showappendedData(res){
        lidata += `<li class="list-group-item">${res.id} ).  ${res.title}</li>`;
        $response.html(lidata);
        count++;
        $count.text(count);
    }
    
    function dataget(){
        get("https://jsonplaceholder.typicode.com/posts/1")
        .then( data => {
            showappendedData(data);
            return get("https://jsonplaceholder.typicode.com/posts/2");
        })
        .then( data => {
            showappendedData(data);
            return get("https://jsonplaceholder.typicode.com/posts/3");
        })
        .then( data => {
            showappendedData(data);
            return get("https://jsonplaceholder.typicode.com/posts/4");
        })
        .then( data => {
            showappendedData(data);
            return get("https://jsonplaceholder.typicode.com/posts/5");
        })
        .then( data => {
            showappendedData(data);
        })
        .catch(error =>{
            showappendedData(error)
        });
    }

    function get(url){
        return new Promise((resolve, reject)=>{
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);
            xhttp.onload = function(){
                if( xhttp.status == 200 )
                resolve(JSON.parse(xhttp.response));
                else
                reject(xhttp.statusText);
            }
            xhttp.onerror = function(){
                reject(xhttp.statusText);
            }
            xhttp.send();
        });
    }
});

window.onload = function(){
    function gen(){
        genwrap(function*(){
            var arr = [];
            arr.push(yield $.get("https://jsonplaceholder.typicode.com/posts/1"));
            arr.push(yield $.get("https://jsonplaceholder.typicode.com/posts/2"));
            arr.push(yield $.get("https://jsonplaceholder.typicode.com/posts/3"));
            arr.push(yield $.get("https://jsonplaceholder.typicode.com/posts/4"));
            arr.push(yield $.get("https://jsonplaceholder.typicode.com/posts/5"));
            $response.html(handlecallbackdata(arr)); 
        });
    }
        
    function genwrap(generator) {
        gen = generator();
        function handle(yielded){
            if(!yielded.done){
                yielded.value.then(function(data){
                    return handle(gen.next(data));
                });
            }
            console.log(yielded);
        }
        return handle(gen.next());
    }

    function handlecallbackdata(data){
        return data.map((res)=>
        `<li class="list-group-item"=>${res.id} ).  ${res.title}</li>`
        // "<li class='list-group-item'=>"+res.id+"). "+res.title+"</li>"
        ).join("");
    }

    $btn3 = $(".btn3");
    $btn3.on("click", gen);
}

// postData(`http://example.com/answer`, {answer: 42})
//   .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
//   .catch(error => console.error(error));

// function postData(url = ``, data = {}) {
//   // Default options are marked with *
//     return fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, cors, *same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "same-origin", // include, *same-origin, omit
//         headers: {
//             "Content-Type": "application/json; charset=utf-8",
//             // "Content-Type": "application/x-www-form-urlencoded",
//         },
//         redirect: "follow", // manual, *follow, error
//         referrer: "no-referrer", // no-referrer, *client
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     })
//     .then(response => response.json()); // parses response to JSON
// }

// Fetch data

const apifetch = fetch('https://jsonplaceholder.typicode.com/todos');
( async()=> {
    let datag = await apifetch;
    let data = await datag.json();
    console.log(data);
    const newdata = data.filter( data => data.id < 30? true: false )
    // data.map(d => `${d.id}). title: ${d.title} \n`)
    console.log(...newdata);
})();