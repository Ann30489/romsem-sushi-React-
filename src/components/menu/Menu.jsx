import React from "react";
import { Link } from "react-router-dom";
import sprite from "../../assets/svg/symbol-defs-menu.svg";
import "../../App.scss";

const Menu = () => {
  return (
    <>
      <span className="menu__line"></span>
      <div className="menu">
        <div className="menu__wrapper">
          <ul className="menu__list">
            <Link className="menu__link" to="/sets">
              <li className="menu__item" id="menuItem1">
                <div className="menu__icon">
                  <svg className="icon icon-pizza_icon">
                    <use href={sprite + "#icon-pizza_icon"} />
                  </svg>
                </div>
                <span className="menu__name">Пицца</span>
              </li>
            </Link>
            <Link className="menu__link" to="/sets">
              <li className="menu__item">
                <div className="menu__icon">
                  <svg className="icon icon-sets-icon">
                    <use href={sprite + "#icon-sets-icon"} />
                  </svg>
                </div>
                <span className="menu__name">Сеты</span>
              </li>
            </Link>
            <Link className="menu__link" to="/sets">
              <li className="menu__item">
                <div className="menu__icon">
                  <svg className="icon icon-wok-icon">
                    <use href={sprite + "#icon-wok-icon"} />
                  </svg>
                </div>
                <span className="menu__name">WOK</span>
              </li>
            </Link>
            <Link className="menu__link" to="/sets">
              <li className="menu__item">
                <div className="menu__icon">
                  <svg className="icon icon-roll-icon">
                    <use href={sprite + "#icon-roll-icon"} />
                  </svg>
                </div>
                <span className="menu__name">Роллы</span>
              </li>
            </Link>
            <Link className="menu__link" to="/sets">
              <li className="menu__item">
                <div className="menu__icon">
                  <svg className="icon icon-sushi-icon">
                    <use href={sprite + "#icon-sushi-icon"} />
                  </svg>
                </div>
                <span className="menu__name">Суши</span>
              </li>
            </Link>
            <li className="menu__item">
              <div className="menu__icon">
                <span className="menu__item__note" id="noteSalad">
                  СКОРО
                </span>
                <svg className="icon icon-salad-icon">
                  <use href={sprite + "#icon-salad-icon"} />
                </svg>
              </div>
              <span className="menu__name">Салаты</span>
            </li>
            <li className="menu__item">
              <div className="menu__icon">
                <span className="menu__item__note" id="noteSoup">
                  СКОРО
                </span>
                <svg className="icon icon-soup-icon">
                  <use href={sprite + "#icon-soup-icon"} />
                </svg>
              </div>
              <span className="menu__name">Супы</span>
            </li>
            <Link className="menu__link" to="/sets">
              <li className="menu__item">
                <div className="menu__icon">
                  <svg className="icon icon-corn-icon">
                    <use href={sprite + "#icon-corn-icon"} />
                  </svg>
                </div>
                <span className="menu__name">Корн доги</span>
              </li>
            </Link>
            <Link className="menu__link" to="/sets">
              <li className="menu__item">
                <div className="menu__icon">
                  <svg className="icon icon-drink-icon">
                    <use href={sprite + "#icon-drink-icon"} />
                  </svg>
                </div>
                <span className="menu__name">Напитки</span>
              </li>
            </Link>
            <Link className="menu__link" to="/sets">
              <li className="menu__item">
                <div className="menu__icon">
                  <svg className="icon icon-discount-icon">
                    <use href={sprite + "#icon-discount-icon"} />
                  </svg>
                </div>
                <span className="menu__name">Акции</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
