const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
const Input = document.querySelectorAll("input");

Input.forEach((input)=>{
    input.required = true;

});
const numberFiel = document.getElementById("numberFiel")

const destination= document.getElementById("destination")

const dateInput = document.getElementById("dateInput")

const heuredepart = document.getElementById("heuredepart")

const heurearrivee = document.getElementById("heurearrivee")




const clientName = document.getElementById("clientName")

const destination1 = document.getElementById("destination")

const datearrivee = document.getElementById("datearrivee")

const datedepart = document.getElementById("datedepart")

const heurearrivee1 = document.getElementById("heurearrivee")

numberFiel.addEventListener("input",function(){
    this.value = this.value.replace(/\D/.g,"")
});
document.getElementById("myButton").addEventListener("click",function(){
    if (numberFiel.value==="")
    {
        var displayText = document.getElementById("displayText")
        displayText.style.display = "block";

        //alert("please enter a number");
        setTimeout(function(){
            displayText.style.display ="none";;
        }, 4000);
        
    }
    if(dateInput.value==="")
    {
        var displayText = document.getElementById("displayText")
        displayText.style.display = "block";

        setTimeout(function(){
            displayText.style.display ="none";;
        }, 4000);
    
    }
    if (destination.value==="")
    {
        var displayText = document.getElementById("displayText")
        displayText.style.display = "block";

        setTimeout(function(){
            displayText.style.display ="none";;
        }, 4000);
       
    }
    if (heuredepart.value==="")
    {
        var displayText = document.getElementById("displayText")
        displayText.style.display = "block";

        setTimeout(function(){
            displayText.style.display ="none";;
        }, 4000);
       
    }
    if (heurearrivee.value==="")
    {
        var displayText = document.getElementById("displayText")
        displayText.style.display = "block";

        setTimeout(function(){
            displayText.style.display ="none";;
        }, 4000);
       
    }
})



clientName.addEventListener("input",function(){
    this.value = this.value.replace(/\D/.g,"")
});
document.getElementById("myButton").addEventListener("click",function(){
    if (hotelName.value==="")
    {
        var displayText = document.getElementById("displayText")
        displayText.style.display = "block";

        //alert("please enter a number");
        setTimeout(function(){
            displayText.style.display ="none";;
        }, 4000);
        
    }
    if(datearrivee.value==="")
    {
        var displayText = document.getElementById("displayText")
        displayText.style.display = "block";

        setTimeout(function(){
            displayText.style.display ="none";;
        }, 4000);
    
    }
    if (destination.value==="")
    {
        var displayText = document.getElementById("displayText")
        displayText.style.display = "block";

        setTimeout(function(){
            displayText.style.display ="none";;
        }, 4000);
       
    }
    if (datedepart.value==="")
    {
        var displayText = document.getElementById("displayText")
        displayText.style.display = "block";

        setTimeout(function(){
            displayText.style.display ="none";;
        }, 4000);
       
    }
    if (heurearrivee.value==="")
    {
        var displayText = document.getElementById("displayText")
        displayText.style.display = "block";

        setTimeout(function(){
            displayText.style.display ="none";;
        }, 4000);
       
    }
})

function total(){
    let vol = Array.from(document.querySelectorAll(".section"))
    let hotel = Array.from(document.querySelectorAll(".articles"))
    let s = 0
    for (let i = 0; i < price.length; i++) {
        s = s + hotel [i].innerHTML * vol[i].innerHTML
    }
    document.getElementById("total-price").innerHTML = s
}




