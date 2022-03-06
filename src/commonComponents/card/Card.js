import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import hero from '../../assets/images/Hero.png'
export default function CustomCard({ data , data2 }) {

    console.log(data2);
    return (
        <Card sx={{ maxWidth: 345 ,  }}>

            {
                data.map((item, index) => {
                    return (
                        <>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={item.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.head}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.desp}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button  style={{backgroundColor: item.bg}} size="small">{item.btn}</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </>
                    )

                })
            }
        </Card>
    )
}
