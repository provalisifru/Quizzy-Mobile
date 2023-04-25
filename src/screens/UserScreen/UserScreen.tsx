import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import Heading from '../../feature/Heading/Heading';
import Search from './Search/Search';
import CategoryButton from './CategoryButton/CategoryButton';
import Cards from '../../feature/Cards/Cards';

// useEffect(() => {}, category);

const UserScreen = () => {
  // [category, setCategory] = useState('');

  return (
    <ScrollView className="h-full bg-primary flex flex-column">
      <Heading />
      <Search />
      <CategoryButton category="Categories" />
      <Cards
        category="sport"
        title="Football players quiz"
        description="Test out your knowledge about football players in this new quiz."
      />
      <Cards
        category="geography"
        title="Geography quiz"
        description="Test out your knowledge about geography!"
      />
      <Cards
        category="flags"
        title="World flags quiz"
        description="Test out your knowledge about world flags!"
      />
    </ScrollView>
  );
};

export default UserScreen;
