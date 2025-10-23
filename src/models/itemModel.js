import { initSupabase } from "../config/initSupabase.js";

const supabase = initSupabase();

export const ItemModel = {

  async getAll(status) {
    try {
      let query = supabase
        .from("items")
        .select("*")
        .order("tanggalmasuk", { ascending: false });

      if (status) query = query.eq("status", status);

      const { data, error } = await query;
      if (error) throw error;

      return data;
    } catch (err) {
      throw new Error(`Gagal mengambil data: ${err.message}`);
    }
  },

  // GET BY ID
  async getById(id) {
    try {
      const { data, error } = await supabase
        .from("items")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      throw new Error(`Data dengan ID ${id} tidak ditemukan: ${err.message}`);
    }
  },

  // CREATE
  async create(item) {
    try {
      const { error } = await supabase.from("items").insert([item]);
      if (error) throw error;

      return {
        message: "Data sepatu berhasil ditambahkan ke daftar.",
        note: "Item baru berhasil dicatat! Pastikan data sudah sesuai.",
      };
    } catch (err) {
      throw new Error(`Gagal menambahkan data: ${err.message}`);
    }
  },

  // UPDATE
  async update(id, updates) {
    try {
      const { error } = await supabase
        .from("items")
        .update(updates)
        .eq("id", id);

      if (error) throw error;

      return {
        message: "Data sepatu berhasil diperbarui.",
        note: "Perubahan tersimpan! Cek kembali status dan tanggalnya.",
      };
    } catch (err) {
      throw new Error(`Gagal memperbarui data: ${err.message}`);
    }
  },

  // DELETE
  async remove(id) {
    try {
      const { error } = await supabase.from("items").delete().eq("id", id);
      if (error) throw error;

      return {
        message: "Data sepatu berhasil dihapus dari daftar.",
        note: "Item sudah dihapus secara permanen dari database.",
      };
    } catch (err) {
      throw new Error(`Gagal menghapus data: ${err.message}`);
    }
  },
};
