const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/tasks', (req, res) => {
    const newTask = req.body;

    // Чтение
    fs.readFile('src/data/tasks.js', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Ошибка чтения файла');
        }

        // Добавление
        const tasks = JSON.parse(data);
        tasks.push(newTask);

        // Запись
        fs.writeFile('src/data/tasks.js', JSON.stringify(tasks), (err) => {
            if (err) {
                return res.status(500).send('Ошибка записи файла');
            }
            res.status(201).send(newTask);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
