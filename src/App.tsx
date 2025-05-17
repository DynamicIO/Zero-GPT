import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  CircularProgress,
  Fade,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: '16px',
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
    : '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 40px rgba(0, 0, 0, 0.4)'
      : '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const HighlightedText = styled('span')<{ isAI: boolean }>(({ theme, isAI }) => ({
  backgroundColor: isAI 
    ? theme.palette.mode === 'dark'
      ? 'rgba(255, 0, 0, 0.3)'
      : 'rgba(255, 0, 0, 0.15)'
    : 'transparent',
  padding: '2px 4px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '12px 24px',
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 6px 20px rgba(0, 0, 0, 0.4)'
      : '0 6px 20px rgba(0, 0, 0, 0.15)',
  },
}));

const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.05)',
  borderRadius: '50%',
  padding: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-50%) scale(1.1)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '0.8rem',
  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
  textAlign: 'center',
}));

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    percentage: number;
    highlightedText: { text: string; isAI: boolean }[];
  } | null>(null);

  const isMobile = useMediaQuery('(max-width:600px)');

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#2196f3',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h3: {
        fontWeight: 700,
        letterSpacing: '-0.5px',
      },
    },
    shape: {
      borderRadius: 12,
    },
  });

  const analyzeText = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    try {
      // TODO: Replace with actual API call
      // This is a mock implementation
      const mockAnalysis = {
        percentage: Math.random() * 100,
        highlightedText: text.split(' ').map(word => ({
          text: word + ' ',
          isAI: Math.random() > 0.7,
        })),
      };
      
      setResult(mockAnalysis);
    } catch (error) {
      console.error('Error analyzing text:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(45deg, #121212 0%, #1e1e1e 100%)'
            : 'linear-gradient(45deg, #f5f5f5 0%, #ffffff 100%)',
          py: 4,
          position: 'relative',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ my: 4 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 4,
                position: 'relative',
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(45deg, #2196f3, #64b5f6)'
                    : 'linear-gradient(45deg, #1976d2, #2196f3)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                ZeroGPT
              </Typography>
              
              <ThemeToggleButton
                onClick={() => setDarkMode(!darkMode)}
                aria-label="toggle theme"
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </ThemeToggleButton>
            </Box>

            <Fade in={true} timeout={1000}>
              <StyledPaper elevation={3}>
                <StyledTextField
                  fullWidth
                  multiline
                  rows={6}
                  variant="outlined"
                  label="Paste your text here"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  sx={{ mb: 3 }}
                />

                <StyledButton
                  variant="contained"
                  color="primary"
                  onClick={analyzeText}
                  disabled={loading || !text.trim()}
                  fullWidth
                  size="large"
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    'Analyze Text'
                  )}
                </StyledButton>

                {result && (
                  <Fade in={true} timeout={1000}>
                    <Box sx={{ mt: 4 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                        }}
                      >
                        AI Detection Result: {result.percentage.toFixed(1)}%
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: 'pre-wrap',
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        {result.highlightedText.map((item, index) => (
                          <HighlightedText key={index} isAI={item.isAI}>
                            {item.text}
                          </HighlightedText>
                        ))}
                      </Typography>
                    </Box>
                  </Fade>
                )}
              </StyledPaper>
            </Fade>
          </Box>
        </Container>
        <FooterText variant="body2">
          Powered by Dynamic.IO
        </FooterText>
      </Box>
    </ThemeProvider>
  );
}

export default App; 