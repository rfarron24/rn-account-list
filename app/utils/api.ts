import axios from 'axios';

export class Api {
    getSchooDatas() {
        const baseUrl = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';
        let datas = [];
        // Passing configuration object to axios
        axios({
            method: 'get',
            url: baseUrl,
        }).then((response) => {
            console.log(response.data);
        });
        // Invoking get method to perform a GET request
        axios.get(baseUrl).then((response) => {
            console.log(response.data);
            const length = response.data.length 
            /* actual data 'length' currently unused because the amount of actual data is around 400+, will be limited to 10.
                LazyLoad can later be implemented for future optimization, and to render large amount of data seamlessly
            */
            for (let i = 0; i < 10; i++) { //limited the amount of data displayed to 10, for the purpose of faster data renderring
                //storing data from API into array object
                datas.push({
                    name: response.data[i].school_name,
                    website: response.data[i].website,
                    zip: response.data[i].zip,
                    phone: response.data[i].phone_number,
                    building_code: response.data[i].building_code,
                });
            }
        });
        return datas
    }
}
