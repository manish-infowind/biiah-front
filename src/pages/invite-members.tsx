import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DownloadIcon from '@mui/icons-material/Download';
import QRCode from 'qrcode';

const APP_URL = 'https://biiah.com/biiah-app/';

export default function InviteMembers() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [copied, setCopied] = useState(false);
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');

    // Generate QR code on component mount
    useEffect(() => {
        QRCode.toDataURL(APP_URL, {
            width: 300,
            margin: 2,
            color: {
                dark: '#0a1929',
                light: '#ffffff'
            }
        }).then(url => {
            setQrCodeDataUrl(url);
        }).catch(err => {
            console.error('Error generating QR code:', err);
        });
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(APP_URL);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleDownload = () => {
        if (qrCodeDataUrl) {
            const link = document.createElement('a');
            link.download = 'biiah-app-qr.png';
            link.href = qrCodeDataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <Box sx={{ p: { xs: 2, md: 6 }, minHeight: '100vh', background: '#fff', position: 'relative' }}>
            <Button
                startIcon={<ArrowBackIosNewIcon sx={{ fontSize: 18 }} />}
                sx={{ color: '#e05fd6', mb: 2, textTransform: 'none', fontWeight: 500 }}
                onClick={() => navigate(-1)}
            >
                Back to Members Page
            </Button>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
                Members - Invite
            </Typography>
            <Card sx={{
                p: { xs: 4, md: 2 },
                mb: 2,
                borderRadius: 4,
                background: '#fff',
                boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)',
                border: 'none',
            }}>
                <Typography variant="h5" sx={{ color: '#e05fd6', fontWeight: 700, mb: 1, fontSize: 22, letterSpacing: 0 }}>
                    App Download QR Code
                </Typography>
                <Typography sx={{ mb: 2, color: '#232b2b', fontSize: 16, fontWeight: 400, lineHeight: 1.5 }}>
                    Make downloading the app easy for your members!<br />
                    Download this QR code to add to your posters and emails today.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', mb: 0 }}>
                    <TextField
                        value={APP_URL}
                        InputProps={{
                            readOnly: true,
                            sx: {
                                background: '#fceafd',
                                borderRadius: 99,
                                minWidth: 320,
                                height: 48,
                                fontSize: 16,
                                fontWeight: 500,
                                color: '#232b2b',
                                px: 2,
                                boxShadow: 'none',
                                border: 'none',
                                '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleCopy} edge="end" sx={{ color: '#e05fd6', p: 1 }}>
                                        <ContentCopyIcon fontSize="small" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        size="small"
                        sx={{
                            mr: 2,
                            flex: 1,
                            maxWidth: 400,
                            height: 48,
                            '.MuiOutlinedInput-root': { borderRadius: 99, height: 48, background: '#fceafd', border: 'none' },
                            '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                            fontSize: 16,
                            fontWeight: 500,
                        }}
                    />
                    <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        sx={{
                            borderRadius: 99,
                            background: '#0a1929',
                            color: '#fff',
                            fontWeight: 600,
                            px: 4,
                            py: 1.2,
                            textTransform: 'none',
                            fontSize: 16,
                            minWidth: 200,
                            height: 48,
                            boxShadow: 'none',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover': { background: '#232b2b' },
                        }}
                        onClick={handleDownload}
                        disabled={!qrCodeDataUrl}
                    >
                        Download QR PNG
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1, minHeight: 24 }}>
                    {copied && (
                        <Typography sx={{ color: '#e05fd6', mt: 0.5, fontSize: 14, fontWeight: 700, textAlign: 'center', letterSpacing: 0 }}>Copied!</Typography>
                    )}
                </Box>
            </Card> 
        </Box>
    );
} 