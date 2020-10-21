import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CityList from './CityList/CityList';
import SelectedCityList from './SelectedCityList/SelectedCityList';

export default function Dashboad() {
    return (
        <div>
            <Container style={{marginTop: '40px'}} >
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper style={{height: '80vh', overflow: 'scroll', }}>
                            <Container style={{paddingTop: 20}}>
                                <CityList />
                            </Container>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={{height: '80vh', overflow: 'scroll',}}>
                            <Container  style={{paddingTop: 20}}>
                                <SelectedCityList />
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
