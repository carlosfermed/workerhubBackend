const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./users")
const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.get("/api/users", (req, res) => {
    res.json(users);
    res.end();
});

app.get("/api/users/:id", (req, res) => {

    const { id } = req.params;
    const user = users.data.data.find(user => user.id == id)

    const allCount = users.data.data.length;
    const filteredCount = allCount; 
    const filteredIds = users.data.data.map(user => user.id);

    const response = { 
        status: 200, 
        data: {
            data: user,
            allCount,
            filteredCount,
            filteredIds
        }
    }
    res.json(response);
    res.end();
});

app.use((req, res) => {
    res.status(404).send("La ruta que usas no existe.");
})

app.listen(PORT, () => console.log("Servidor escuchando por puerto", PORT))