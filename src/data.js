//Filtra la data por tipo de pokemon
const filterData = (data, condition) => {
    let result =  data.filter(item => item.type.includes(condition));
    return result;
  };
  
  //ordena por nombre de a-z y z-a
  const ordenarPorNombre = (data, sortOrder) => {
    let result = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  
    if(sortOrder === "Z-A"){
      result = result.reverse();
    }
  
    return result;
  };
  
  //ordena por id de forma ascendente y descendente
  const ordenarPorId = (data, sortOrder) => {
    let result = data.sort((a,b) => {
      return a.id - b.id;
    });
  
    if(sortOrder === "descendente"){
      result = result.reverse();
    }
  
    return result;
  };
  
  //trae resultados de la data ordenados por nombre o id
  const sortData = (data, sortBy, sortOrder) => {
    let result;
    if(sortBy === "name"){
      result = ordenarPorNombre(data, sortOrder);
    }
    else {
      result = ordenarPorId(data, sortOrder);
    }
    return result;
  };
  
  window.filterData = filterData;
  window.sortData = sortData;