// alert("a")
const ctx = document.getElementById("myChart").getContext("2d");
let delayed;
let gradient = ctx.createLinearGradient (0, 0 , 0 , 400);
// gradient.addColorStop(0,'rgba(88, 123, 213, 1)'),
gradient.addColorStop(0,'#fff'),
gradient.addColorStop(1,'transparent ');
const config = {
type : 'line', 
data: {
    // labels:[1 , 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12],
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY' , "JUN" , "JULY" , "AUG" , "SEPT" , "OCT" , "NOV" , "DEC"],
    
    datasets: [
{
    data:[50, 150 , 100, 180,130 , 90 , 150 , 160 , 120 , 140, 190 , 95],
    label: "finance data",
    borderColor : "#fff",
  
    backgroundColor : gradient,
    fill: true,
    tension : 0.6,
    PointBackgroundColor: "rgb(189, 195, 199 , 0.4)",
  

}

    ]

},
options:{
responsive: true ,
radius: 10,
hoverRadius: 12,
hitRadius : 30,
animation : {
    onComplete : ()=>{
        delayed = true
    },
    delay :(context) =>{
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
            delay = context.dataIndex * 300 + context.dataIndex* 300;

            alert("aysh")
        }
        return delay;
    }
}
}
}

const myChart = new Chart(ctx , config);


// 


var ctxx = document.getElementById("myChartt").getContext("2d");


var myChartt = new Chart (ctxx , {
    type : "doughnut"
,
data: {
    labels : ["python" , "java" , "react", "c++"]
    ,
    datasets:[

        {
data:[13, 15, 5 ],
backgroundColor: ["white"  , "white" , "rgb(42, 40, 64)" , "black"]
        },
    ],
},



})


// 
let dark = document.getElementById("dark");




dark.addEventListener("click" , function name(params) {
    document.querySelector("body").classList.toggle("active");

    
    
})


