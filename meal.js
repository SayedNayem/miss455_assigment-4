function api () {
    var searchText = document.getElementById("search").value ; 
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
  
    fetch (url)
    .then(res => res.json()   )
    .then(data => display(data)   ); 
  
     document.getElementById("search").value = " "; 
     document.getElementById("container").textContent = " ";
  
  }
  
  function display (data){
  
   var oldContent = document.getElementById("container")
   for (var a=0; a<data.meals.length; a++){
     var newDiv = document.createElement("div");
     newDiv.innerHTML = `
     <div class="card" style="width: 18rem;">
    <img src="${data.meals[a].strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.meals[a].strMeal}</h5>
      <p class="card-text">
      <h4>Cooking Instructions:</h4>
      ${data.meals[a].strInstructions}
      </p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div> ` ;
  
      oldContent.appendChild(newDiv);
  
   }
  
  }