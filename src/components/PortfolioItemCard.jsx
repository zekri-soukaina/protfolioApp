import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Tag } from "./ui/Tag";

export const PortfolioItemCard = ({ item, clickFn }) => {
  return (
    <div>
      <Card
        // maxW="sm"
        gap={8}
        w="sm"
        h="30rem"
        borderRadius={"xl"}
        cursor={"pointer"}
        onClick={() => clickFn(item)}
        _hover={{ transform: "scale(1.01)" }}>
        <CardBody>
          <Image
            src={item.imageUrl}
            alt={item.title}
            borderRadius="lg"
            h={64}
            w="sm"
            // borderRadius="xl"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.title}</Heading>
            <Text>{item.summary}</Text>
            <Flex gap={2}>
              {item.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};
