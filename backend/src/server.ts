import express from 'express';

import './database';

const app = express();

app.listen(3001, () => console.log('Server started!'));
