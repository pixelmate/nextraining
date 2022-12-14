import Image from "next/image";
import React from "react";
import styles from "../../styles/ProductsDescription.module.css";

export const getServerSideProps = async (context) => {
  const temp = context.params.id;
  const response = await fetch("https://fakestoreapi.com/products/" + temp);
  const data = await response.json();
  return {
    props: {
      res: data,
    },
  };
};

const id = ({ res }) => {
  console.log(res);
  return (
    <div className="row mt-5 mb-5 ">
      <div className={styles.product_title + "product-image col-6"}>
        <Image src={res.image} width={359} height={359} />
      </div>
      <div className="product-info col-6">
        <h2 className={styles.product_title}>{res.title}</h2>
        <h2 className={styles.product_des}>Rating: {res.rating.rate}</h2>
        <h4 className={styles.product_price}> <span className={styles.span}>Price:</span> ₹{res.price}</h4>
        <h2 className={styles.product_des}>{res.description}</h2>
        <button className="btn btn-primary">Add to Basket</button>
      </div>
    </div >
  );
};

export default id;
