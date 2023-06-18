class Sistema {
  constructor() {
    this.censistas = [
      new Censista(35, "Carlos Machado", "cmachado", "1234567"),
      new Censista(36, "Lionel Messi", "lmessi", "1234567"),
    ];
    this.censos = [
      new Censo(1, "Juan Carlos", 45, "46972011", "5", "1", 35, false),
      new Censo(2, "Anibal Perez", 67, "67344849", "12", "2", 35, true),
    ];
    this.departamentos = [
      new Departamento(1, "Artigas"),
      new Departamento(2, "Canelones"),
      new Departamento(3, "Cerro Largo"),
      new Departamento(4, "Colonia"),
      new Departamento(5, "Durazno"),
      new Departamento(6, "Flores"),
      new Departamento(7, "Florida"),
      new Departamento(8, "Lavalleja"),
      new Departamento(9, "Maldonado"),
      new Departamento(10, "Montevideo"),
      new Departamento(11, "Paysandú"),
      new Departamento(12, "Río Negro"),
      new Departamento(13, "Rivera"),
      new Departamento(14, "Rocha"),
      new Departamento(15, "Salto"),
      new Departamento(16, "San José"),
      new Departamento(17, "Soriano"),
      new Departamento(18, "Tacuarembó"),
      new Departamento(19, "Treinta y Tres"),
    ];
  }
  agregarCensista(censista) {
    this.censistas.push(censista);
  }

  agregarCenso(censo) {
    this.censos.push(censo);
  }
  //Devuelve true si en el array existe un elemento que cumpla una condicion
  buscarElementoSiExiste(arrayElementos, propiedad, busqueda) {
    let existe = false;
    for (let elemento of arrayElementos) {
      if (elemento[propiedad] === busqueda) {
        existe = true;
        break;
      }
    }
    return existe;
  }

  //Devuelve el elemento del array que cumpla con una condicion
  traerElemento(arrayElementos, propiedad, busqueda) {
    let objeto = null;
    for (let elemento of arrayElementos) {
      if (elemento[propiedad] === busqueda) {
        objeto = elemento;
        break;
      }
    }

    return objeto;
  }
  //Devuelve la posición del primer elemento que cumpla con una condicion
  buscarPosicionEnArray(array, propiedad, busqueda) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][propiedad] === busqueda) {
        return i;
      }
    }
  }

  //Modificamos un censo
  modificarCenso(id, censo) {
    let idEncontrado = this.buscarPosicionEnArray(this.censos, "id", id);
    this.censos[idEncontrado] = censo;
  }

  //Devuelve un array con los elementos que cumplen con una condición
  buscarElementosPorCondicion(array, propiedad, busqueda) {
    let nuevoArray = [];
    for (let elemento of array) {
      if (elemento[propiedad] === busqueda) {
        nuevoArray.push(elemento);
      }
    }
    return nuevoArray;
  }

  //Devuelve un array con los elementos que no cumplen con una condición
  buscarElementosQueNoCumplenCondicion(array, propiedad, busqueda) {
    let nuevoArray = [];
    for (let elemento of array) {
      if (elemento[propiedad] !== busqueda) {
        nuevoArray.push(elemento);
      }
    }
    return nuevoArray;
  }

  //Devuelve un array con los elementos que cumplen dos condiciones la misma vez
  buscarElementosPorDobleCondicion(
    array,
    propiedad1,
    busqueda1,
    propiedad2,
    busqueda2
  ) {
    let nuevoArray = [];
    for (let elemento of array) {
      if (
        elemento[propiedad1] === busqueda1 &&
        elemento[propiedad2] === busqueda2
      ) {
        nuevoArray.push(elemento);
      }
    }
    return nuevoArray;
  }

  //Devuelve el array de departamento

  obtenerArrayDepartamentos() {
    return this.departamentos;
  }

  //Devuelve el array de censos
  obtenerArrayCensos() {
    return this.censos;
  }
  //Devuelve la cantidad de mayores de edad del departamento elegido, que ya estén censados
  contarMayoresPorDepartamento(departamento) {
    let nuevoArray = [];
    for (let censo of this.censos) {
      if (
        censo.departamento === departamento &&
        censo.edad >= 18 &&
        censo.censado === true
      ) {
        nuevoArray.push(censo);
      }
    }
    return nuevoArray.length;
  }

  //Devuelve la cantidad de menores de edad del departamento elegido, que ya estén censados
  contarMenoresPorDepartamento(departamento) {
    let nuevoArray = [];
    for (let censo of this.censos) {
      if (
        censo.departamento === departamento &&
        censo.edad < 18 &&
        censo.censado === true
      ) {
        nuevoArray.push(censo);
      }
    }
    return nuevoArray.length;
  }
  idAleatorio() {
    return Math.round(Math.random() * (this.censistas.length - 1) + 1);
  }
}
