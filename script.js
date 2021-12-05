const itemArray = [
    {
        "id": 1,
        "product": "Pão",
        "price": 5.80,
        "quantity": 3,
        "section": "Padaria"
    },
    {
        "id": 2,
        "product": "Leite",
        "price": 3.00,
        "quantity": 1,
        "section": "Derivados de Leite"
    },
    {
        "id": 3,
        "product": "Carne",
        "price": 10.00,
        "quantity": 2,
        "section": "Carne"
    },
    {
        "id": 4,
        "product": "Tomate",
        "price": 4.00,
        "quantity": 5,
        "section": "Hortifruti"
    },
]

const testMap = (array) => {
    const result = array.map((value) => {
        let {id, price} = value
        if(id > 2){
            price = 2.00
        } 
        return {...value, price}
    })
    return result
}
// console.log(testMap(itemArray))


const testFilter = (array) => {
    const result = array.filter(({id}) => {
        if(id <= 2){
            return {...array}
        }
    })
    return result
}
// console.log(testFilter(itemArray))
            
const testFind = (array) => {
    const result = array.find(({id, product}) => {
        if(product === "Leite"){
            return {...array}
        }
    })
    return result
}
// console.log(testFind(itemArray))

const testReduce = (array) => {
    const totalList = array.reduce((acc,{quantity, price}) => {
        acc += quantity * price
        return acc
    },0)
    return totalList
}
// console.log(testReduce(itemArray))

const higherPrice = (array) => {
    const result = array.filter(({price}) => {
        if(price > 3){
            return {...array}
        }
    })
    return result
}
// console.log(higherPrice(itemArray))

const changePrice = (array) => {
    const result = array.map((value) => {
        let {product, price} = value
        if(product === "Leite"){
            price = 4
        }
        return {...value, price}
    })
    return result
}
// console.log(changePrice(itemArray))

