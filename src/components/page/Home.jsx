import { Box, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import Sidebar from "../Sidebar";

const skeletonArr = new Array(12).fill("");

const homeWrapper = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: 3,
  p: 3,
  overflowY: "auto",
  maxHeight: "calc(100vh - 200px)",
};

const Home = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products?limit=12")
  //     .then((res) => {
  //       setIsLoading(true);
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setProduct(data.products);
  //       setIsLoading(false);
  //     });
  // }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        setIsLoading(true);
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, []);

  let content = null;

  if (isLoading)
    content = skeletonArr?.map((item, i) => (
      <Stack direction={"column"} key={i}>
        <Skeleton variant="rectangular" width={"100%"} height={118} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton width="80%" />
          <Skeleton width="60%" />
        </Box>
      </Stack>
    ));

  if (!isLoading)
    content = products?.map((product) => (
      <ProductItem
        key={product.id}
        title={product.title}
        image={product.image}
        description={product.description}
      />
    ));

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "minmax(150px, 25%) 1fr" }}
    >
      <Sidebar />

      <main>
        <Box sx={homeWrapper} className="scrollBar">
          {content}
        </Box>
      </main>
    </Box>
  );
};

export default Home;
