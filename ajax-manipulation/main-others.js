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
    console.log("data");

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
