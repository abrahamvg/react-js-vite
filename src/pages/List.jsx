import { Heading, Spinner, Box, Text } from "@radix-ui/themes";
import { useEffect, useState, useRef, useCallback } from "react";
import { animalList } from "../data/dataProvider";
import { Link, useNavigate } from "react-router-dom";

export default function List() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const observer = useRef();

  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && products.length > 0) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, products.length]
  );

  useEffect(() => {
    setLoading(true);
    animalList(9, page)
      .then((response) => {
        setProducts((prevProducts) => [...prevProducts, ...response]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

  }, [page]);

  // const navigateToProduct = (id) => {
  //   console.log(id);
  //   navigate(`/${id}`, {});
  // };

  return (
    <div className="p-8">
      <Heading mb="2" size="12">
        List of Doggo(s) 🐶{" "}
      </Heading>

      <div className="flex flex-wrap w-full gap-10 auto-cols-auto">
        {products?.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <Link to={`/${product.id}`}
                key={product.id}
                ref={lastProductRef}
                className="shadow-md rounded-md h-fit w-96 overflow-hidden hover:cursor-pointer hover:shadow-2xl hover:scale-105"
                // onClick={(e) => {
                //   navigateToProduct(product.id);
                // }}
              >
                <img
                  className="w-full h-[300px] object-cover object-top rounded-sm"
                  src={product?.url}
                  alt={product?.breeds[0]?.name}
                />
                <Box className="p-4">
                  <Heading mt="2" size="5">
                    {product?.breeds[0]?.name}
                  </Heading>
                  <Text mt="2">
                    <b>Skill: </b> {product?.breeds[0]?.bred_for}
                  </Text>
                </Box>
              </Link>
            );
          } else {
            return (
              <Link to={`/${product.id}`}
                key={product.id}
                className="shadow-md rounded-md h-fit w-96 overflow-hidden hover:cursor-pointer hover:shadow-2xl hover:scale-105"
                // onClick={(e) => {
                //   navigateToProduct(product.id);
                // }}
              >
                <img
                  className="w-full h-[300px] object-cover object-top rounded-sm"
                  src={product?.url}
                  alt={product?.breeds[0]?.name}
                />
                <Box className="p-4">
                  <Heading mt="2" size="5">
                    {product?.breeds[0]?.name}
                  </Heading>
                  <Text mt="2">
                    <b>Skill: </b> {product?.breeds[0]?.bred_for}
                  </Text>
                </Box>
              </Link>
            );
          }
        })}
      </div>
      <div className="w-full flex justify-center my-10">
        <Spinner loading={loading} />
      </div>
    </div>
  );
}
