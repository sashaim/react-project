// creo los objetos de los productos . Imito una api

const products = [
    {
        id : '1',
        name : 'blackhoodie',
        category : 'buzos',
        price : '250',
        img : '../public/blackhoodie.jpeg',
        stock : '20',
        description : 'buzo negro clasico' 
    },
    { id : '2', name: 'whitehoodie',category : 'buzos',price:'300', img : '../public/blackhoodie.jpeg',stock : '10', description : 'buzo blanco liso'},
    { id : '3', name: 'whitetee',category : 'remeras',price:'100', img : '../public/blackhoodie.jpeg',stock : '14', description : 'remera blanca liso'}
]

export const getProducts = (categoryId)=> {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId ):products)
        }, 1000);
    })
}

export const getProduct = (id)=> {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000);
    })
}