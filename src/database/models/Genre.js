module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(100)
        },
    };
    let config = {
        tablename: "Generos",
        timestamps: false
    }
    const Genre = sequelize.define(alias, cols, config)
    return Genre;
}
