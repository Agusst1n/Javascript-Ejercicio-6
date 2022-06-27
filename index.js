//* Crea un archivo JS que contenga las siguientes líneas

//*! - Una variable que contenga la lista de la compra (mínimo 5 elementos)

//*! - Modifica la lista de la compra y añádele "Aceite de Girasol"

//*! - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

//*! - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

//*! - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

//*! - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

//*! - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

//*! - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

//*! - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)


let compras = ['Leche','Pan','Queso','Carne','Harina','Alimento para Perros']

compras.push('Aceite de Girasol')

compras.pop()

let peliculas = [

    {
        titulo: 'Los Goonies',
        director: 'Richard Donner',
        fecha: 1985,
    },
    {
        titulo: 'Volver al futuro',
        director: 'Robert Zemeckis',
        fecha: 1985,
    },
    {
        titulo: 'El asesino sin memoria',
        director: 'Martin Campbell',
        fecha: 2022,
    },
]

let peliculasPost2010 = peliculas.filter( p => p.fecha > 2010)


let directores = peliculas.map( p => p.director)

let titulos = peliculas.map( p => p.titulo)

let directoresYtitulos = directores.concat(titulos)

let directoresYtitulosSpread = [...directores,...titulos]

