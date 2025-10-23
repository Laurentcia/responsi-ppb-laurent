import { ItemModel } from "../models/itemModel.js";

export const ItemController = {
  getAll: async (req, res) => {
    try {
      const { status } = req.query;
      const data = await ItemModel.getAll(status);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const item = await ItemModel.getById(req.params.id);
      if (!item) {
        return res.status(404).json({ message: "Item tidak ditemukan" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const result = await ItemModel.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const result = await ItemModel.update(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  remove: async (req, res) => {
    try {
      const result = await ItemModel.remove(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
