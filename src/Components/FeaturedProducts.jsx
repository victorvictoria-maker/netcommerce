import { useContext } from "react"
import { StoreContext } from "../Contexts/StoreContext";
import { useNavigate } from "react-router-dom";


export const FeaturedProducts = () => {
    const navigate = useNavigate();

    const {allProduct} = useContext(StoreContext);
    console.log(allProduct);

    function getRandomItemsFromArray(array, count) {
        // if (count > array.length) {
        //   throw new Error("Count is greater than array length");
        // }
      
        const shuffledArray = array.slice(); // Create a copy of the array
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
      
        return shuffledArray.slice(0, count);
      }
      
      
      const randomItems = getRandomItemsFromArray(allProduct, 4);
      console.log(randomItems);
      

  return (
    <div>
        <div className="container-fluid fproductswrap">
        <h4 className='text-center alsolike mt-3 pt-4 mb-4'>YOU MAY ALSO LIKE</h4>
            <div className="row">
                {randomItems?.map((product, key) => {
                    return <div className="col-3 ps-5 pe-5 fproducts" key={key}>
                        <img src={product.image} alt={product.title} width='100' height='120' key={key}/>
                        <p className="mt-3">{product.title}</p>
                        <button className="btn btn-sm btn-danger" onClick={() => navigate(`/products/${product.id}`)}>Check Product</button>
                    </div>;
                })}
            </div>
        </div>
    </div>
  )
}
