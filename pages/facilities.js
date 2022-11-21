import React from "react";
export const getStaticProps = () => {
  return {
    props: { footerstatus: true },
  };
};
const Facilities = (props) => {
  return (
    <div>
      <h2>This is Facilities</h2>
    </div>
  );
};

export default Facilities;
