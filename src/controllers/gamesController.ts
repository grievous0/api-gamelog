import { Games } from "../models/games";
import { Request, Response } from "express";

const gamesController = {
    // GET /  
    live: (req: Request, res: Response) => {
        return res.json({ live: true });
    },
    // GET /games
    index: async (req: Request, res: Response) => {
        try {
            const games = await Games.findAll();
            return res.json(games);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message })
            }
        }
    },
    // POST /games
    save: async (req: Request, res: Response) => {
        const { name, grid, wallpaper, bio, tags, year, developer, publisher, metacritic_score, gamelog_score, primary_genre } = req.body;
        try {
            const game = await Games.create({
                name,
                grid,
                wallpaper,
                bio,
                tags,
                year,
                developer,
                publisher,
                metacritic_score,
                gamelog_score,
                primary_genre
            });

            return res.status(201).json(game);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message })
            }
        }
    },
    // GET /games/:id
    show: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const game = await Games.findByPk(id);
            return res.json(game);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message })
            }
        }
    },
    // PUT /games/:id
    update: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, grid, wallpaper, bio, tags, year, developer, publisher, metacritic_score, gamelog_score, primary_genre } = req.body;

        try {
            const game = await Games.findByPk(id);

            if (game === null) {
                return res.status(404).json({ error: 'Game not found' });
            }

            game.name = name;
            game.grid = grid;
            game.wallpaper = wallpaper;
            game.bio = bio;
            game.tags = tags;
            game.year = year;
            game.developer = developer;
            game.publisher = publisher;
            game.metacritic_score = metacritic_score;
            game.gamelog_score = gamelog_score;
            game.primary_genre = primary_genre;

            await game.save();

            return res.status(200).json(game);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message })
            }
        }
    },
    // DELETE /games/:id
    delete: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            await Games.destroy({
                where: { id: id }
            });

            return res.status(204).json({ message: `Game ${id} deleted` });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message })
            }
        }
    }
};

export { gamesController };