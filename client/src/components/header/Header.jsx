import Search from './Search';
import CustomButtons from './CustomButtons';

import {AppBar, Toolbar, Box, Typography, styled} from '@mui/material';

const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#2874f0',
  height: 55,
});

const StyledLogo = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`
const StyledSubLogo = styled(Typography)`
  font-size: 12px;
  font-style: italic;
`

function Header(){
    return(
        <StyledAppBar>
      <Toolbar style={{ minHeight: 55}}>
        <StyledLogo>
          <img src={logoURL} alt='Flipkart' style={{width:75}} ></img>
          <Box>
            <StyledSubLogo>Explore&nbsp;
              <Box component="span"  style={{ color: '#FFE500' }}> 
              Plus
              <img src={subURL} alt='Flipkart' style={{ width:12}} ></img> 
              </Box>
            </StyledSubLogo>
          </Box>
        </StyledLogo>
        <Search />
        <CustomButtons />
      </Toolbar>
    </StyledAppBar>
    )
}

export default Header;