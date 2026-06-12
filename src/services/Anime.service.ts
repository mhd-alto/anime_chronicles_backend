import mongoose from "mongoose";
import { Anime } from "../models/Anime.model";

class AnimeService {
  // ============ CREATE OPERATIONS ============

  /**
   * createAnime - Creates a new anime document in the database.
   * @param {Object} animeData - The data for the new anime.
   * @returns {Promise<Object>} - The created anime document.
   */

  async createAnime(animeData: any) {
    try {
      const anime = new Anime(animeData);
      return await anime.save();
    } catch (error) {
      throw new Error(`Error creating anime: ${error}`);
    }
  }

  /**
   * create multiple animes - Creates multiple anime documents in the database.
   */

  async createMultipleAnimes(animeDataArray: any[]) {
    try {
      const animes = await Anime.insertMany(animeDataArray);
      return animes;
    } catch (error) {
      throw new Error(`Error creating multiple animes: ${error}`);
    }
  }

  // ============ READ OPERATIONS ============

  /**
   * Get all users with pagination, sorting, and filtering
   */

  async getAllAnimes(
    offset: number = 1,
    limit: number = 10,
    sortBy: string = "createdAt",
    sortOrder: "asc" | "desc" = "asc",
    filter: any = {},
  ) {
    try {
      const skip = (offset - 1) * limit;
      const sortOptions: any = {};
      sortOptions[sortBy] = sortOrder === "asc" ? 1 : -1;
      const animes = await Anime.find(filter)
        .sort(sortOptions)
        .skip(skip)
        .limit(limit);
      const total = await Anime.countDocuments(filter);
      return { animes, total };
    } catch (error) {
      throw new Error(`Error fetching animes: ${error}`);
    }
  }

  /**
   * Get anime by ID
   */

  async getAnimebyId(id: string) {
    try {
      const anime = await Anime.findById(id);
      if (!anime) {
        throw new Error("Anime not found");
      }
      return anime;
    } catch (error) {
      throw new Error(`Error fetching anime: ${error}`);
    }
  }

  /**
   * update anime by ID
   */

  async updateAnimeById(id: string, updateData: any) {
    try {
      const anime = await Anime.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      if (!anime) {
        throw new Error("Anime not found");
      }
      return anime;
    } catch (error) {
      throw new Error(`Error updating anime: ${error}`);
    }
  }

  /**
   * delete anime by ID
   */

  async deleteAnimeById(id: string) {
    try {
      const anime = await Anime.findByIdAndDelete(id);
      if (!anime) {
        throw new Error("Anime not found");
      }
      return anime;
    } catch (error) {
      throw new Error(`Error deleting anime: ${error}`);
    }
  }
  
}
