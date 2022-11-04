import React from 'react'
import Tavar from './Tavar'
import Product from './Product'
import KatigoriyaComponenet from './KatigoriyaComponenet'


export default function CardMini() {

  return (
    <div className='cardmini'>
      <div className="all_item__card">
        {/* Tavar */}
        <Tavar />

        {/* Product */}
        <div className="product">
          <Product />
        </div>

        {/* Katigory */}
        <div className="katigory_compo">
          <KatigoriyaComponenet />
        </div>

      </div>

    </div>
  )
}
