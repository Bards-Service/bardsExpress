const bcrypt = require('bcrypt'); //библиотека для хеширования паролей в Node.js

//создается экземпляр объекта sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'postgres',
    host: 'localhost'
  });
  
  
/*sequelize.define используется для определения модели User, 
которая представляет таблицу пользователей в базе данных */
const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
  // Определение полей модели User
  lastName: {
    type: DataTypes.STRING,
    allowNull: false, //поле в таблице базы данных не может быть пустым (NULL)
    validate: {
        len: [1, 30] // Минимальная длина 1, максимальная 50
      }
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [1, 30] 
      }
  },
  // псевдоним 
  creativeAlias: {
    type: DataTypes.STRING,
    allowNull: true, // Разрешаем значение creativeAlias быть null
    validate: {
      len: [0, 30] 
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true //встроенная валидация sequelize
    }
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      // пользовательская функция валидации номера телефона
      isPhoneNumber: function(value) {
        if (!/^(\+7)\d{10}$/.test(value)) {
          throw new Error('Номер телефона должен начинаться с +7 и содержать 11 цифр.');
        }
      }
    }
  }
  ,
  //Ссылки на социальные сети(VK, Telegram, SoundCloud, Яндекс.Музыка)

  vkLink: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telegramLink: {
    type: DataTypes.STRING,
    allowNull: true
  },
  soundCloudLink: {
    type: DataTypes.STRING,
    allowNull: true
  },
  yandexMusicLink: {
    type: DataTypes.STRING,
    allowNull: true
  },

password: {
    type: DataTypes.STRING,
    allowNull: false // Поле для хранения хешированного пароля

  }
}, {
    freezeTableName: true,
});
      
User.prototype.generateHash = async function(password) {
    return bcrypt.hash(password, await bcrypt.genSalt(8));
};
  
User.prototype.validPassword = async function(password) {
    return bcrypt.compare(password, this.getDataValue('password'));
};
// синхронизацию моделей с базой данных
sequelize.sync()
    .then(() => {
      console.log('Database and tables created!');
});
    
module.exports = User; 


  /*имя таблицы в базе данных будет заморожено и не будет изменяться 
  автоматически при создании или обновлении модели
  freezeTableName: true, 
   это объект, содержащий методы экземпляра модели
   устаревий метод, нашла в интернетике 
  instanceMethods: {
    //метод, который генерирует хэш пароля с помощью библиотеки bcrypt
    generateHash(password) {
      return bcrypt.hash(password, bcrypt.genSaltSync(8));
    },
    // метод, который проверяет, соответствует ли переданный пароль хэшу пароля, хранящемуся в базе данных
    //
    validPassword(password) {
      //bcrypt.compare() для сравнения переданного пароля с хэшем пароля из базы данных
      return bcrypt.compare(password, this.password);
    } 
  }*/





