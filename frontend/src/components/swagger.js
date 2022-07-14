import SwaggerUI from "swagger-ui-react"

export const url = 'http://127.0.0.1:8000/api/'

export default function Swagger() {
    return (
        <SwaggerUI url={url + 'openapi?format=openapi-json'} />
    )
}