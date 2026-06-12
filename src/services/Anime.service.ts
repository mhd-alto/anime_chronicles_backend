import mongoose from 'mongoose';
import {Anime} from '../models/Anime.model';

class AnimeService{

    // ============ CREATE OPERATIONS ============

    /**
     * createAnime - Creates a new anime document in the database.
     * @param {Object} animeData - The data for the new anime.
     * @returns {Promise<Object>} - The created anime document.
     */

    async createAnime(animeData:any){
        try{
            const anime = new Anime(animeData);
            return await anime.save();
        }catch(error){
            throw new Error(`Error creating anime: ${error}`);

        }
    }

    /**
     * create multiple animes - Creates multiple anime documents in the database.
     */


}