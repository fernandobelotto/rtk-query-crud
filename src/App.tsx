import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useCreateEntitieMutation } from "./api";
import EntitiesList from "./EntitiesList";

export default function App() {
  const [trigger, { isLoading, isError }] = useCreateEntitieMutation();

  function handleSubmit(e: any) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));
    trigger(values);
  }

  return (
    <Container maxW="container.md">
      <VStack p={10}>
        <Heading>RTK Crud</Heading>
        <form onSubmit={handleSubmit}>
          <VStack
            border="1px solid"
            borderColor="gray.300"
            p={4}
            spacing={2}
            rounded="md"
          >
            <Input type="text" placeholder="name" name="name"></Input>
            <Input type="number" placeholder="age" name="age"></Input>
            <Button type="submit" size="sm" isLoading={isLoading}>
              Create
            </Button>
          </VStack>
        </form>
        <EntitiesList />
      </VStack>
    </Container>
  );
}
