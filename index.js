fetch('https://rickandmortyapi.com/api/character/', {
    method: 'GET'
})
.then(Response => Response.json())
.then(function(json){
    let container = document.querySelector('.container');

    json.results.map(function(results){
        
        container.innerHTML += `
         <div> <img src=`   + results.image +  ` </div> <br>
         <h1> ` + results.name  + ` </h1> <br>
         <h3> ` + results.species  + ` </h3> <br>
          <p> ` + results.status  + ` </p> <br>
          <p> ` + results.origin.name  + ` </p> <br>
         <hr>
         `; 
    })
})
