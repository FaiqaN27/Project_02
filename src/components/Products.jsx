import React, { useState } from 'react'
import Cart from './Cart';

const Products = () => {
    const products = [
        {
            id: 0,
            img: './products/showcase-2.jpg',
            title: 'Rolex',
            description: 'Classic & Modern',
            price: '130$'
        },
        {
            id: 1,
            img: './products/showcase-3.jpg',
            title: 'Swiz',
            description: 'Classic & Modern',
            price: '90$'
        },
        {
            id: 2,
            img: './products/showcase-5.jpg',
            title: 'Omega Seamaster',
            description: 'Elegant & Sophisticated',
            price: '100$'
        },
        {
            id: 3,
            img: './products/showcase-6.jpg',
            title: 'Breitling Navitimer',
            description: 'Aviation-inspired',
            price: '150$'
        },
        {
            id: 4,
            img: './products/showcase-7.jpg',
            title: 'Reverso',
            description: 'Classic & Elegant',
            price: '190$'
        },
        {
            id: 5,
            img: './products/showcase-8.jpg',
            title: 'Rado',
            description: 'Racing-inspired',
            price: '180$'
        },
    ]

    const [isCartVisible, setIsCartVisible] = useState(false);
    const [cart, setCart] = useState([]);

    const onAdd = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist) {
            setCart(
                cart.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        }
        else {
            setCart(
                [...cart, { ...product, qty: 1 }]
            );
        }
    }

    const onRemove = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty == 1) {
            setCart(
                cart.filter((x) => x.id !== product.id)
            );
        } else {
            setCart(
                cart.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    }

    const viewCart = () => {
        setIsCartVisible(true);
    }

    return (
        <div className='container mb-5'>
            <h2 className="product-heading" id='products'>Products</h2>
            <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 g-3 py-2'>
                {products.map((product) => {
                    return (
                        <div className='col' key={product.id}>
                            <div className='card'>
                                <img className="card-img-top" src={product.img} alt='watch image' />

                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className='card-text'>{product.description}</p>
                                </div>

                                <div className='d-flex justify-content-around mb-4'>
                                    <h3 className='product-price'>{product.price}</h3>
                                    <button className='cart-btn' onClick={() => onAdd(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className='d-flex justify-content-center mt-4'>
                {isCartVisible ? <div className='container'>{cart.length > 0 ? <Cart
                    cart={cart}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
                    : <h2 className='text-center'>Your Cart Is Empty</h2>}</div> : <button className='btnCart text-center' onClick={viewCart}>View Cart</button>}
            </div>

        </div>
    )
}

export default Products