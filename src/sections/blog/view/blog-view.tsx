import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Dummy images for demonstration
const demoImages = [
  [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  ],
  [
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  ],
  [
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
  ],
  [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  ],
];

export function MemoriesView() {
  // For image carousel navigation (2 pairs per card)
  const [activeIndexes, setActiveIndexes] = useState([0, 0, 0, 0]);

  // Helper to get image pairs
  const getImagePairs = (images: string[]): string[][] => {
    const pairs = [];
    for (let i = 0; i < images.length; i += 2) {
      pairs.push(images.slice(i, i + 2));
    }
    return pairs;
  };

  // Card data: all cards should show the orange title
  const cardData = [
    { showTitle: true, images: demoImages[0] },
    { showTitle: true, images: demoImages[1] },
    { showTitle: true, images: demoImages[2] },
    { showTitle: true, images: demoImages[3] },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4, background: '#FAF7F2', minHeight: '100vh' }}>
      <Grid container spacing={4}>
        {cardData.map((card, cardIdx: number) => {
          const imagePairs = getImagePairs(card.images);
          const activePair = imagePairs[activeIndexes[cardIdx]] || [];
          return (
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} key={cardIdx}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  p: 2,
                  background: '#fff',
                  minHeight: 340,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardContent sx={{ pb: 1 }}>
                  {card.showTitle && (
                    <Typography variant="subtitle1" sx={{ color: '#FF9800', fontWeight: 600, mb: 1 }}>
                      Singforce Weekly
                    </Typography>
                  )}
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                    <CalendarMonthIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      Sat 15 March 2025
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <AccessTimeIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      12:00-13:30
                    </Typography>
                  </Stack>
                </CardContent>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                  {activePair.map((img: string, imgIdx: number) => (
                    <CardMedia
                      key={imgIdx}
                      component="img"
                      image={img}
                      alt="memory"
                      sx={{
                        width: 110,
                        height: 110,
                        borderRadius: 2,
                        objectFit: 'cover',
                        boxShadow: 1,
                      }}
                    />
                  ))}
                </Box>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                  {imagePairs.map((_: string[], dotIdx: number) => (
                    <Box
                      key={dotIdx}
                      onClick={() => setActiveIndexes((prev) => prev.map((v, i) => i === cardIdx ? dotIdx : v))}
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: dotIdx === activeIndexes[cardIdx] ? '#FF9800' : alpha('#FF9800', 0.3),
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                      }}
                    />
                  ))}
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
