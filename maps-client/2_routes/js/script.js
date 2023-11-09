let myMap
const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }

function init() {
    renderMap()
    getRouteDetails()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 15, center: ironhackCoords }
    )
}

function getRouteDetails() {

    const routeDetails = {
        origin: 'Gijón',
        destination: 'Fabrik Madrid',
        travelMode: 'DRIVING'
    }

    const service = new google.maps.DirectionsService()

    service.route(
        routeDetails,
        routeResult => {
            printRouteDetails(routeResult)
            renderRoute(routeResult)
        }
    )
}


function printRouteDetails({ routes }) {

    const { summary, legs } = routes[0]
    const { distance, duration, steps } = legs[0]

    let code = ``
    code += `<h5>Ruta por la ${summary} | (${distance.text}, ${duration.text})</h5><hr>`
    steps.forEach(elm => code += `<p>${elm.instructions}</p>`)

    document.querySelector('#routeDetails').innerHTML = code
}


function renderRoute(routeDetails) {
    const renderer = new google.maps.DirectionsRenderer()
    renderer.setDirections(routeDetails)
    renderer.setMap(myMap)

}