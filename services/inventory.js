import * as InventoryRepository from '../repository/inventory.js';
import { respError, respSuccess } from '../utils/response.js';

export const get = async (req, res, next) => {
  try {
    const [result] = await InventoryRepository.getAll();
    respSuccess(res, 'success', result);
  } catch (error) {
    next(error);
  }
};

export const addInventory = async (req, res, next) => {
  try {
    const inventory = await InventoryRepository.createData(req.body.nama_barang, req.body.harga, req.body.jumlah);
    console.log(inventory);
    respSuccess(res, 'sukses mendambahkan barang', inventory, 200);
  } catch (error) {
    next(error);
  }
};

export const UpdateInventory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const inventory = await InventoryRepository.updateData(id, req.body.nama_barang, req.body.harga, req.body.jumlah);
    respSuccess(res, 'berhasil update data', inventory, 200);
  } catch (error) {
    next(error);
  }
};

export const deleteInventory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const inventory = await InventoryRepository.deleteData(id);
    respSuccess(res, 'Hapus Berhasil', inventory, 200);
  } catch (error) {
    next(error);
  }
};

export const getByIdInventory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const [result] = await InventoryRepository.getById(id);
    respSuccess(res, `menampilkan data dengan id: ${id}`, result[0]);
  } catch (error) {
    next(error);
  }
};
