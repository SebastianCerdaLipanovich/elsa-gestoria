export const products = [
    {
        id: 1,
        nombre: "Formulario DS160",
        precio: 50,
        stock: 10,
        pictureURL: "https://solicitarmivisa.com/wp-content/uploads/2019/10/ds-160-confirmation-1200x823.png",
        descripcion: "En unas videollamada te ayudamos a completar correctamente el formulario ds160"
    },
    {
        id: 2,
        nombre: "Adelantar Turno CAS",
        precio: 100,
        stock: 10,
        pictureURL: "https://www.infoviajera.com/wp-content/uploads/2021/09/renovacion-Visa-Estados-Unidos-USA-1-min.jpg",
        descripcion: "En una semana conseguimos adelantar el turno en el CAS, para que puedas presentarte en los proximos 15 dias"
    }]


export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

}

export const traerProducto = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let product = products.find(x => x.id === Number(id));
            resolve(product);
        })
    })

}
