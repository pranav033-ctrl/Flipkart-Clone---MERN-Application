import { Box, Typography, styled} from "@mui/material";

import navData from "../../Constants/NavbarData";

const NavbarWrapper = styled(Box)`
    display: flex;
    margin: 60px 110px 0px 110px;
    justify-content: space-between;
    text-align: center;
`

const NavItem = styled(Box)`
    padding: 12px 8px;
`

const NavbarItemText = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`

const Navbar = () => {
    return(
        <NavbarWrapper>
            {
            navData.map((data,index) => (
                <NavItem key={index}>
                    <img src={data.url} alt={data.Description} style={{width: 64}}/>
                    <NavbarItemText>{data.Description}</NavbarItemText>
                </NavItem>
            ))
        }
        </NavbarWrapper>
    );
}

export default Navbar;