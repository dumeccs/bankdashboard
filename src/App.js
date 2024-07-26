import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";


function App() {
  return (
   <Flex direction="row" height="100vh">
        <Sidebar/>
        <MainContent/>
   </Flex>
  );
}

export default App;




