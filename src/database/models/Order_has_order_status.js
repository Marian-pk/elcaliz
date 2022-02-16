module.exports = (sequelize, dataTypes) => {
    let alias = "OrdersStatus"; 
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_estado: {
            type: dataTypes.DATE
        },
        order_id: {
            type: dataTypes.INTEGER
        },
        order_status_id: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tablename: "orders_has_orders_status",
        timestamps: false
    }
    const OrderStatus = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return OrderStatus;
}