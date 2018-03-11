import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import routes from '../routes/index';

const app = express();

const port = 8080;

// parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', routes);

app.use('/')
  .get((req, res) => res.status(200).send({ message: 'WECONNECT API VERSION1' }));

app.listen(port);

export default app;
