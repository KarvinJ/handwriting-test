import {Box, Paper, TextField, Typography} from "@mui/material";
import {TegakiRenderer} from "tegaki";
import caveat from "tegaki/fonts/caveat";
import kleeOne from "tegaki/fonts/klee-one";
import {useState} from "react";

const myStyle = {
    padding: "20px",
    fontSize: "128px",
    letterSpacing: "0.1em",
};

function App() {

    const [title, setTitle] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0b0b0b",
                padding: 3,
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    width: "100%",
                    maxWidth: 800,
                    padding: 4,
                    borderRadius: 3,
                }}
            >
                <Typography
                    variant="h4"
                    color="text.secondary"
                    fontWeight="bold"
                    textAlign="center"
                >
                    Escritura
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                    sx={{mb: 3}}
                >
                    Escribe algo y mira...
                </Typography>

                <TextField
                    fullWidth
                    name="title"
                    type="text"
                    value={title}
                    onChange={handleChange}
                    placeholder="Escribe algo..."
                    variant="outlined"
                />

                <Box
                    sx={{
                        mt: 4,
                        minHeight: 250,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        backgroundColor: "#fff",
                        overflow: "hidden",
                    }}
                >
                    <TegakiRenderer font={kleeOne}  style={myStyle}>
                        {title}
                        {/*手書き*/}
                    </TegakiRenderer>
                </Box>
            </Paper>
        </Box>
    );
}

export default App;