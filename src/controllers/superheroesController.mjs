import { obtenerSuperHeroePorId, obtenerTodosLosSuperHeroes,buscarSuperHeroesPorAtributo, obtenerSuperHeroesMayoresDe30} from "../services/superheroesService.mjs";
import {renderizarSuperHeroe, renderizarListaSuperHeroes} from "../views/responseView.mjs";

export async function obtenerSuperHeroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superHeroe = await obtenerSuperHeroePorId(id);
        if (!superHeroe) {
            return res.status(404).send({ mensaje: "Superhéroe no encontrado" });
        }

        const superheroeFormateado = renderizarSuperHeroe(superHeroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: "Error al obtener el Superhéroe", error: error.message});
    }
}

export async function obtenerTodosLosSuperHeroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperHeroes();

        const superheroesFormateados = renderizarListaSuperHeroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los Superhéroes', error: error.message });
    }
}

export async function buscarSuperHeroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;

        const superheroes = await buscarSuperHeroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: "No se encontraron Superhéroes con ese atributo" });
        }

        const superheroesFormateados = renderizarListaSuperHeroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar los Superhéroes', error: error.message });
    }
}

export async function obtenerSuperHeroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperHeroesMayoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: "No se encontraron Superhéroes mayores de 30 años" });
        }

        const superheroesFormateados = renderizarListaSuperHeroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes mayores de 30 años', error: error.message});
    }
}