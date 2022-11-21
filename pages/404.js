import React, { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return <div>NotFound</div>;
};

export default NotFound;
