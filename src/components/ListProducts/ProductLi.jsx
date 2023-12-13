/* eslint-disable react/prop-types */
import './Product.css'
import { useEffect, useState } from "react"

export function ProductLi({elem, handleClickLi}) {

    const [select, setSelect] = useState(elem.selected)
    const [categ, setCateg] = useState(elem.category)
    

    useEffect(()=>{
        setSelect(!elem.selected)
        if (elem.selected){
            setCateg("")
        }else{
            setCateg(elem.category)

        }
    },[elem.selected])

    return (
        <div>
            <li key={elem.id} className={`${categ} producto ${select ? "no-select" : "select"} `} onClick={() => handleClickLi(elem)}>
                <h1>
                    {elem.name}
                </h1>
                <img src={elem.img} alt="" />
                <h2>$ {elem.price}</h2>
            </li>
        </div>
    )
}
