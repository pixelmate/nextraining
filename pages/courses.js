import React from "react";

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

const Courses = (props) => {
  const { productData } = props;
  // console.log("props", props);
  return (
    <div>
      <h2>This is Courses</h2>
      {productData.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default Courses;
