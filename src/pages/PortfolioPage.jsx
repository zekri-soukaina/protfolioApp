import { portfolioItems } from "../utils/data";
import { PortfolioItemCard } from "../components/PortfolioItemCard";
import { Center } from "@chakra-ui/react";

export const PortfolioPage = ({ clickFn }) => {
  return (
    <div>
      <Center
        gap={16}
        w={{ base: "full" }}
        flexWrap="wrap"
        flexDir={{ base: "column", sm: "row" }}>
        {portfolioItems.map((item) => (
          <PortfolioItemCard key={item.id} item={item} clickFn={clickFn} />
        ))}
      </Center>
    </div>
  );
};
