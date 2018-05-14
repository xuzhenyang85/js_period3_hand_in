import React from 'react';


const URL = 'http://f1386522.ngrok.io';

export default class DataStore extends React.Component {
    constructor(){
        super();
        this.login = this.login.bind(this);
    }

    login(username,password,cb){
        var dat ={
            "userName": username,
            "password": password,
            "longitude": 12.512381672859192,
            "latitude": 55.769998281557164,
            "distance":1000
        }
        fetch(URL + '/api/login',{
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            "body": JSON.stringify(data)
        }).then((data) => { data.json() })
        .then((json) => cb(json));
    }

}
