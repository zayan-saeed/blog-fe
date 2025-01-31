
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(/images/IMG_7163.JPG) center/100% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    margin-top: 10px;
    font-size: 20px;
    color: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Publish your passions, your way</Heading>
            <SubHeading>Create a unique and beautiful blog easily.</SubHeading>
        </Image>
    )
}

export default Banner;