const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from Node.js CI/CD Demo!</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
