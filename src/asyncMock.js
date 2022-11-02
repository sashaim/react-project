// creo los objetos de los productos . Imito una api

const products = [
    {
        id : '1',
        name : 'blackhoodie',
        category : 'buzos',
        price : '250',
        img : 'https://cdn.shopify.com/s/files/1/0427/7095/6453/products/HCS_Ecom_HCS_Black_Hoodie_03.jpg?v=1639017029',
        stock : '20',
        description : 'buzo negro clasico' 
    },
    { id : '2', name: 'whitehoodie',category : 'buzos',price:'300', img : 'http://cdn.shopify.com/s/files/1/0510/2685/4059/products/H-Vogue_PSNY_White_Hoodie_Front_298ea2ec-2524-4aa1-bcfa-e1949e4c789d_grande.jpg?v=1613060439',stock : '10', description : 'buzo blanco liso'},
    { id : '3', name: 'whitetee',category : 'remeras',price:'100', img : 'https://d2r9epyceweg5n.cloudfront.net/stores/145/859/products/whatsapp-image-2021-11-13-at-14-47-571-d98980b9beefd8b70e16370887790846-1024-1024.jpeg',stock : '14', description : 'remera blanca liso'},
    { id : '4', name: 'blackcap',category :'cap',price:'150', img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8OwhP0GwzEmTi0abAcb136bcPdcJ4X3ZSw&usqp=CAU',stock : '12', description : 'gorra negra liso'}
]
//
export const getProducts = (categoryId)=> {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId ):products)
        }, 1000);
    })
}

//

export const getProduct = (id)=> {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000);
    })
}