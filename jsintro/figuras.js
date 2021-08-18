// Square

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimeter = perimetroCuadrado(value);
    const PerimeterResult = document.getElementById("PerimeterResult");
    PerimeterResult.innerText = `El perimetro del cuadrado es ${perimeter}`;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const areaCu = areaCuadrado(value);
    const AreaResult = document.getElementById("AreaResult");
    AreaResult.innerText = `El area del cuadrado es ${areaCu}`;
}

//Circle

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}
function perimetroCirculo(radio){
    return (radio * 2) * Math.PI;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimeter = perimetroCirculo(value);
    const PerimeterResult = document.getElementById("CirclePerimeterResult");
    PerimeterResult.innerText = `El perimetro del circulo es ${perimeter}`;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    const AreaResult = document.getElementById("CircleAreaResult");
    AreaResult.innerText = `El Area del circulo es ${area}`;
}



// console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`Los lados del triangulo miden ${ladoTriangulo1}, ${ladoTriangulo2}, ${baseTriangulo}`);
// console.groupEnd();
