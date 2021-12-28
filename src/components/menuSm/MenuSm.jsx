import React, { useContext } from "react";
import { Link } from "react-router-dom";
import sprite from "../../assets/svg/symbol-defs-ms.svg";
import ShopContext from "../../context/shop-context";
import "../../App.scss";

const MenuSm = () => {
  const context = useContext(ShopContext);
  let count = context.cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);
  return (
    <>
      <div className="menuSm">
        <ul className="menuSm__list">
          <Link className="menuSm__link" to="/">
            <li className="menuSm__item">
              <div className="menuSm__icon">
                <svg className="icon icon-menu-ms">
                  <use href={sprite + "#icon-menu-ms"}></use>
                </svg>
              </div>
              <span className="menuSm__name">Меню</span>
            </li>
          </Link>
          <Link className="menuSm__link" to="/cartMS">
            <li className="menuSm__item">
              <div className="menuSm__icon">
                <svg className="icon icon-cart-ms">
                  <use href={sprite + "#icon-cart-ms"}></use>
                </svg>
              </div>
              <span className="menuSm__name">Корзина</span>
              <div className="menuSm__countWrap">
                <div className="menuSm__countContainer">
                  <span className="menuSm__count">{count}</span>
                </div>
              </div>
            </li>
          </Link>
          <Link className="menuSm__link" to="/comments">
            <li className="menuSm__item">
              <div className="menuSm__icon">
                <svg className="icon icon-comments-ms">
                  <use href={sprite + "#icon-comments-ms"}></use>
                </svg>
              </div>
              <span className="menuSm__name">Отзывы</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MenuSm;
