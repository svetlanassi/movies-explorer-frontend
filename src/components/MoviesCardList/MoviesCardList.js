import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <section className="movies-cards">
            <ul className="movies-cards__list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button className="movies-cards__more-button" type="button">Ещё</button>
        </section>
    );
}

export default MoviesCardList;