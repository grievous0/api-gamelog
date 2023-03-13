import { sequelize } from '../database'
import { DataTypes, Model } from 'sequelize'

interface GameInstance extends Model {
    id: number;
    name: string;
    grid: string;
    wallpaper: string;
    bio: string;
    tags: string[];
    year: string;
    developer: string;
    publisher: string;
    metacritic_score: string;
    gamelog_score: string;
    primary_genre: string;
    open_to_work: boolean;
    created_at: Date;
    updated_at: Date;
}

const Games = sequelize.define<GameInstance>(
    'Games', 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        grid: {
            type: DataTypes.STRING,
            unique: true,
        },
        wallpaper: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        year: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        developer: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        publisher: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        metacritic_score: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        gamelog_score: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        primary_genre: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    }
);

export { Games };