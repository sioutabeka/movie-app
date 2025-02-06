import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Le titre est obligatoire"],
            trim: true, 
        }, 

        rating: {
            type: Number,
            required: [true, "La note est obligatoire"],
            min: 0,
            max: 10,

        },

        description: {
            type: String,
            default: "Regarde sur Google"
        },

        posterURL: {
            type: String,
            default: "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/be2cb9a9101e5cbd1644e722d9d4fadd~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=63033&refresh_token=d1f3c6b479c4025c134af4f88c914122&x-expires=1738846800&x-signature=14G9Pe3xBKUxbxv61Hdto0G627k%3D&shp=a5d48078&shcp=81f88b70",

        }
    }, 
    {
        timestamps: true, // Date d'ajout
    }
); 


// Le modèle pr interagir avec la collection movies
const Movie = mongoose.model("Movie", movieSchema);

export default Movie; 