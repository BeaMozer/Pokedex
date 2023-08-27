import bug from "../assets/type/bug.png";
import dark from "../assets/type/dark.png";
import dragon from "../assets/type/dragon.png";
import electric from "../assets/type/electric.png";
import fairy from "../assets/type/fairy.png";
import fighting from "../assets/type/fighting.png";
import fire from "../assets/type/fire.png";
import flying from "../assets/type/flying.png";
import ghost from "../assets/type/ghost.png";
import grass from "../assets/type/grass.png";
import ground from "../assets/type/ground.png";
import ice from "../assets/type/ice.png";
import normal from "../assets/type/normal.png";
import poison from "../assets/type/poison.png";
import psychic from "../assets/type/psychic.png";
import rock from "../assets/type/rock.png";
import steel from "../assets/type/steel.png";
import water from "../assets/type/water.png";

export const getPokemonType = (types) => {
  switch (types.type.name) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return bug;
  }
};
