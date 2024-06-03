// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: 5
}

const { label, stock, price:currentPrice, rating=5 } = product //new var name currentPrice, new var rating with default value
console.log(label)
console.log(stock)
console.log(currentPrice)
console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}
transaction('order', product)