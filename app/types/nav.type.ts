export interface Navbar {
    titulo: string,
    menu: Menu[],
    metodo: Metodo[],
}

interface Menu {
    opcion: string,
    url: string,
}

interface Metodo {
    metodo: string,
    url: string,
}