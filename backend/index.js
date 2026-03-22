
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//BD
let tasks = [];

//para obtener todas las tareas
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

//crear tarea
app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        completed: false,
        createdAt: new Date(),
    };

    tasks.push(newTask);
    res.json(newTask);
});

//iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//modificar mi tarea
app.put('/api/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const { title, description, completed } = req.body;
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error:'La tarea no fue encontrada'});
    }

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;

    res.json(task);
});

//eliminar una tarea
app.delete('/api/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error:'La Tarea no fue encontrada'});
    }

    tasks.splice(index, 1);
    res.json({ mensaje: 'La Tarea fue eliminada'});
});
