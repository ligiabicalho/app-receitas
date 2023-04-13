import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import AppContext from '../context/AppContext';
import Header from './Header';
import BtnFilter from './BtnFilter';
import '../styles/Drinks.css';

function Drinks() {
  const { drinks } = useContext(AppContext);
  const eleven = 11;
  return (
    <div>
      <Header title="Drinks" />
      <BtnFilter />
      <section className="card-meals" data-testid="drinks-div">
        {drinks.length > 0 && drinks.map((d, i) => (
          i <= eleven
          && (
            <Link
              key={ d.idDrink }
              to={ `/app-receitas/drinks/${d.idDrink}` }
              data-testid={ `link-${i}` }
            >
              <div
                data-testid={ `${i}-recipe-card` }
              >
                <img
                  data-testid={ `${i}-card-img` }
                  src={ d.strDrinkThumb }
                  alt={ `${i}-card-name` }
                />
                <p data-testid={ `${i}-card-name` }>{d.strDrink}</p>
              </div>
            </Link>
          )
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Drinks;
