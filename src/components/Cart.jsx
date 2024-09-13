import React from 'react'

const Cart = ({ cart, onAdd, onRemove }) => {

    const itemsPrice = cart.reduce((a, c) => a + parseInt(c.qty) * parseFloat(c.price), 0);
    const taxRate = itemsPrice * 0.1;
    const shippingPrice = 50;
    const totalPrice = itemsPrice + taxRate + shippingPrice;

    return (
        <div className='container'>
            <h2 className='cart-heading'>Your Cart</h2>
            <hr />
            <div className='row'>
                <h4 className='col-4'>Watch Name</h4>
                <h4 className='col-4'>Qty x Price <br />(per item)</h4>
                <h4 className='col-2'>+</h4>
                <h4 className='col-2'>-</h4>
            </div>
            <hr />
            {
                cart.map((item) => {
                    return (
                        <div className='row' key={item.id}>
                            <div className='col-4'>{item.title}</div>
                            <div className='col-4'> {item.qty} x {item.price}</div>
                            <div className='col-2'><button onClick={() => onAdd(item)} className='btn btn-info mb-3'>+</button></div>
                            <div className='col-2'><button onClick={() => onRemove(item)} className='btn btn-danger'>-</button></div>
                        </div>
                    )
                })}

            <div className='row'>
                <div className='col-4'><p className='lead'>Total: $ {itemsPrice}</p></div>
                <div className='col-4'><p className='lead'>Tax Include: $ {taxRate}</p></div>
                <div className='col-4'><p className='lead'>Shipping Cost: $ {shippingPrice}</p></div>
                <div className='col'><h1 className='display-5 text-center'>Grand Total: $ {totalPrice}</h1></div>
            </div>
        </div>
    )
}

export default Cart