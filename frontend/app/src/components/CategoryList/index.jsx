import React from 'react';
import Container from '../UI/Container';
import CategoryItem from '../CategoryItem';
import s from './style.module.css'
import {useSelector} from 'react-redux';

const CategoryList = () => {
    const categories = useSelector(state => state.categories.list)
    return (
        <Container className={s.container}>
            <nav className={s.category_list}>
                {
                    categories.map(el => <CategoryItem {...el} key={el.categoryId}/>)
                }
            </nav>
        </Container>
    );
};

export default CategoryList;
