import React,{useEffect,useState} from "react";
import "./css/products.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Products = (props) => {
  const URL = "http://localhost:4000";

  const [productslist, setProductslist] = useState([])
 
  const storedJwt = sessionStorage.getItem('authToken');
    const fetch_products =async() => {
      // e.preventDefault();
      if (storedJwt===null)  {
        return( console.log("not logged in"));
        
      }
      else{
      try {
        const res = await fetch(`${URL}/product/category?category=${category}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            "authToken": `Bearer ${storedJwt}`
          },
        
        });
  
        const data = await res.json();
        console.log(data)
        setProductslist(data)
        if (data === "") {
          console.log("signup not successfull");
        } else {
          console.log("signup sucessful");
       
        }
        
      } catch (err) {
        console.log(err);
   
      }
    }
    };
  
  const style = {

    boxShadow: "-1px -1px 0 0.25rem #2a6cc900",
  };

  const sample_products_info = productslist
  const location = useLocation();
  const category = location.state;
  console.log(category)
  useEffect(() => {
    window.scrollTo(0, 0);
  
    fetch_products()
  }, []);
  return (
    <div className="products container">
      <div className="head_of_products">
        <div className="header">Smart Causals</div>
        <div className="sort_by  border rounded">
          <label htmlFor="sort_by" className="sort_by_label">
            Sort By:
          </label>
          <select
            className="after_selection  font-15 border-0 form-select"
            style={style}
            aria-label="Default select example"
          >
            <option defaultValue="0">recomended</option>
            <option value="1">one</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <hr />

      <div className="products_samples">
        <div className="sample">
          
          {sample_products_info.map((e) => {
            return (
              <div key={e.code}>
                
                    <div >
                      <Link to="/single-product" state={e}>
                        <div className="text-decoration-none   border-0 text-brown   card m-2">
                          <div className="product-img">
                            <img
                              src={e.img}
                              className=" rounded card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body">
                            <div className=" text-decoration-none font-12   card-text fw-bold">
                              {e.code}
                            </div>
                            <div className=" text-decoration-none font-12   card-text">
                              {e.color}
                            </div>
                            <div className=" text-decoration-none font-12   fw-bold card-text">
                              {e.cost}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
