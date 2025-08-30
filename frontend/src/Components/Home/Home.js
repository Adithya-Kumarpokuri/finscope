import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Finance  from "../../img/sideIMG.avif";
import { LightPurpleButton } from '../../styles/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img
                        src={Finance}
                        alt="finance"
                        style={{
                            width: '100%',
                            maxHeight: '80vh',
                            objectFit: 'contain'
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledTitle>
                        <span style={{ fontSize: "30px" }}>Welcome to</span>
                        <br />
                        EduQuest
                        <br />
                        <span style={{ fontSize: "30px" }}>a School Management System</span>
                    </StyledTitle>
                    <StyledText>
                        Streamline school management, class organization, and add students and faculty.
                        Seamlessly track attendance, assess performance, and provide feedback.
                        Access records, view marks, and communicate effortlessly.
                    </StyledText>
                    <StyledBox>
                        <StyledLink to="/choose">
                            <LightPurpleButton variant="contained" fullWidth>
                                Login
                            </LightPurpleButton>
                        </StyledLink>
                        <StyledText>
                            Don't have an account?{' '}
                            <Link to="/Adminregister" style={{ color: "#550080" }}>
                                Sign up
                            </Link>
                        </StyledText>
                    </StyledBox>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

