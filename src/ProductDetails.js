import { useParams, Link } from "react-router-dom"
import QuantityBtn from "./QuantityBtn"
import ReusableTitle from "./ReusableTitle"
import { useEffect, useState } from "react"

function ProductDetails() {

    let params = useParams()
    const [productDetail, setProductDetail] = useState(null)



    useEffect(() => {
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(res=> res.json())
        .then(data => {
            let productInfo = data.find(element => (element.id === parseInt(params.id)))
            setProductDetail(productInfo)
        }
            
          )
      
        
        
      }, [params.id])
      

  return (
    
    <div>
       
        {
            productDetail && 
            <div>
                <ReusableTitle mainTitle={productDetail.name + "information"} />
                <img src={process.env.PUBLIC_URL+'/img1/'+productDetail.image} alt={productDetail.name}  width='300' height='300'/>
                <p>Product name: {productDetail.name}</p>
                <p>Product price: ${productDetail.price}</p>
                <p>Product description: {productDetail.description}</p>
                <QuantityBtn productInfo={productDetail} />
                <Link to='/'>Back to Product List</Link>
            </div>
        }
        
    </div>
  )
}

export default ProductDetails