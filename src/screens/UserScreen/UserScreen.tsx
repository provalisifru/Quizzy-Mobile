import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Modal,
  Alert,
  Pressable,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Heading from '../../feature/Heading/Heading';
import Search from './Search/Search';
import CategoryButton from './CategoryButton/CategoryButton';
import Cards from '../../feature/Cards/Cards';
import CategoriesPopup from './CategoriesPopup/CategoriesPopup';

// useEffect(() => {}, category);

const UserScreen = ({navigation}) => {
  // [category, setCategory] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const OpenCategorry = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView className="h-full bg-primary flex flex-column">
      <Heading navigation={navigation} />
      <Search />
      <CategoryButton category="Categories" command={OpenCategorry} />
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View>
          <CategoriesPopup command={OpenCategorry} />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default UserScreen;
