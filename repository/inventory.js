import dbPool from '../utils/db.js';

export const createData = (nama_barang, harga, jumlah) => {
  let createdAt = new Date();
  const sql = 'INSERT INTO inv_barang (nama_barang, harga, jumlah, tanggal_masuk) VALUE (?, ?, ?, ?)';
  const value = [nama_barang, harga, jumlah, createdAt];

  return dbPool.query(sql, value);
};

export const getAll = () => {
  const sql = 'SELECT * FROM inv_barang';
  const result = dbPool.query(sql);
  return result;
};

export const updateData = (id, nama_barang, harga, jumlah) => {
  const sql = 'UPDATE inv_barang SET nama_barang = ?, harga = ?, jumlah = ? where id = ?';
  const value = [nama_barang, harga, jumlah, id];
  return dbPool.query(sql, value);
};

export const deleteData = (id) => {
  const sql = 'DELETE FROM inv_barang where id = ?';
  return dbPool.query(sql, [id]);
};

export const getById = (id) => {
  const sql = 'SELECT * FROM inv_barang where id = ?';
  const result = dbPool.query(sql, id);
  return result;
};
