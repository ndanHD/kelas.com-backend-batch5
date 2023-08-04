import express from 'express';
import * as InventoryService from './services/inventory.js';

const app = express();
const host = 'localhost';
const port = 8080;

app.use(express.json());

app.get('/inventory', InventoryService.get);
app.get('/inventory/:id', InventoryService.getByIdInventory);
app.post('/inventory', InventoryService.addInventory);
app.put('/inventory/:id', InventoryService.UpdateInventory);
app.delete('/inventory/:id', InventoryService.deleteInventory);

app.listen(port, host, () => {
  console.log(`server REST API berjalan di http://${host}:${port}`);
});
