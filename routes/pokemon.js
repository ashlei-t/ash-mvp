const express = require('express');
const router = express.Router();

// PokeAPI https://pokeapi.co/api/v2/

// H A B I T A T ===================================
const fetchPokemonFromHabitat = async (habitat) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`$response.status`, "response is not ok dude")
        }

        const pokemonList = data.pokemon_species.slice(0, 3).map(pokemon => pokemon.name);
        const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
        return randomPokemon
    } catch (error) {
        console.error('Error fetching habitat data:', error);
        throw error;
    }
};

// S H A P E S ================================
const fetchPokemonFromShape= async (shape) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-shape/${shape}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`$response.status`, "response is not ok dude")
        }

        const pokemonList = data.pokemon_species.slice(0, 3).map(pokemon => pokemon.name);
        const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
        return randomPokemon
    } catch (error) {
        console.error('Error fetching shape data:', error);
        throw error;
    }
};

// T Y P E S ==================================
const fetchPokemonFromType= async (type) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`$response.status`, "response is not ok dude")
        }

        const pokemonList = data.pokemon.slice(0, 3).map(p => p.pokemon.name); // different its not pokemon_species
        const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
        return randomPokemon;
    } catch (error) {
        console.error('Error fetching types data:', error);
        throw error;
    }
};

// D E T A I L S ============================
const fetchPokemonDetails = async (name) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`$response.status`, "response is not ok dude")
        }

        return {
            name: data.name,
            id: data.id,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${data.id}.gif`
        }
    } catch (e) {
        console.error('Error fetching details data:', error);
        throw error;
    }
}

// R A N D O M ================================
const fetchRandomPokemon = async () => {
    try {
        // Get a random Pokemon ID between 1 and 151 (first generation)
        const randomId = Math.floor(Math.random() * 151) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`$response.status`, "response is not ok dude")
        }

        return {
            id: data.id,
            name: data.name,
            sprite: data.sprites.other['official-artwork'].front_default || data.sprites.front_default
        };
    } catch (error) {
        console.error('Error fetching random Pokemon:', error);
        throw error;
    }
};

// H A B I T A T router ============================
router.get('/pokemon-habitat/:habitat', async (req, res) => {
    try {
        const { habitat } = req.params;
        if (!habitat) return res.status(400).send({ message: 'Habitat is required' });
        const habitats = await fetchPokemonFromHabitat(habitat);
        res.json(habitats);
        console.log(habitats)
    } catch (error) {
      res.status(500).send({ message: 'Error fetching habitat data' });
    }
});

// S H A P E S router ============================
router.get('/pokemon-shape/:shape', async (req, res) => {
    try {
        const { shape } = req.params;
        if (!shape) return res.status(400).send({ message: 'Shape is required' });
        const shapes = await fetchPokemonFromShape(shape);
        res.json(shapes);
        console.log(shapes)
    } catch (error) {
        res.status(500).send({ message: 'Error fetching shapes data' });
    }
});

// T Y P E S router ==============================
router.get('/pokemon-type/:type', async (req, res) => {
    try {
      const { type } = req.params;
      if (!type) return res.status(400).send({ message: 'Type is required' });
      const types = await fetchPokemonFromType(type);
      res.json(types);
      console.log(types)
    } catch (error) {
      res.status(500).send({ message: 'Error fetching type data' });
    }
  });

// D E T A I L S router ============================
router.get('/pokemon-details/:name', async (req, res) => {
    try {
      const { name } = req.params;
      if (!name) return res.status(400).send({ message: 'Name is required' })
      const details = await fetchPokemonDetails(name);
      res.json(details);
      console.log(details)
    } catch (error) {
      res.status(500).send({ message: 'Error fetching details data' });
    }
  });

// Add this to your routes
router.get('/random', async (req, res) => {
    try {
        const randomPokemon = await fetchRandomPokemon();
        res.json(randomPokemon);
    } catch (error) {
        console.error('Error in /random route:', error);
        res.status(500).json({ error: 'Failed to fetch random Pokemon' });
    }
});

  module.exports = router;
