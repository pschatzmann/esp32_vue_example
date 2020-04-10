/* eslint-disable */
import axios from 'axios'


export default class WebService {


    // We retrieve the info from the ESP32
    async getInfo() {
        console.log("getInfo")
        return await axios.get("/service/info")
    }

    // loads html from Wordpress
    async getWordpressPost() {
        return await axios.get( "https://pschatzmann.ch/wp-json/wp/v2/posts/1323")
    }

}
