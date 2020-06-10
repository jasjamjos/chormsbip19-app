import axios from 'axios';

const url = "https://covid19.mathdro.id/api/";

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        const cleaned_data = { confirmed, recovered, deaths, lastUpdate }

        return cleaned_data;

    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}daily`);
        const cleaned_data = data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

        return cleaned_data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}countries`);
        const cleaned_data = countries.map(({name, iso2}) => [{name: name, code: iso2}]); 

        return cleaned_data
    } catch (error) {
        console.log(error)
    }
}