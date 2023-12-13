/* eslint-disable react/prop-types */
import './ListProduct.css'
import { Link } from "react-router-dom";
import { ProductLi } from './ProductLi';

export default function ListProduct({ totalPrice, currentData, handleClickLi, handleReload }) {
    return (
        <div id='ListProdContent'>
            <header>
                <div id='links-LP'>
                    <Link to="/cart">Carrito</Link>
                    <div className='tot-reload'>
                        <h1>Total actual: {totalPrice}</h1>
                        <button onClick={handleReload}>Reload</button>
                    </div>
                </div>
            </header>
            <div id='ListProducts'>
                <ul id='UlPrincipal'>
                    {
                        currentData && currentData.map(elem => (
                            <>
                                <ProductLi
                                    elem={elem}
                                    handleClickLi={handleClickLi}
                                />
                            </>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
