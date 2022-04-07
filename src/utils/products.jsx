export const products = [
    {
        id: 1,
        nombre: "Formulario DS160",
        precio: 50,
        pictureURL: "https://solicitarmivisa.com/wp-content/uploads/2019/10/ds-160-confirmation-1200x823.png"
    },
    {
        id: 2,
        nombre: "Adelantar Turno CAS",
        precio: 100,
        pictureURL: "https://www.infoviajera.com/wp-content/uploads/2021/09/renovacion-Visa-Estados-Unidos-USA-1-min.jpg"
    }]

export const product = {
    id: 2,
    nombre: "Adelantar Turno CAS",
    precio: 100,
    pictureURL: "https://www.infoviajera.com/wp-content/uploads/2021/09/renovacion-Visa-Estados-Unidos-USA-1-min.jpg",
    descripcion: "En una semana conseguimos adelantar el turno en el CAS, para que puedas presentarte en los proximos 15 dias"
}

export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

}

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        })
    })

}