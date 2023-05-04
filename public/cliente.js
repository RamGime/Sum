function validarNumeros() {
    const num1 = document.getElementById("numero1").value;
    const num2 = document.getElementById("numero2").value;
  
    if (num1 === "" || num2 === "") {
      alert("Debe ingresar ambos números");
      return false;
    }
  
    if (!Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
      alert("Los valores ingresados no son números enteros");
      return false;
    }
  
    return true;
  }
  



  function sumar() {
    if (!validarNumeros()) {
      return;
    }
  
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
  
    fetch("/suma", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({numero1: num1, numero2: num2})
    })
    .then(response => response.json())
    .then(resultado => {
        document.getElementById("resultado").innerHTML = `El resultado de la suma es: ${resultado.suma}`;
    })
    .catch(error => console.error(error));
  }
  