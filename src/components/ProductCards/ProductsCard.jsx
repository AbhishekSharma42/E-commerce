import React from 'react'
import FlaseDeal from '../FlaseDealCard/FlaseDeal'

function ProductsCard() {
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                <FlaseDeal />
                <FlaseDeal />
                <FlaseDeal />
                <FlaseDeal />
                <FlaseDeal />
                <FlaseDeal />
                <FlaseDeal />
                <FlaseDeal />
            </div>
        </>
    )
}

export default ProductsCard