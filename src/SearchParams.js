import { useState } from "react";

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    // The same as the line above, but some what more common
    // const locationTuple = useState("Seattle, WA"); 
    // const location = locationTuple[0];
    // const setLocation = locationTuple[1];

    return (
        <div className="search-params">
            <form>
                <label htmlFor="locations">
                    Locations
                    <input
                        id="location"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                        placeholder="Location"
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;