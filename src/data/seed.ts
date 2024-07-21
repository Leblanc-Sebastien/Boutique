import product from './product'

export async function seed() {
  try {
    await fetch('https://restapi.fr/api/products', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
  } catch (error) {
    console.log(error)
  }
}
