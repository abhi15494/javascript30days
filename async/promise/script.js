$(document).ready(function(){
    const $result = document.getElementById('result');
    const link = 'https://jsonplaceholder.typicode.com/posts';
    
    const btnevent = rxjs.fromEvent(document.getElementById('onOldApiCall'), 'click').subscribe(
        data => {
            $result.innerHTML = 'loading...';
            rxjs.from(ajaxrequest(link))
            .subscribe(
                val => $result.innerHTML = convert_Data(val), // ON SUCCESS 
                error => $result.textContent = 'api not working', // ON ERROR
                () => {
                    console.log('Completed');
                    btnevent.unsubscribe();
                } // ON COMPLETE
            ); 
        }
    );    

    document.getElementById('onOldApiCall').addEventListener('click' , function(){

    });

    function ajaxrequest(link) {
        return $.ajax({
            method: 'GET',
            url: link
        })
    }    
    
    function convert_Data(data) {
        return data.reduce((s, v) => s += `<li>${v.title}</li>`, '');
    }
});

// rxjs.of(1, 2, 3)
//   .subscribe(x => {
//     console.log(x)
// },
//   err => { },
//   () => {
//   });