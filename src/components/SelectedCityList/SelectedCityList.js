import React from 'react'
import { connect } from 'react-redux';
import { deleteCity } from './../../action/city'
import SelectedCityItem from './SelectedCityItem';
import Typography from '@material-ui/core/Typography';

function SelectedCityList({cityData: {selectedCities}, onDeleteCitiy}) {

    
    function onDeleteClick (cityName, country) {
        const updatedData = selectedCities.map( item => {
            if (item.country === country) {
                return ({country, city: item.city.filter( city => city != cityName )});
            }else return item;

        } );
        console.log(updatedData);
        onDeleteCitiy(updatedData);
}

    const ListItem = selectedCities.map((item, index) => <SelectedCityItem key={`Selected-${item.country}-${index}`} country={item.country} cities={item.city} onDeleteClick={onDeleteClick} />);

    return (
        <div>
            {ListItem}
            {Array.isArray(selectedCities) && selectedCities.length < 1 && (
                <Typography variant="h3" style={{color: '#999999', fontSize: '1.5em', textAlign: 'center', marginTop: '50%'}}>
                    No Value Selected
                </Typography>
            )}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        cityData: state.city,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
      return ({
        onDeleteCitiy: payload => {dispatch(deleteCity(payload))},
      })
   }


export default connect(mapStateToProps,mapDispatchToProps)(SelectedCityList);