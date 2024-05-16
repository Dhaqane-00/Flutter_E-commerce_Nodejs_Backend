const user = require("./Routers/user")
const category = require("./Routers/category")
const Product = require("./Routers/Product")
const Payment = require("./Routers/Payment")
const Order = require("./Routers/Order")
const Banner = require("./Routers/Banner")
const ShoppingCart = require("./Routers/ShoppingCart")
const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/user",user);
app.use("/api/category",category);
app.use("/api/product",Product);
app.use("/api/payment",Payment);
app.use("/api/order",Order);
app.use("/api/banner",Banner);
app.use("/api/shoping",ShoppingCart);

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Backend Starter API",
            version: "1.0.0",
            description: "Backend Starter API Documentation",
            contact: {
                name: "Dhaqane",
            },
        },
        servers: [
            {
                url: "http://localhost:500",
                description: "Development server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ["./src/Routers/*.js", "./src/Model/models.js"],
};
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));





module.exports = app