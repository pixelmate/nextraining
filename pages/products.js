import React from "react";
import styles from "../styles/Products.module.css";
import Image from "next/image";
export const getStaticProps = async () => {
  //api call
  // This ll work only on server side not in browser
  const response = await fetch("https://fakestoreapi.com/products");
  // console.log(response);
  const data = await response.json(); //to convert stringify json to parsed json
  // console.log(data);
  return {
    props: { productData: data },
  };
};

const Products = (props) => {
  const { productData } = props;
  // console.log("props", props);
  return (
    <>
      <h2 className="text-center p-4">Products</h2>
      <div className={styles.product_lisitng + " row col-12 m-auto  "}>
        {productData.map((item) => (
          <div
            key={item.id}
            className={" col-md-12 col-lg-4 mb-4 mb-lg-0 p-2 "}
          >
            <div className={" p-3 border bg-light text-center"}>
              <Image
                src={item.image}
                width={210}
                height={280}
                alt="product_img"
              />
              <div>{item.title}</div>
              <div> ${item.price}</div>
              <button type="button" class="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
