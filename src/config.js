const config = {
    dev : {
        api: {
            url: "",
            key: ""
        }
    },

    prod : {
        api: {
            url: "",
            key: ""
        }
    }
    
}

export default config[process.env.REACT_APP_ENV];