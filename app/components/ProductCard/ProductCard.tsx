import React from 'react'
import AddToCart from '../AddToCart'
// import styles from './ProductCard.module.css' className={styles.card}

const ProductCard = () => {
    return (
        <div className='p-5 my-5 bg-sky-400 text-white text-x hover:bg-slate-400' ><AddToCart /></div>
    )
}

export default ProductCard