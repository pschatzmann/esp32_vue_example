<template>
    <v-container fluid>
        <v-layout justify-space-around fill-height>
            <v-flex xs11>
                <v-card hover v-if="iswebserviceok">
                    <v-card-title>
                        <h2>Info - Result from Webservice</h2>
                    </v-card-title>

                    <v-text-field label="Available Heap" readonly=true v-model="heap" />
                    <v-text-field label="SSID" readonly=true v-model="ssid" />

                </v-card>
                <v-card hover v-else>
                    The ESP32 Webservice did not provide any result. Did you really launch this application from an ESP32?
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
import WebService from "@/services/WebService"

export default {
        data: function(){
             return {
                heap: undefined,
                ssid: 'not defined',
                iswebserviceok: true
             }
        },

        mounted() {
            console.log("Info mounted");
            const ws = new WebService();
            ws.getInfo().then(result => {
                console.log(result);
                this.heap = result.data.heap;
                this.ssid = result.data.ssid;
                this.iswebserviceok = true;
            }).catch(error => {
                console.error(error);
                this.iswebserviceok = false;
            })
        }
    }
</script>