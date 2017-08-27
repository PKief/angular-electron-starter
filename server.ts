import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';

const app: express.Application = express();
app.use(compression());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log('Production Express server running at localhost:' + PORT);
});