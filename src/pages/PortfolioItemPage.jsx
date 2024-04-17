import {
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/Tag";

export const PortfolioItemPage = ({ item, clickFn }) => {
  return (
    <Center flexDirection="column" p={10}>
      <Card borderRadius="xl" w="3xl" h="3xl">
        <CardBody>
          <Image h="md" w="100%" src={item.imageUrl} borderRadius="xl" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.title}</Heading>
            <Text>{item.description}</Text>
            <Flex gap={2}>
              {item.skills.map((skill) => (
                <Tag key={skill} size="md">
                  {skill}
                </Tag>
              ))}
            </Flex>
            <Button w="fit-content" onClick={() => clickFn()}>
              Back to overview
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
