module.exports = app => {
    const indexRoutes = require("./index.routes")
    app.use("/", indexRoutes)

    const mapRoutes = require("./maps.routes")
    app.use("/mapas", mapRoutes)

    const restaurantRoutes = require("./restaurants.routes")
    app.use("/restaurantes", restaurantRoutes)

    const apiRoutes = require("./api.routes")
    app.use("/api", apiRoutes)
}