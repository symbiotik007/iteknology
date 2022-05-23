let dineroCofla = prompt("¿Cúanto dinero tienes Cofla?");
let dineroRoberto = prompt("¿Cúanto dinero tienes Roberto?");
let dineroPedro = prompt("¿Cúanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1){
alert("Cofla, cmprate el helado de Agua!");
alert("y te sobran " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6 ){
alert("Cofla, Comprate el helado de Crema!");
alert("y te sobran " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7 ){
    alert("Cofla, Comprate el helado de Huevo!");
    alert("y te sobran " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8 ){
    alert("Cofla, Comprate el helado de banana con salame!");
    alert("y te sobran " + (dineroCofla - 1.7));
}


else if (dineroCofla >= 1.8 && dineroCofla < 2.9 ){
    alert("Cofla, Comprate el helado de promaster2022k mas conocido como helardo!");
    alert("y te sobran " + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("Cofla, Comprate el helado con confites o el pote mierda de 1/4kg");
    alert("y te sobran " + (dineroCofla - 2.9));

} else {
    alert("Cofla, lo siento pobre de mierda no te alcanza para ningun helado");
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1){
alert("Roberto, comprate el helado de Agua!");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6 ){
alert("Roberto, comprate el helado de Crema!");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7 ){
    alert("Roberto, comprate el helado de Huevo!");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8 ){
    alert("Roberto, comprate el helado de banana con salame!");
}


else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9 ){
    alert("Roberto, comprate el helado de promaster2022k mas conocido como helardo!");
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto, comprate el helado con confites o el pote mierda de 1/4kg");

} else {
    alert("Roberto, lo siento pobre de mierda no te alcanza para ningun helado");
}


if (dineroPedro >= 0.6 && dineroPedro < 1){
alert("Pedro, comprate el helado de Agua!");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6 ){
alert("Pedro, comprate el helado de Crema!");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7 ){
    alert("Pedro, comprate el helado de Huevo!");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8 ){
    alert("Pedro, comprate el helado de banana con salame!");
}


else if (dineroPedro >= 1.8 && dineroPedro < 2.9 ){
    alert("Pedro, comprate el helado de promaster2022k mas conocido como helardo!");
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate el helado con confites o el pote mierda de 1/4kg");

} else {
    alert("Pedro, lo siento pobre de mierda no te alcanza para ningun helado");
}