import { Grid2, Typography, Grid, Card, CardContent } from "@mui/material"


const skills = ['react', 'javascript', 'typescript', 'python', 'node.js', 'git']

export const Skills: React.FC = () => {

    return(
        <div id="skills">
            <Typography variant="h4" align="center" gutterBottom>
                Minhas Habilidades
            </Typography>
            <Grid2 container spacing={2} justifyContent="center">
                {skills.map((skill, index) =>(
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" align="center">
                                    {skills}
                                </Typography>
                            </CardContent>
                        </Card>

                    </Grid>
                ))}
            </Grid2>
        </div>

    )
}