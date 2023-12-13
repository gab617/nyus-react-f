import { getData, sortCategories, reloadSelected  } from './assets/js/dataController'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import ListProduct from './components/ListProducts/ListProduct'

function App() {

  const [currentData, setCurrentData] = useState(sortCategories())
  const [selectedObjs, setSelectedObjs] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  function handleClickLi(liElem) {
    let nwArray = []
    if (liElem.selected) {
      nwArray = selectedObjs.filter(obj => obj.id !== liElem.id)
      liElem.selected = false
    } else {
      liElem.selected = true
      nwArray = [...selectedObjs, liElem]
    }
    setSelectedObjs(nwArray)
    console.log(nwArray)
  }

  function calcularTotal() {
    let sumaTotal = selectedObjs.reduce((acumulador, objeto) => acumulador + objeto["price"] * objeto["amount"], 0);
    setTotalPrice(sumaTotal.toFixed(2))
  }

  function handleClickCartMessage() {

    // Crea un elemento textarea temporal
    const tempTextArea = document.createElement('textarea');
    const listaString = selectedObjs.map(prod => `*${prod.name} x${prod.amount}   = $${prod.amount * prod.price}`).join('\n');

    tempTextArea.value = `Lista de productos solicitados: \n${listaString}\n\nTotal = $${totalPrice}`;

    // Agrega el textarea temporal al cuerpo del documento
    document.body.appendChild(tempTextArea);
    // Selecciona el texto en el textarea
    tempTextArea.select();

    // Intenta copiar el texto al portapapeles
    document.execCommand('copy');

    // Elimina el textarea temporal
    document.body.removeChild(tempTextArea);
  }

  function handleReload() {
    if (selectedObjs.length == 0) return
    (async () => {
      try {
        await reloadItemsProducts()
        await reloadSelected()
      } catch (error) {
        console.error('Error:', error);
      }
    }
    )()

  }

  function reloadItemsProducts() {
    setSelectedObjs([])
    setCurrentData(sortCategories())
  }

  function deleteItemCart(elemCart){
    console.log(elemCart)
    elemCart.selected = false
    elemCart.amount = 1
    let newProducts = selectedObjs.filter(objeto => objeto.id !== elemCart.id);
    setSelectedObjs(newProducts)
  }

  useEffect(() => {
    calcularTotal()
  }, [selectedObjs])

  return (
    <div id='Content'>

      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>

                <ListProduct
                  totalPrice={totalPrice}
                  currentData={currentData}
                  handleReload={handleReload}
                  handleClickLi={handleClickLi}
                ></ListProduct>
              </>
            }
          />

          <Route
            path='/cart'
            element={
              <>
                <Cart
                  selectedObjs={selectedObjs}
                  handleClickCartMessage={handleClickCartMessage}
                  totalPrice={totalPrice}
                  calcularTotal={calcularTotal}
                  deleteItemCart={deleteItemCart}
                ></Cart>
              </>
            }
          />

        </Routes>
      </Router >
    </div>

  )

}

export default App
