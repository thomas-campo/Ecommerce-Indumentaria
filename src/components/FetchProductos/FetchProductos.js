//  Promesas -> 3 estados: pendiente, rachazado, aceptada


let productos = [
    {id: '1', name: 'Remera Basica Roja', categoria: 'remeras', stock: '100', precio: '10.000', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/258730-800-800?width=800&height=800&aspect=true'},
    {id: '2', name: 'Remera Training Naranja', categoria: 'remeras', stock: '100', precio: '10.500', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/289045-800-800?width=800&height=800&aspect=true'},
    {id: '3', name: 'Remera Training Negra', categoria: 'remeras', stock: '100', precio: '11.000', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/269369-800-800?width=800&height=800&aspect=true'},
    {id: '4', name: 'Remera Basica Azul', categoria: 'remeras', stock: '100', precio: '12.000', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/246004-800-800?width=800&height=800&aspect=true'},
    {id: '5', name: 'Remera Basica Negra', categoria: 'remeras', stock: '100', precio: '12.500', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/265546-800-800?width=800&height=800&aspect=true'},
    {id: '6', name: 'Pantalon Basico Negro', categoria: 'pantalones', stock: '100', precio: '10.000', imagen: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb5b6db9f/products/TO_164256/TO_164256-1.JPG'},
    {id: '7', name: 'Pantalon Basico Blanco', categoria: 'pantalones', stock: '100', precio: '10.500', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/265542-800-800?width=800&height=800&aspect=true'},
    {id: '8', name: 'Pantalon Training Azul', categoria: 'pantalones', stock: '100', precio: '11.000', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/269696-800-800?width=800&height=800&aspect=true'},
    {id: '9', name: 'Pantalon Basico Rosa', categoria: 'pantalones', stock: '100', precio: '12.000', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/259356-800-800?width=800&height=800&aspect=true'},
    {id: '10', name: 'Pantalon Basico Verde', categoria: 'pantalones', stock: '100', precio: '12.500', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/266971-800-800?width=800&height=800&aspect=true'},
    {id: '11', name: 'Zapatillas Drive Negras', categoria: 'zapatillas', stock: '100', precio: '10.000', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/271062-800-800?width=800&height=800&aspect=true'},
    {id: '12', name: 'Zapatillas Yucca Rosas', categoria: 'zapatillas', stock: '100', precio: '10.500', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/260442-800-800?width=800&height=800&aspect=true'},
    {id: '13', name: 'Zapatillas Fast Azules', categoria: 'zapatillas', stock: '100', precio: '11.000', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/271038-800-800?width=800&height=800&aspect=true'},
    {id: '14', name: 'Zapatillas Hyde Denim Grises', categoria: 'zapatillas', stock: '100', precio: '12.000', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/270528-800-800?width=800&height=800&aspect=true'},
    {id: '15', name: 'Zapatillas Jiro Bordo', categoria: 'zapatillas', stock: '100', precio: '12.500', imagen: 'https://topperarg.vtexassets.com/arquivos/ids/248146-800-800?width=800&height=800&aspect=true'}
]


export const gFetch = (id) => {
    return new Promise( ( aceptado, rechazado)=> {
        aceptado(id  ? productos.find(prod => prod.id === id) : productos)
    } )
}