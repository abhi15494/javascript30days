window.onload = function () {
    const $result = document.getElementById('result');
    // const link = 'http://localhost:4000/api/google';
    const link = 'https://jsonplaceholder.typicode.com/posts';
    
    document.getElementById('onOldApiCall').addEventListener('click', () => old_Get_Api_Method(link));
    document.getElementById('onFetchApiCall').addEventListener('click', () => fetch_Get_API_Method(link));
    document.getElementById('onAsyncFetchApiCall').addEventListener('click', () => asyncFetch_Get_API_Method(link));
    
    function old_Get_Api_Method(url) {
        const http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                $result.innerHTML = convert_Data(JSON.parse(this.responseText));
            }
        }
        http.open('GET', url, true);
        http.send();
    }
    
    // ----------------------------------------------------------------------------
    // ----------------------------------------------------------------------------
    function fetch_Get_API_Method(url) {
        $result.textContent = 'loading...';
        fetch(url)
        .then(data => data.json())
        .then(data => $result.innerHTML = convert_Data(data))
        .catch(error => $result.innerHTML = 'ERROR NO DATA')
    }
    // ----------------------------------------------------------------------------
    // ----------------------------------------------------------------------------

    async function asyncFetch_Get_API_Method(link) {
        $result.textContent = 'loading...';
        try {
            const fetchapi = await fetch(link);
            const data = await fetchapi.json();
            $result.innerHTML = convert_Data(data)
        } catch (e) {
            $result.textContent = 'api not working'
        }
    }

    function convert_Data(data) {
        return data.reduce((s, v) => s += `<li>${v.title}</li>`, '');
    }

    // ------------------------------------------------------------------------------------
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('I am working');
        }, 3000);
    });
    
    promise
    .then(data => data)
    .then(data => console.log(data))
    .catch(data => console.log('error'+ data))
    // ------------------------------------------------------------------------------------
};

// fetch("/echo/json/",
// {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify({a: 1, b: 2})
// })

(function() {
    var proxied = window.XMLHttpRequest.prototype.send;
    window.XMLHttpRequest.prototype.send = function() {
        var pointer = this
        var intervalId = window.setInterval(function(){
                if(pointer.readyState != 4){
                    return;
                }
                console.log( pointer );
                //Here is where you can add any code to process the response.
                //If you want to pass the Ajax request object, pass the 'pointer' below
                clearInterval(intervalId);
        }, 1);//I found a delay of 1 to be sufficient, modify it as you need.
        return proxied.apply(this, [].slice.call(arguments));
    };
})();