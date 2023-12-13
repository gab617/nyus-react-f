/* eslint-disable react/prop-types */
import './LiCart.css'
import { useEffect, useState } from "react"

export default function LiCart({ elem, calcularTotal, deleteItemCart }) {
    const [cantSolicitada, setCantSolitida] = useState(elem.amount)

    function add(elemProduct) {
        elemProduct.amount = elemProduct.amount + 1
        setCantSolitida(elemProduct.amount)
        console.log(elemProduct.amount)
    }

    function decrement(elemProduct) {
        if (elemProduct.amount == 1) return
        elemProduct.amount = elemProduct.amount - 1
        setCantSolitida(elemProduct.amount)
        console.log(elemProduct.amount)
    }

    useEffect(() => {
        console.log('cantidad modificada')
        calcularTotal()
    }, [cantSolicitada])

    useEffect(()=>{
        setCantSolitida(elem.amount)
    },[elem.amount])



    return (
        <li id="ListElement" className="fade-in">
            <div id="cont-name-btn-eliminar">
                <p>{elem.name}</p>
                <h3>${elem.price}</h3>
                <button onClick={()=>deleteItemCart(elem)}>Eliminar</button>
            </div>

            <div id="cont-img-section">
                <div className="img-container">
                    <img src={elem.img} alt="" />
                </div>
                <div id="pack-kilo-btns">
                    {/*                     <button className={elecPack} onClick={() => handlePack(elecPack)}>Pack</button>
                    <button className={elecKilo} onClick={() => handleKilo(elecKilo)}>Kilos</button>
                 */}</div>
                <div id="counter">
                    <button id="count-btn1" onClick={() => decrement(elem)}>-</button>
                    <h2>{cantSolicitada}</h2>
                    <button id="count-btn2" onClick={() => add(elem)}>+</button>
                </div>
            </div>


        </li>
    )
}
