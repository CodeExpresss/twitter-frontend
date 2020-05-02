import React, { Component } from 'react';

import TagList from "../../fragments/tag-list/tag-list";

import "./right-bar.scss";

class RightBar extends Component {
    render() {
        return (
            <div className="component__right-bar">
                <form className="right-bar__search">
                    <input className="right-bar__search__input" type="search" placeholder="Поиск в Твиттере" />
                </form>
                <TagList />
                <div className="right-bar__footer">
                    <div className="right-bar__footer__item">Условия</div>
                    <div className="right-bar__footer__item">Конфиденциальность</div>
                    <div className="right-bar__footer__item">Файлы cookie</div>
                    <div className="right-bar__footer__item">Информация об объявлениях</div>
                    <div className="right-bar__footer__item">Больше</div>
                    <div className="right-bar__footer__item">© 2020 CodeExpress</div>
                </div>
            </div>
        );
    }
}

export default RightBar;