import mongoose from 'mongoose';
import { AnimeStatus } from '../types/anime.types';


const animeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        trim: true,
        minlength: [2, "Title must be at least 2 characters long"],
        maxlength: [100, "Title must be less than 100 characters long"],
    },
    titleJapanese: {
        type: String,
        trim: true,
        minlength: [2, "Japanese title must be at least 2 characters long"],
        maxlength: [100, "Japanese title must be less than 100 characters long"],
    },
    episodes:{
        type: Number,
    },
    status: {
        type: String,
        enum: Object.values(AnimeStatus),
        default: AnimeStatus.UPCOMING,
    },
    genra:{
        type: [String],
    },
    rating: {
        type: Number,
    },
    studio:{
        type: String,
        trim: true,
        minlength: [2, "Studio name must be at least 2 characters long"],
        maxlength: [100, "Studio name must be less than 100 characters long"],
    },
    yearReleased: {
        type: Number,
    },
    description: {
        type: String,
        trim: true,
        minlength: [10, "Description must be at least 10 characters long"],
    },
},{
    timestamps: true,
})


export const Anime = mongoose.model("Anime", animeSchema);