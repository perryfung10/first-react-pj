import styles from './ProductList.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReusableTitle from './ReusableTitle'
import QuantityBtn from './QuantityBtn'

function ProductList() {

    const [productList, setProductList] = useState([])

    useEffect(()=> {
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(res => res.json())
        .then(data => setProductList(data))
    }, [])
    

  return (
    <div>
       <ReusableTitle mainTitle='Please Select the products you want below' subTitle='You are always welcome!!!' />

      
        <div>
            { productList.map((product) => 
            <div key={product.id} className={styles.productBorder}>
                {product.name}<br/>
                {product.price}<br/>
                <Link to={'/product/'+ product.id}>
                <img src={process.env.PUBLIC_URL + '/img1/'+ product.image} alt={product.name} /><br/>

                </Link>
                
                {product.description}<br/>
                <QuantityBtn productInfo={product}/>
                
            </div>
            
            )}
        </div>

        </div>
  )
}

export default ProductList