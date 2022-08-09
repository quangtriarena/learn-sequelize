import Sequelize from "sequelize";

const sequelize = new Sequelize("learn_sequelize", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
});

const User = sequelize.define(
  "user",
  {
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
    age: {
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 21,
    },
  },
  {
    // ! more sequelize options
    freezeTableName: true, // đóng băng tên modal khi tạo bảng, nếu không có tùy chọn freeze thì modal sẽ thêm s => users
  }
);

User.sync({ force: true });

async function connector() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connector();
