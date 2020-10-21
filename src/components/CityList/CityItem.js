import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';


function CityItem({country, cities, isSelected,onCheckboxClicked}) {


    return (
        <>
            <Typography variant="h5" gutterBottom>
                {country}
            </Typography>
            <List>
                {cities.map(cityName => (
                <ListItem>
                    {/* {console.log(isSelected(cityName))} */}
                    <Checkbox 
                        checked={isSelected(cityName)}
                        onChange={() => onCheckboxClicked(cityName, country)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    {cityName}
                </ListItem>
                ))}
            </List>
        </>
    )
}

export default CityItem;