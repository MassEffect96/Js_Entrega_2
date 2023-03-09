const call_of_duty_wz2 = 50;
const fifa_23 = 65;
const hogwarts_legacy = 70;
const valorDolarArgentina = 380;
const impuestos = 81 / 100;


let usuario = prompt('ingresar usuario');
while (usuario != 'coderhouse') {
    alert('usuario no autorizado te va a perseguir la polichia')
    alert.preventDefault()
}
if (usuario === 'coderhouse')
    alert("bienvenido usuario")


function correrCallOfDutyWZ2(activision, shooter, firstPerson) {
    this.empresa = activision
    this.genero = shooter
    this.perspectiva = firstPerson

    let paisResidencia = prompt('ingresar pais residencia');
    while (paisResidencia != " ") {
        switch (paisResidencia) {
            case "colombia":
                alert("$usd " + call_of_duty_wz2 + '.');
                break;
            case "uruguay":
                alert("$usd " + call_of_duty_wz2 + '.');
                break;
            case "chile":
                alert("$usd " + call_of_duty_wz2 + '.');
                break;
            case "brasil":
                alert("$usd " + call_of_duty_wz2 + '.');
                break;
            case "paraguay":
                alert("$usd " + call_of_duty_wz2 + '.');
                break;
            case "bolivia":
                alert("$usd " + call_of_duty_wz2 + '.');
                break;
            case "ecuador":
                alert("$usd " + call_of_duty_wz2 + '.');
                break;
            case "brasil":
                alert("$usd " + call_of_duty_wz2 + '.');
                break;
            case "venezuela":
                alert("$usd " + call_of_duty_wz2 + '.');
                break;
            case "argentina":
                alert("$ars " + call_of_duty_wz2 * valorDolarArgentina * impuestos + '.');
                break;
            default:
                alert("debes ingresar un pais soportado");
                break;
        }
    }

}

function correrHogwartsLegacy(avalancheSoftware, rpg, thirdPerson) {
    this.empresa = avalancheSoftware
    this.genero = rpg
    this.perspectiva = thirdPerson

    let paisResidencia = prompt('ingresar pais residencia');
    while (paisResidencia != " ") {
        switch (paisResidencia) {
            case "colombia":
                alert("$usd " + hogwarts_legacy + '.');
                break;
            case "uruguay":
                alert("$usd " + hogwarts_legacy + '.');
                break;
            case "chile":
                alert("$usd " + hogwarts_legacy + '.');
                break;
            case "brasil":
                alert("$usd " + hogwarts_legacy + '.');
                break;
            case "paraguay":
                alert("$usd " + hogwarts_legacy + '.');
                break;
            case "bolivia":
                alert("$usd " + hogwarts_legacy + '.');
                break;
            case "ecuador":
                alert("$usd " + hogwarts_legacy + '.');
                break;
            case "brasil":
                alert("$usd " + hogwarts_legacy + '.');
                break;
            case "venezuela":
                alert("$usd " + hogwarts_legacy + '.');
                break;
            case "argentina":
                alert("$ars " + hogwarts_legacy * valorDolarArgentina * impuestos + '.');
                break;
            default:
                alert("debes ingresar un pais soportado");
                break;
        }
    }
}

function correrFifa23() {

    let paisResidencia = prompt('ingresar pais residencia');
    while (paisResidencia != " ") {
        switch (paisResidencia) {
            case "colombia":
                alert("$usd " + fifa_23 + '.');
                break;
            case "uruguay":
                alert("$usd " + fifa_23 + '.');
                break;
            case "chile":
                alert("$usd " + fifa_23 + '.');
                break;
            case "brasil":
                alert("$usd " + fifa_23 + '.');
                break;
            case "paraguay":
                alert("$usd " + fifa_23 + '.');
                break;
            case "bolivia":
                alert("$usd " + fifa_23 + '.');
                break;
            case "ecuador":
                alert("$usd " + fifa_23 + '.');
                break;
            case "brasil":
                alert("$usd " + fifa_23 + '.');
                break;
            case "venezuela":
                alert("$usd " + fifa_23 + '.');
                break;
            case "argentina":
                alert("$ars " + fifa_23 * valorDolarArgentina * impuestos + '.');
                break;
            default:
                alert("debes ingresar un pais soportado");
                alert.preventDefault();
                break;

        }
    }
}