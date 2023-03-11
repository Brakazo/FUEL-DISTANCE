async function calculerDistance() {
    var argent = parseFloat(document.querySelector("#argent").value);
    var prix_essence = parseFloat(document.querySelector("#prix_essence").value);
    var consommation = parseFloat(document.querySelector("#consommation").value);
    
    if (isNaN(argent) || isNaN(prix_essence) || isNaN(consommation)) {
      alert("Veuillez saisir des nombres valides.");
      return;
    }
    if (argent <= 0 || prix_essence <= 0 || consommation <= 0) {
      alert("Veuillez saisir des nombres positifs.");
      return;
    }
  
    document.querySelector("#resultat").innerHTML = "(calcul en cours...)";
  
    try {
      var distance = await calculerDistanceMax(argent, prix_essence, consommation);
      document.querySelector("#resultat").innerHTML = distance.toFixed(2);
    } catch (error) {
      console.log(error);
      document.querySelector("#resultat").innerHTML = "Erreur de calcul";
    }
  }
  function calculerDistanceMax(argent, prix_essence, consommation) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        var distance = (argent / prix_essence) * 100 / consommation;
        resolve(distance);
      }, 1000); 
    });
  }
