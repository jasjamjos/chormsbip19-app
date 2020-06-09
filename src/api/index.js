import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        const cleaned_data = { confirmed, recovered, deaths, lastUpdate }

        return cleaned_data;

    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        console.log(data)

        return data;

    } catch (error) {
        console.log(error)
    }
}