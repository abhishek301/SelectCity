import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


function SelectedCityItem({country, cities, onDeleteClick}) {


    return (
        <>
            {cities.length > 0 && (<Typography  variant="h5" gutterBottom>
                {country}
            </Typography>)}
            <List>
                {cities.map(cityName => (
                <ListItem style={{backgroundColor: '#e4e4e4', marginBottom: 10}}>
                    <ListItemText
                        primary={cityName}
                    />
                    <ListItemSecondaryAction>
                    <IconButton onClick={() => onDeleteClick(cityName,country)} edge="end" aria-label="delete">
                        <CloseIcon />
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                ))}
            </List>
        </>
    )
}

export default SelectedCityItem;