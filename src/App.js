import React, { Component } from 'react';

import { Cards, Details, CountryPicker } from './components';
import { fetchData } from './api';

import './assets/css/main.css'

class App extends Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    render() {
        const { data, data:{ lastUpdate } } = this.state;


        return (
            <div className="w-full h-full sm:h-screen">
                <div className="flex items-center justify-center h-full">
                    <div className="max-w-xl bg-white px-5 py-8 h-full w-full sm:w-auto sm:h-auto rounded text-gray-700">
                        <div className="text-center">
                            <div className="font-bold text-3xl">
                                CH<span className="text-red-500">Ø</span>RMSBIP-19
                            </div>
                            <div>
                                <p className="text-sm text-gray-600"></p>
                            </div>
                        </div>

                        <CountryPicker />
                        <Cards data={data}/>
                        <Details />

                        <div className="text-sm text-center">
                            as of {lastUpdate ? new Date(lastUpdate).toDateString() : 'Loading...'}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;