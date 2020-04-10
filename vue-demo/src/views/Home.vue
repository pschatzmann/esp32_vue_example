<template>
    <v-container fluid>
        <v-card>
            <v-container fluid>
                <div v-html="htmlContent"></div>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    import WebService from "@/services/WebService"

    export default {
        data: () => ({
            htmlContent: "<html>Searching for content...</html>"
        }),

        mounted() {
            const ws = new WebService()
            ws.getWordpressPost().then(result => {
                this.htmlContent = result.data.content.rendered
            }).catch(error => {
                console.error(error)
                this.htmlContent = 'We currently do not find any content!'

            })
        }
    }

</script>
