/* eslint-disable react/prop-types */

import LiCart from "./LiCart"
import './Cart.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Cart({ selectedObjs, handleClickCartMessage, totalPrice, calcularTotal, deleteItemCart }) {
    const [currentCartItems, setCurrentCartItems] = useState(selectedObjs)

    useEffect(()=>{
        console.log(selectedObjs)
        const nwProducts = selectedObjs
        setCurrentCartItems(nwProducts)
    },[selectedObjs])



    return (
        <div id="CartContent">
            <header>
                <div id='links-Cart'>
                    <Link to="/">Volver</Link>
                    <div>
                        <h1>Total actual: {totalPrice}</h1>
                    </div>
                </div>
            </header>
            <div id='Cart'>
                <ul>
                    {
                        currentCartItems && currentCartItems.map(elem =>
                            <>
                                <LiCart
                                    elem={elem}
                                    calcularTotal={calcularTotal}
                                    deleteItemCart={deleteItemCart}
                                ></LiCart>
                            </>
                        )
                    }

                </ul>
                <div id='Buttons'>
                    <button onClick={handleClickCartMessage}>Crear pedido</button>
                </div>
            </div>

        </div>
    )
}
