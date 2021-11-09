fetch('https://rickandmortyapi.com/api/character/', {
    method: 'GET'
})
.then(Response => Response.json())
.then(function(json){
    let container = document.querySelector('.container');

    json.results.map(function(results){
        
        container.innerHTML += `
         <div> <img src=`   + results.image +  ` </div> <br>
         <strong> ` + results.name  + ` </strong> <br>
         <span> ` + results.species  + ` </span> <br>
          <i> ` + results.status  + ` </i> <br>
          <i> ` + results.origin.name  + ` </i> <br>
         <hr>
         `; 
    })
})
