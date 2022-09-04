import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Input,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useDeleteEntitieMutation, useUpdateEntitieMutation } from "./api";

export function EntitieCard(props: any) {
  const [triggerDelete, { isLoading }] = useDeleteEntitieMutation();
  const [triggerUpdate, { isLoading: updateLoading }] =
    useUpdateEntitieMutation();

  const [editing, setEditing] = useState(false);

  function handleDelete() {
    triggerDelete(props.id);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));
    triggerUpdate({ id: props.id, ...values })
      .unwrap()
      .then(() => {
        setEditing(false);
      });
  }

  if (editing)
    return (
      <form onSubmit={handleSubmit}>
        <Flex
          align="center"
          gap={2}
          p={2}
          border="1px solid"
          borderColor="gray.300"
          rounded="md"
        >
          <Input
            defaultValue={props.name}
            w="100px"
            type="text"
            placeholder="name"
            name="name"
          ></Input>
          <Input
            defaultValue={props.age}
            w="100px"
            type="number"
            placeholder="age"
            name="age"
          ></Input>
          <IconButton
            aria-label="update"
            icon={<CheckIcon />}
            type="submit"
            size="sm"
            isLoading={updateLoading}
          >
            update
          </IconButton>
          <IconButton
            aria-label="cancel"
            icon={<CloseIcon />}
            type="button"
            size="sm"
            onClick={() => setEditing(false)}
          >
            Cancel
          </IconButton>
        </Flex>
      </form>
    );

  return (
    <>
      <Flex
        gap={2}
        p={2}
        border="1px solid"
        borderColor="gray.300"
        rounded="md"
        align="center"
      >
        <Text>{props.name}</Text>
        <Text>{props.age}</Text>
        <IconButton
          isLoading={isLoading}
          onClick={handleDelete}
          icon={<DeleteIcon />}
          aria-label="delete"
          size="sm"
          type="button"
        />
        <IconButton
          onClick={() => setEditing(true)}
          isLoading={updateLoading}
          icon={<EditIcon />}
          aria-label="update"
          size="sm"
        />
      </Flex>
    </>
  );
}
