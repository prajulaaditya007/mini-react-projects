import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'jquery/dist/jquery.min';
// DataTable
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

const CovidTracker = () => {

    const [covidData, setCovidData] = useState('');

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary').then(res => {
            console.table(res.data.Countries)
            setCovidData(res.data.Countries)
        }).catch(err => {
            console.warn(err)
        })
        $(document).ready(() => {
            $('#myTable').DataTable();
        })
    }, [covidData])


    const tableData = covidData.map(obj => {
        return <tr>
            <td>{obj.Country}</td>
            <td>{obj.TotalConfirmed}</td>
            <td>{obj.NewConfirmed}</td>
            <td>{obj.TotalRecovered}</td>
            <td>{obj.TotalDeaths}</td>
        </tr>
    })

    return (
        <div>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1>Covid Stats</h1>
                    <table className='table table-bordered' id='myTable'>
                        <thead>
                        <tr>
                            <th>Country</th>
                            <th>Confirmed</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default CovidTracker;
