import React from 'react'
import FlaseDeal from '../FlaseDealCard/FlaseDeal'
import { Link } from 'react-router-dom'

function ProductsCard() {
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                <Link to='/product/id' className='hover:cursor-pointer'>
                    <FlaseDeal thum={"https://images.meesho.com/images/products/75970557/6kmep_512.webp"} titles={"Man tshirt"} price={"400"} lessPrice={"656"} />
                </Link>
                <FlaseDeal thum={"https://images.meesho.com/images/products/63012142/fvkcs_512.webp"} titles={"AutoKraftZ New Latest Winter Knit Thick Fleece Woolen Combo of Beanie Cap Hat Topi Faux Fur Lining Woollen Cap in Red for All Girls Boys Men Women. Free Size"} price={"144"} lessPrice={"200"} />
                <FlaseDeal thum={"https://images.meesho.com/images/products/325309199/rseze_512.webp"} titles={"Men & Women Winter Cap Beanie With Touh screen Winter Gloves"} price={"181"} lessPrice={"190"} />
                <FlaseDeal thum={"https://images.meesho.com/images/products/365774618/ia7hf_512.webp"} titles={"combo ear muffs blue &mixgrey"} price={"174"} lessPrice={"200"} />
                <FlaseDeal thum={"https://images.meesho.com/images/products/42182017/gtwro_512.webp"} titles={"Stylish Designer Women Shirts, Oversized Shirts"} price={"263"} lessPrice={"400"} />
                <FlaseDeal thum={"https://images.meesho.com/images/products/288202204/09i4m_512.webp"} titles={"WOMAN FANCY SHIRT"} price={"175"} lessPrice={"200"} />
                <FlaseDeal thum={"https://images.meesho.com/images/products/372211939/dcvkg_512.webp"} titles={"woman black chack shirt and kansayi tshirt"} price={"212"} lessPrice={"500"} />
                <FlaseDeal thum={"https://images.meesho.com/images/products/60127064/xd5cl_512.webp"} titles={"woman black chack shirt and kansayi tshirt"} price={"283"} lessPrice={"310"} />
            </div>
        </>
    )
}

export default ProductsCard