const config = {
    development:{
        port: 8080,
        mongourl: 'mongodb+srv://encrustace:123@cluster0.tdqq4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    }

}

const environment = process.env.NODE_ENV || "development";
export default config[environment];