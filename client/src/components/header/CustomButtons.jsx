import { Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ButtonWrapper = styled(Box)`
display : flex;
margin : 0 5% 0 auto;
& > p, & > button, & > div {
    margin-right : 40px;
    font-size : 16px;
    margin-top : auto;
    margin-bottom : auto;
}
`

const LoginButton = styled(Button)`
    color: #2874f0;
    background-color: #fff;
    padding : 5px 40px;
    text-transform : none;
    border-radius : 2px;
    box-shadow : none;
    font-weight : 600;
    height : 32px;
`

function CustomButtons() {
    return (
        <ButtonWrapper>
            <LoginButton variant='contained' > Login </LoginButton>
            <Typography>Become Seller</Typography>
            <Typography>More</Typography>

            <Box style={{display: 'flex'}}>
                <ShoppingCartIcon/>
                Cart
            </Box>
        </ButtonWrapper>
    );
}

export default CustomButtons;