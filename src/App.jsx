import { useState } from "react";
// import "./App.css";
// import { portfolioItems } from "./utils/data";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { Center, Heading, Text } from "@chakra-ui/react";

export const App = () => {
  // console.log(portfolioItems); // Check console to see how portfolioItems look like. You can delete this after.

  const [selectedItem, setSelectedItem] = useState();
  const greeting = "IT portfolio management";

  return (
    <Center m={0} bgColor="green.100" p={10} flexDir="column">
      {selectedItem ? (
        <PortfolioItemPage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <>
          <Heading size="2xl" mb={8} color="green.700">
            {greeting}
          </Heading>
          <Text p={5} m={10}>
            the application of systematic management to the investments,
            projects and activities of enterprise Information Technology (IT)
            departments.
          </Text>
          <PortfolioPage clickFn={setSelectedItem} />
        </>
      )}
    </Center>
  );
};
