import React, { useState, useEffect } from 'react';
import {
    Box, styled, TextareaAutosize, Button, FormControl, InputBase, CircularProgress, Snackbar
} from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: { margin: 0 }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const StyledTextArea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: 'Tech',
    createdDate: new Date()
};

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const defaultImage = '/images/IMG_7165.JPG';

    // Fetch post data when component mounts
    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await API.getPostById(id);
                if (response.isSuccess) {
                    setPost(response.data);
                    setImageURL(response.data.picture);
                } else {
                    throw new Error('Failed to fetch post data.');
                }
            } catch (err) {
                console.error('Error fetching post data:', err);
                setError('Error fetching post data.');
                setOpenSnackbar(true);
            }
        };
        fetchPostData();
    }, [id]);

    // Upload image when a file is selected
    useEffect(() => {
        const uploadImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('file', file);

                try {
                    const response = await API.uploadFile(data);
                    if (response.isSuccess) {
                        setPost((prevPost) => ({
                            ...prevPost,
                            picture: response.data
                        }));
                    } else {
                        throw new Error('Error uploading file.');
                    }
                } catch (err) {
                    console.error('Error uploading file:', err);
                    setError('Error uploading file.');
                    setOpenSnackbar(true);
                }
            }
        };
        uploadImage();
    }, [file]);

    // Update blog post
    const updateBlogPost = async () => {
        if (!post.title || !post.description) {
            setError('Title and description cannot be empty.');
            setOpenSnackbar(true);
            return;
        }

        setLoading(true);
        try {
            const response = await API.updatePost(post);
            if (response.isSuccess) {
                navigate(`/post/${id}`);
            } else {
                throw new Error('Failed to update the post.');
            }
        } catch (err) {
            console.error('Error updating post:', err);
            setError('An error occurred. Please try again.');
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };

    // Handle changes to input fields
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageURL(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    // Close the Snackbar
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container>
            <Image src={imageURL || post.picture || defaultImage} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                <InputTextField
                    onChange={handleChange}
                    value={post.title}
                    name="title"
                    placeholder="Title"
                />
                <Button
                    onClick={updateBlogPost}
                    variant="contained"
                    color="primary"
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : 'Update'}
                </Button>
            </StyledFormControl>

            <StyledTextArea
                minRows={5}
                placeholder="Tell your story..."
                name="description"
                onChange={handleChange}
                value={post.description}
            />

            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                message={error || 'Post updated successfully!'}
            />
        </Container>
    );
};

export default Update;