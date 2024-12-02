import axios from "axios";

const API_URL = "http://192.168.4.1:80/";

export const LampService = {
    turnOnLamp() {
        return axios.get(API_URL);
    },

    turnOffLamp() {
        return axios.get(API_URL, { params: { lampState: 0 }});
    },
}