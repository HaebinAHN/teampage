import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import { Button, Grid, TextField } from "@mui/material";
function ShortAnswer(props) {

    const [item, setItem] = useState({ title: '' });
    const addItem = props.addItem;

    const onButtonClick = () => {
        addItem(item);
        setItem({ title: "" });
    };

    const onInputChange = (e) => {
        setItem({ title: e.target.value });
        console.log(item);
    };


    return (
        <>
            <Grid container style={{ marginTop: 20 }}>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    질문: <TextField placeholder="내용을 입력하세요" fullWidth onChange={onInputChange} value={item.title} />
                </Grid>
            </Grid>

        </>
    );
}
export default ShortAnswer;