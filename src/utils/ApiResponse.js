class ApiResponse {
    constructor(statusCode, data, message = "Succsess"){
        this.statusCode =statusCode
        this.data = data
        this.messaage = message
        this.successs = statusCode <400
    }
}

export { ApiResponse }