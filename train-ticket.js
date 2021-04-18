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

    if (fasciaDiEta === "minorenne") {
        ageDiscountElement.innerHTML = " " + fasciaDiEta;
        ticketPriceElement.innerHTML = totCostMin + " €";
    } else if (fasciaDiEta === "adulto") {
        ageDiscountElement.innerHTML = " " + fasciaDiEta;
        ticketPriceElement.innerHTML = totCostMax + " €";
    } else {
        ageDiscountElement.innerHTML = " Nessuno";
        ticketPriceElement.innerHTML = totCost + " €";
    }

    var carrozzaNum = Math.floor(Math.random() * (20 - 1) + 1);
    document.getElementById("carrozza-num").innerHTML = carrozzaNum;

    var codiceCp = Math.floor(Math.random() * (10000 - 1) + 10000);
    document.getElementById("codice-cp").innerHTML = codiceCp;
})

function refreshPage(){
    window.location.reload();
} 





























/*var kms = prompt("Quanti chilometri vuoi percorrere?");
var age = prompt("Qual è la tua età?");
var costPerKm = 0.21
var minAge = 20
var minDiscount = 0.2
var minCostPerKm = costPerKm - (costPerKm * minDiscount);
var maxAge = 65
var maxDiscount = 0.4
var maxCostPerKm = costPerKm - (costPerKm * maxDiscount);
var totCost = (parseFloat((kms * costPerKm).toFixed(2)));
var totCostMin = (parseFloat((kms * minCostPerKm).toFixed(2)));
var totCostMax = (parseFloat((kms * maxCostPerKm).toFixed(2)));

// document.getElementById("distance").innerHTML = kms + " Km";
console.log(kms + " Km");
// document.getElementById("randomAge").innerHTML = age + " Years old";
// document.getElementById("years").innerHTML = age + " Years old";
console.log(age + " Years old");

if (isNaN(kms)) {
     
} else if (isNaN(age)) {
     
} else {
    if (age < minAge) {
        // document.getElementById("ticketCost").innerHTML = totCostMin + " ¥";
    console.log(totCostMin + " ¥");
    } else if (age > maxAge) {
        // document.getElementById("ticketCost").innerHTML = totCostMax + " ¥";
    console.log(totCostMax + " ¥");
    } else {
        // document.getElementById("ticketCost").innerHTML = totCost + " ¥";
    console.log(totCost + " ¥");
    };
};

function getRightInputs(userName, distance, years) {
    do {
        userName = prompt("Inserisci il tuo nome");

        if (!isNaN(userName)) {
            alert("Non sono ammessi i numeri")
        }

    } while (isNaN(userName))

    return userName;

}*/