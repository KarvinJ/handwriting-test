import {FormGroup} from "@mui/material";
import {TegakiRenderer} from 'tegaki';
import caveat from 'tegaki/fonts/caveat';
import {useState} from "react";

const myStyle = {
    padding: "10px",
    margin: "100px",
    fontSize: "256px"
};

function App() {

    const [title, setTitle] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (

        <>
            <FormGroup>
                <label>Titulo</label>
                <input className="form-control" name="title" type="text" value={title} onChange={handleChange}/>
            </FormGroup>

            <FormGroup className="form-control">
                <TegakiRenderer font={caveat} style={myStyle}>
                    {title}
                </TegakiRenderer>
            </FormGroup>
        </>
    );
}

export default App
