import Navbar from "./Navbar";
import CarouselBanner from "./CarouselBanner";
import DealsOfTheDays from "./DealsoftheDays";

import { Box } from "@mui/material";

const Home = () => {
    return (
        <>
            <Box style={{ marginTop: 55, marginLeft: 10, marginRight: 10 }}>
                <Navbar />
            </Box>
            
            <Box>
                <CarouselBanner />
            </Box>
            <Box>
                <DealsOfTheDays />
            </Box>
        </>
    );
};

export default Home;
