import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Name from '../name.json'
import { margin } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FormRow({ nameArr }) {
    return (
        <React.Fragment>
            {
                nameArr.map((name, index) => (
                    <Grid item xs={2.4} key={index}>
                        {index == 0 ? (<Item>组长：{name}</Item>) : <Item>{name}</Item>}
                    </Grid>
                ))
            }
        </React.Fragment>
    );
}

function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345, margin: 10 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/img/圣诞老人/圣诞老人2.png"
                    alt="green iguana"
                    sx={{ width: 165 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        分配及打扫
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        组长负责任务分配，以及讲卫生标准
                        "二、三、四，楼打扫卫生需打扫至下层楼梯",
                        "一楼需打扫院子",
                        "组长负责检查本楼层卫生（检查完成后可以让卫生监督员再次检查）"
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function main() {
    return (<div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {Object.keys(Name).map((f, index) => (
                    <Grid container item spacing={1} key={index}>
                        <FormRow nameArr={Name[f]} />
                    </Grid>
                ))}
            </Grid>
        </Box>

        <div>
            <ActionAreaCard />
            <ActionAreaCard />
        </div>
    </div>)
}




export default main;