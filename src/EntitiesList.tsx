import { Box, Text, VStack } from "@chakra-ui/react";
import { useGetEntitiesQuery } from "./api";
import { EntitieCard } from "./EntitieCard";

export default function EntitiesList() {
  const { data, isLoading, isError } = useGetEntitiesQuery({});

  if (isLoading)
    return (
      <Box>
        <Text>Loading Entites ⌛</Text>
      </Box>
    );

  if (isError)
    return (
      <Box>
        <Text>Error getting entities</Text>
      </Box>
    );

  if (data) {
    return (
      <>
        <VStack spacing={2}>
          {data.map(({ age, name, id }: any) => {
            return (
              <>
                <EntitieCard
                  key={id}
                  age={age}
                  name={name}
                  id={id}
                ></EntitieCard>
              </>
            );
          })}
        </VStack>
      </>
    );
  }
  return null;
}
