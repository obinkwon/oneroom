import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useHistory } from "react-router-dom";

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap',
    paddingTop: '7vh',
}

const style = {
    display: 'flex',
    paddingTop: '10vh',
    justifyContent: 'center'
}

export default function UptSection() {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    const register = () => {
        alert('수정되었습니다.');
        history.push('/');
    }
    return (
        <div>
            <Typography variant="h4" style={style}>소모품 수정</Typography>
            <form style = {formContainer}>

                <TextField type="text" placeholder="소모품 이름을 입력해주세요" name="name"
                    fullWidth margin="normal" variant="outlined"/>

                <TextField type="text" placeholder="장소(쓰이는 곳)를 입력해주세요" name="place"
                    fullWidth margin="normal"variant="outlined" />

                <TextField type="text" placeholder="제품 종류를 입력해주세요" name="type"
                    fullWidth margin="normal" variant="outlined"/>

                <TextField type="number" placeholder="갯수를 입력해주세요" name="age"
                    fullWidth margin="normal" variant="outlined"/>
                <Button variant="contained" onClick={register}
                    style={{backgroundColor: "#339900", color: "#ffffff", width: "100%"}}>
                    수정 하기
                </Button>
                <Button variant="outlined" onClick={goBack}
                    style={{color: "#339900", width: "100%", marginTop:"1%"}}>
                    이전 으로
                </Button>
            </form>
        </div>
    );
}