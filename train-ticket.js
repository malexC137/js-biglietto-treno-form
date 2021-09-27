var myForm = document.getElementById("myForm");
var costPerKm = 0.21
var minDiscount = 0.2
var minCostPerKm = costPerKm - (costPerKm * minDiscount);
var maxDiscount = 0.4
var maxCostPerKm = costPerKm - (costPerKm * maxDiscount);



myForm.addEventListener("submit", function (event) {
    var nomeCognomeElement = document.querySelector("[name = 'nomeCognome']");
    var chilometriElement = document.querySelector("[name = 'chilometri']");
    var nomeVisitatoreElement = document.getElementById("nomeVisitatore");
    var fasciaDiEtaElement = document.getElementById("fasciaDiEta");
    var ageDiscountElement = document.getElementById("ageDiscount");
    var ticketPriceElement = document.getElementById("ticketPrice");

    event.preventDefault();

    var nomeCognome = nomeCognomeElement.value;
    var chilometri = chilometriElement.value;
    var fasciaDiEta = fasciaDiEtaElement.value;
    var totCost = (parseFloat((chilometri * costPerKm).toFixed(2)));
    var totCostMin = (parseFloat((chilometri * minCostPerKm).toFixed(2)));
    var totCostMax = (parseFloat((chilometri * maxCostPerKm).toFixed(2)));

    nomeVisitatoreElement.innerHTML = nomeCognome; 

    if (fasciaDiEta === "Underage") {
        ageDiscountElement.innerHTML = " " + fasciaDiEta;
        ticketPriceElement.innerHTML = totCostMin + " €";
    } else if (fasciaDiEta === "Senior") {
        ageDiscountElement.innerHTML = " " + fasciaDiEta;
        ticketPriceElement.innerHTML = totCostMax + " €";
    } else {
        ageDiscountElement.innerHTML = " None";
        ticketPriceElement.innerHTML = totCost + " €";
    }

    var carrozzaNum = Math.floor(Math.random() * (20 - 1) + 1);
    document.getElementById("carrozza-num").innerHTML = carrozzaNum;

    var codiceCp = Math.floor(Math.random() * (10000 - 1) + 90000);
    document.getElementById("codice-cp").innerHTML = codiceCp;
})

