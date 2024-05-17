import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animalData } from "../data/dataProvider";
import { Box, Heading, Text } from "@radix-ui/themes";

export default function Product() {
  let { doggoId } = useParams();
  let [data, setData] = useState();

  useEffect(() => {
    animalData(doggoId).then((response) => {
      setData(response);
    });
  }, []);

  return (
    <Box className="h-full w-full flex">
      <Box className="m-auto h-fit md:h-96 md:w-[40rem] w-[30rem] flex shadow-md p-4 rounded-md  flex-col md:flex-row">
        <div className="left-container md:w-[300px] w-full">
          <img
            className="w-full h-full object-cover object-center rounded-sm"
            src={data?.url}
            alt={data?.breeds[0]?.name}
          />
        </div>
        <Box className="right-container p-4">
          <Box>
            <Text>Meet the fabulous :</Text>
            <Heading size="4">{data?.breeds[0]?.name}</Heading>
          </Box>
          <Box className="mt-4">
            <Text>
              Specs :
              <Box className="grid grid-cols-2 gap-x-2 gap-y-2">
                <Box>
                  <Text size="1">Breed Group</Text>
                  <Heading size="2">
                    {data?.breeds[0]?.breed_group ? data?.breeds[0]?.breed_group : 'NA'}
                  </Heading>{" "}
                </Box>
                <Box>
                  <Text size="1">Breed For</Text>
                  <Heading size="2">{data?.breeds[0]?.bred_for ? data?.breeds[0]?.bred_for : 'NA'}</Heading>{" "}
                </Box>
                <Box>
                  <Text size="1">Life Span</Text>
                  <Heading size="2">{data?.breeds[0]?.life_span ? data?.breeds[0]?.life_span : 'NA'}</Heading>{" "}
                </Box>
                <Box>
                  <Text size="1">Origin</Text>
                  <Heading size="2">{data?.breeds[0]?.country_code ? data?.breeds[0]?.country_code : 'NA'}</Heading>{" "}
                </Box>
              </Box>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
