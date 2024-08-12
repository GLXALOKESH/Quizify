class ApiError extends Error {
    constructor(
        statusCode,
        message = "Sonmething Went Wrong",
        errors =[]
    )
    {
        super(message)
        this.statusCode = statusCode,
        this.data = null,
        this.message = message,
        this.success = false,
        this.errors = errors
    }
}

export {ApiError}