import React from 'react'
import { connect } from 'react-redux';
import CityItem from './CityItem';
import { addCity, deleteCity } from './../../action/city'


function CityList({cityData: {citiesList, selectedCities}, onAddCitiy, onDeleteCitiy}) {

    function isSelected (cityName) {
        let isCitySelected;
        for(let i=0; i < selectedCities.length ; i++) {
           isCitySelected =  selectedCities[i].city.some(city => city === cityName);
           if (isCitySelected) {
                return true;
           }
        }
        return false;
    }

    function onCheckboxClicked (cityName, country) {
        if(!isSelected(cityName)){
            if (!(selectedCities.some(item => item.country === country))) {
                onAddCitiy([...selectedCities,{country, city: [cityName]}]);
            }else {
                const updatedSelectedCity = selectedCities;
                const updatedData = updatedSelectedCity.map( item => {
                    if (item.country === country) {
                        return ({country, city: [...item.city, cityName]});
                    }else return item;

                } );
                onAddCitiy(updatedData);
            }
        }else {
            const updatedData = selectedCities.map( item => {
                if (item.country === country) {
                    return ({country, city: item.city.filter( city => city != cityName )});
                }else return item;
    
            } );
            console.log(updatedData);
            onDeleteCitiy(updatedData);
        }
    }
    const ListItem = citiesList.map((item, index) => <CityItem key={`List-${item.country}-${index}`} country={item.country} cities={item.city} isSelected={isSelected} onCheckboxClicked={onCheckboxClicked}/>);
    return (
        <div>
            {ListItem}
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
        onAddCitiy: payload => {dispatch(addCity(payload))},
        onDeleteCitiy: payload => {dispatch(deleteCity(payload))},
      })
   }

export default connect(mapStateToProps,mapDispatchToProps)(CityList);
