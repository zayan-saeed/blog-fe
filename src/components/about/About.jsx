
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Welcome to Blog - Your Gateway to Diverse Ideas and Insights!</Typography>
                <Text variant="h5">Who We Are <br />
We are a dynamic digital platform dedicated to sharing knowledge, stories, and perspectives across a wide spectrum of topics. Founded in 2024, Blog has grown into a vibrant community of writers, thinkers, and curious minds who believe in the power of sharing ideas.<br/><br />

Our Mission <br />
To create a space where knowledge flows freely, where diverse voices are heard, and where readers can explore everything from technology to travel, lifestyle to literature, and science to society. We aim to inform, inspire, and ignite meaningful conversations through quality content that matters.<br /><br />

What We Cover <br />
Our content spans across multiple categories including:<br />
•Technology & Innovation <br />
• Music <br />
• Movies <br />
• Sports <br />
• Fashion <br /> <br />

Why Choose Us <br />
What sets us apart: <br />
• Diverse Perspectives: Our contributors bring unique insights from various backgrounds and expertise <br />
• Quality Content: Well-researched, engaging, and thoughtfully crafted articles <br />
• Regular Updates: Fresh content that keeps you informed and inspired <br />
• User-Friendly Experience: Easy navigation and accessible format <br />
• Community-Driven: Active engagement with readers through comments and social media <br /> <br />

For Our Readers <br />
Whether you're a curious learner, a professional seeking insights, or someone looking for entertainment and inspiration, Blog offers something for everyone. Our articles are crafted to be: <br />
• Informative yet engaging <br />
• In-depth yet accessible <br />
• Practical yet thought-provoking <br /> <br />

For Contributors <br />
We welcome passionate writers and experts who want to share their knowledge and experiences. If you're interested in contributing: <br />
• Submit your ideas <br />
• Join our growing community of writers <br />
• Reach a diverse, global audience <br />
• Share your expertise<br />
                
                    
                       
                       
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;