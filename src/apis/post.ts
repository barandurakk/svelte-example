import Api from "../services/Api";


export const getPokemonList = async () => {
    try {
      const response = await Api.get("/pokemon?limit=200");
      return response.results;
    } catch (error) {
      console.error(error);
    }
};


export const getPokemonByName = async(name:string) => {
    try {
      const response = await Api.get(`/pokemon/${name}`);
      return response;
    } catch (error) {
      console.error(error);
    }
};