const express = require("express");
const sql = require("mssql");
require("dotenv").config();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Reemplaza con la URL y puerto de tu aplicación cliente
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(bodyParser.json()); // Parsear el cuerpo de las solicitudes como JSON

app.use(bodyParser.json());

// Configurar la conexión a la base de datos utilizando las variables de entorno
const config = {
  server: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // Dependiendo de tu configuración de SQL Server, puede ser necesario establecer esto en true
  },
};

// Intentar conectarse a la base de datos
sql.connect(config, (err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

// Endpoint de registro
app.post("/register", async (req, res) => {
  try {
    // Extraer la información del cuerpo de la solicitud
    const { nombre, mail, contraseña } = req.body;

    // Encriptar la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Conectar a la base de datos
    const pool = await sql.connect(config);

    // Insertar el nuevo usuario en la tabla "Usuarios"
    const result = await pool
      .request()
      .input("nombre", sql.NVarChar, nombre)
      .input("mail", sql.NVarChar, mail)
      .input("contraseña", sql.NVarChar, hashedPassword)
      .query(
        "INSERT INTO Usuarios (nombre, mail, contraseña) VALUES (@nombre, @mail, @contraseña)"
      );

    // Comprobar si se insertó correctamente
    if (result.rowsAffected[0] === 1) {
      res.status(201).json({ message: "Registro exitoso" });
    } else {
      res.status(500).json({ error: "Error al registrar usuario" });
    }
  } catch (error) {
    console.error("Error en el endpoint de registro:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Endpoint de login
app.post("/login", async (req, res) => {
  try {
    // Extraer la información del cuerpo de la solicitud
    const { mail, contraseña } = req.body;

    // Conectar a la base de datos
    const pool = await sql.connect(config);

    // Obtener el usuario desde la base de datos basado en el correo electrónico
    const result = await pool
      .request()
      .input("mail", sql.NVarChar, mail)
      .query("SELECT * FROM Usuarios WHERE mail = @mail");

    // Verificar si se encontró un usuario con el correo electrónico proporcionado
    if (result.recordset.length > 0) {
      const usuario = result.recordset[0];

      // Verificar la contraseña utilizando bcrypt
      const contraseñaValida = await bcrypt.compare(
        contraseña,
        usuario.contraseña
      );

      if (contraseñaValida) {
        console.log(
          `Inicio de sesión exitoso para el usuario: ${usuario.mail}, nombre: ${usuario.nombre}`
        );
        res
          .status(200)
          .json({
            message: "Inicio de sesión exitoso",
            mail: usuario.mail,
            nombre: usuario.nombre,
          });
      } else {
        res.status(401).json({ error: "Credenciales incorrectas" });
      }
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error en el endpoint de login:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Escucha en el puerto 3000
const puerto = 3001;
app.listen(puerto, () => {
  console.log(`La aplicación está escuchando en http://localhost:${puerto}`);
});
