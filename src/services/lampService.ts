import axios from "axios";

const API_URL = "http://10.31.74.4:80/";

const getUrl = (endpoint: string) => `${API_URL}${endpoint}`;

const turnOnEndpoint = "turnOn"
const turnOffEndpoint = "turnOff"
const setColorEndpoint = "setColor"
const setWifiModeEndpoint = "switchWifiMode"

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

    setWifyMode() {
        return axios.get(getUrl(setWifiModeEndpoint), { params: { wifiMode: 1, ssid: "Redmi 4x", password: "11223344" } })
    }
}