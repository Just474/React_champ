import {useState} from "react";
import {missions as list} from "../missions";


export default function Search() {

    const [search, setSearch] = useState("");


    const handlerSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredList = list.filter((item) => (
        item.name.toLowerCase().replace(/\s/g, "")
            .includes(search.toLowerCase().replace(/\s/g, ""))) ||
        (
        item.cosmonaut.toLowerCase().replace(/\s/g, "")
            .includes(search.toLowerCase().replace(/\s/g, "")))
    )

    return (
        <main>
            <div className="container">
                <input type="text" name="search" onChange={handlerSearch} value={search}/>
                <ul>
                    {filteredList.map(item =>
                        <li
                            key={item.id}>
                            {item.name}
                        </li>
                    )}
                </ul>
            </div>
        </main>
    )
}