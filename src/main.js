const data =  POKEMON.pokemon
const pokemons = document.getElementById("pokemons");

//Genera cada pokemon obtenido de la data
const agregaPokemons = (data) => {
    let result = "";
    data.forEach(element => {
        result += "<div class='row'><div class='col-md-2' data-toggle='tooltip' data-placement='right' title='id: "+element.id+" name: "+element.name+"'><img class='img-pokemon' src='"+ element.img +"' /></div></div>" 
    });

    return result;
};

//Trae a los pokemons por tipo
const seleccionarTipo = document.getElementById("seleccionar-tipo");
seleccionarTipo.addEventListener("change", () => {
    let type = seleccionarTipo.options[seleccionarTipo.selectedIndex].value;
    pokemons.innerHTML = agregaPokemons(filterData(data, type));
});

//Trae a los pokemons por nombre
const seleccionarNombre = document.getElementById("seleccionar-nombre");
seleccionarNombre.addEventListener("change", () => {
    let type = seleccionarTipo.options[seleccionarTipo.selectedIndex].value;
    let name = seleccionarNombre.options[seleccionarNombre.selectedIndex].value;
    if(type === "All"){
        pokemons.innerHTML = agregaPokemons(sortData(data, "name", name));
    }
    else{
        pokemons.innerHTML = agregaPokemons(sortData(filterData(data, type), "name", name));
    }
});

//Trae a los pokemons por numero
const seleccionarNumero = document.getElementById("seleccionar-numero");
seleccionarNumero.addEventListener("change", () => {
    let type = seleccionarTipo.options[seleccionarTipo.selectedIndex].value;
    let numero = seleccionarNumero.options[seleccionarNumero.selectedIndex].value;
    if(type === "All"){
        pokemons.innerHTML = agregaPokemons(sortData(data, "id", numero));
    }
    else{
        pokemons.innerHTML = agregaPokemons(sortData(filterData(data, type), "id", numero));
    }
});

//Para poder mostrar los tooltips de bootstrap
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})