export type Menu = {
    name: string,
    permalink: string,
}

export type Ofertas = {
    acf: {
        ofertas: {
            imagen: {
                url: string
            }
        }[],
        paquetes_nacionales: {
            imagen: {
                url: string
            }
        }[],
        paquetes_internacionales: {
            imagen: {
                url: string
            }
        }[],
    }
}