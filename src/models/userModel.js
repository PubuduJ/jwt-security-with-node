const userModel = (sequelize, DataType) => {
    return sequelize.define("user", {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataType.STRING(100),
            allowNull: false,
            unique: true,
            field: "email",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Email cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "Email cannot be null"
                },
                isEmail: {
                    args: true,
                    msg: "Invalid email id format"
                }
            }
        },
        firstName: {
            type: DataType.STRING(100),
            allowNull: false,
            field: "first_name",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "First name cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "First name cannot be null"
                },
                is: {
                    args: /^[A-Za-z][A-Za-z ]+$/,
                    msg: "Invalid first name"
                }
            }
        },
        lastName: {
            type: DataType.STRING(100),
            allowNull: false,
            field: "last_name",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Last name cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "Last name cannot be null"
                },
                is: {
                    args: /^[A-Za-z][A-Za-z ]+$/,
                    msg: "Invalid last name"
                }
            }
        },
        password: {
            type: DataType.STRING(255),
            allowNull: false,
            field: "password",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "password cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "password cannot be null"
                }
            }
        },
        role: {
            type: DataType.STRING(255),
            allowNull: false,
            field: "role",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "role cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "role cannot be null"
                },
                is: {
                    args: /^[A-Za-z][A-Za-z ]+$/,
                    msg: "Invalid role name"
                }
            }
        }
    },{
        timestamps: false
    })
}

module.exports = userModel;