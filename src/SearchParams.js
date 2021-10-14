import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ['dog', 'bird', 'cat', 'rabbit', 'reptile'];

const searchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => { 
        requestPets();

    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );

        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                        location
                        <input 
                        id="location" 
                        onChange={(e) => setLocation(e.target.value)} 
                        value={location.toUpperCase()} placeholder="Location"/>
                </label>
                <label htmlFor="animal">
                    animal
                    <select
                    id="animal"
                    value={animal}
                    onChange = {e => setAnimal (e.target.value)}
                    onBlur = {e => setAnimal (e.target.value)}
                    >
                        <option/>
                            {
                                ANIMALS.map(animal => (
                                    <option value={animal} key={animal}>
                                        {animal}
                                    </option>
                                ))
                            }
                    </select>
                </label>

                <label htmlFor="breed">
                    breed
                    <select
                    id="breed"
                    value={breed}
                    onChange = {e => setBreed (e.target.value)}
                    onBlur = {e => setBreed (e.target.value)}
                    >
                        <option/>
                            {
                                breeds.map(breed => (
                                    <option value={breed} key={breed}>
                                        {breed}
                                    </option>
                                ))
                            }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets}/>                
        </div>
    )
}

export default searchParams;