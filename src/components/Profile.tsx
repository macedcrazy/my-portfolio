import { Avatar, Container, Typography, Grid, Box } from "@mui/material";

export const Profile: React.FC = () => {
  return (
    <div id="home" style={{ padding: "2rem" }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        {/* Avatar */}
        <Avatar
          alt="Minha Foto"
          src="/assets/profile-pic.png"
          sx={{
            width: 150,
            height: 150,
            borderRadius: '50%', // Avatar em formato circular
            marginBottom: '1rem', // Espaçamento abaixo da imagem
            boxShadow: 3, // Sombra para dar destaque ao Avatar
          }}
        />
        {/* Nome */}
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
          Olá, Eu sou o Anderson
        </Typography>
        {/* Descrição */}
        <Typography variant="h6" paragraph sx={{ maxWidth: '600px' }}>
          Desenvolvedor Frontend com experiência em React, Typescript, Python.
        </Typography>
      </Container>

      {/* Seção de Habilidades e Projetos */}
      <Grid container justifyContent="center" sx={{ marginTop: '3rem' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: 'center',
              backgroundColor: '#f5f5f5',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: 2,
            }}
          >
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
              Habilidades e Projetos
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
