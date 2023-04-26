import React, {useEffect, useState} from 'react';
import {ScrollView, Modal, View} from 'react-native';

import Heading from '../../feature/Heading/Heading';
import Search from './Search/Search';
import CategoryButton from './CategoryButton/CategoryButton';
import Cards from '../../feature/Cards/Cards';
import CategoriesPopup from './CategoriesPopup/CategoriesPopup';

// useEffect(() => {}, category);

interface UserScreenProps {
  navigation: any;
}

const cards = [
  {
    category: 'sport',
    title: 'Football players quizz',
    description:
      'This quiz is about the most famous football players in the world like Messi, Mbappe, Ronaldo and many others. Test how much you know about football players now!',
  },
  {
    category: 'flags',
    title: 'World flags quiz',
    description: 'Test out your knowledge about world flags!',
  },
  {
    category: 'geography',
    title: 'Geography quiz',
    description: 'Test out your knowledge about geography!',
  },
];

const UserScreen = ({navigation}: UserScreenProps) => {
  // [category, setCategory] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const OpenCategory = () => {
    setModalVisible(!modalVisible);
  };

  const openQuiz = (card: {category: any; title: any; description: any}) => {
    navigation.navigate('QuizInfo', {
      category: card.category,
      title: card.title,
      description: card.description,
    });
  };

  const cardList = cards.map(card => {
    return (
      <Cards
        onPress={() => openQuiz(card)}
        category={card.category}
        title={card.title}
        description={card.description}
      />
    );
  });

  return (
    <ScrollView className="h-full bg-primary flex flex-column">
      <Heading navigation={navigation} iconName={true} />
      <Search />
      <CategoryButton category="Categories" command={OpenCategory} />
      {cardList}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <CategoriesPopup command={OpenCategory} />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default UserScreen;
