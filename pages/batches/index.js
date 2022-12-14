import React from "react";
import Link from "next/link";

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

const Batches = (props) => {
  // console.log("props", props);
  const { productData } = props;
  return (
    <div>
      <h2 className="text_nextjs">This is batch file</h2>
      {productData.map((item) => (
        <div key={item.id} className={" col-md-12 col-lg-4 mb-4 mb-lg-0 p-2 "}>
          <Link href={`/batches/${item.id}`}>
            <div className={" p-3 border bg-light text-center"}>
              {/* <Image
              src={item.image}
              width={210}
              height={280}
              alt="product_img"
            /> */}
              <div>{item.title}</div>
              {/* <div> ${item.price}</div>
              <button type="button" class="btn btn-primary">
                Add to Cart
              </button> */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Batches;
