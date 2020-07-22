import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCategories from '../store/ducks/categories/actions';
import updateSettings from '../store/ducks/settings/actions';

const categoryRender = (categories, handleChange, settings) => (
  <select
    name="category"
    value={settings.category}
    onChange={handleChange}
  >
    <option key="All" value="">{`${categories.length > 0 ? 'All' : 'loading..'}`}</option>
    {categories.map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ))}
  </select>
);

const difficultyRender = (handleChange, settings) => {
  const difficultyData = ['easy', 'medium', 'hard'];
  return (
    <select
      name="difficulty"
      value={settings.difficulty}
      onChange={handleChange}
    >
      <option key="All" value="">All</option>
      {difficultyData.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

const typeRender = (handleChange, settings) => (
  <select
    name="type"
    value={settings.type}
    onChange={handleChange}
  >
    <option key="All" value="">All</option>
    <option key="multiple" value="multiple">Multiple Choice</option>
    <option key="boolean" value="boolean">True False</option>
  </select>
);

const  Settings = () => {
  const [settings, setSettings] = useState({ category: 0, difficulty: '', type: '' });
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleChange = ({ target: { name, value }}) =>
   { setSettings((state) => ({ ...state, [name]: value })); };
 
  useEffect(() => {
    dispatch((updateSettings(settings)));
  }, [settings]);
  
  return (
    <div>
      {categoryRender(categories, handleChange, settings)}
      {difficultyRender(handleChange, settings)}
      {typeRender(handleChange, settings)}
    </div>
  );
};

export default Settings;
