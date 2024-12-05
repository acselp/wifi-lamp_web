import axios from "axios";

const API_URL = "http://192.168.4.1:80/";

const getUrl = (endpoint: string) => `${API_URL}${endpoint}`;

const turnOnEndpoint = "turnOn"
const turnOffEndpoint = "turnOff"
const setColorEndpoint = "setColor"

export const LampService = {
    turnOnLamp() {
        return axios.get(getUrl(turnOnEndpoint));
    },

    turnOffLamp() {
        return axios.get(getUrl(turnOffEndpoint));
    },

    setLampColor(color: string) {
        return axios.get(getUrl(setColorEndpoint), { params: { color: color } })
    },
}