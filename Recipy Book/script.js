let nextButton = document.getElementById("nextBtn")
let previousButton = document.getElementById("prevBtn")
let dishes = document.querySelectorAll(".dishes");

let count = 0;
dishes.forEach(function (slide , index) {
    slide.style.left = `${index * 100}%`


    
})
function myFun(params) {
    dishes.forEach(function (currentValue) {
        currentValue.style.transform = `translateX(-${count * 100}%)`
        
    })
    
}

nextButton.addEventListener("click" , function (params) {
    count++;
    myFun()

    if (count==dishes.length) {
        count= 0;
        
    }
})
previousButton.addEventListener("click" , function (params) {
    count--;
    myFun()

    if (count== -1) {
        count= dishes.length - 1;
        
    }
})




// API WALA PART
let searchInput = document.getElementById("searchInput")
let searchButton = document.getElementById("searchBtn")
let dishVal = document.querySelectorAll(".dishVal")
let getData = async (value) =>{
try{
    let data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    // console.log(data);



    let jsonData = await data.json()
    document.querySelector(".showMeal").innerHTML = ""
    // console.log(jsonData.meals);


jsonData.meals.forEach(function name(datta) {
    let div = document.createElement("div");
    console.log(datta);
    div.classList.add("card");
    div.innerHTML = `
<img src="${datta.strMealThumb}" alt="">
<p>${datta.strMeal}</p>
<button>View More</button>
    


    
    `


    document.querySelector(".showMeal").appendChild(div)


})
}
catch(error){
document.querySelector(".showMeal").innerHTML = "<h1>Meal Not Found!</h1>"
}



}
searchButton.addEventListener("click" , function name(params) {
    let searchValue = searchInput.value ;
    // console.log(searchValue);
    
    // console.log(jsonData);
    if (searchValue == "") {
        alert("First of All Enter Dishes")
    }
    else{
        getData(searchValue)

    }
})


dishVal.forEach(function (dishData) {
    dishData.addEventListener("click" , function (params) {
        getData(dishData.value)
        
    })

    
})