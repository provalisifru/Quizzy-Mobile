import {useState, useEffect} from 'react';
import {ScrollView, Modal, View, ActivityIndicator} from 'react-native';

import Heading from '../../feature/Heading/Heading';
import Search from './Search/Search';
import CategoryButton from './CategoryButton/CategoryButton';
import Cards from '../../feature/Cards/Cards';
import CategoriesPopup from './CategoriesPopup/CategoriesPopup';
import api from '../../api/methods';

interface UserScreenProps {
  navigation: any;
}

interface QuizModel {
  id?: string;
  category?: string;
  name?: string;
  description?: string;
  time?: number;
}

const UserScreen = ({navigation}: UserScreenProps) => {
  const [quizInfo, setQuizInfo] = useState<QuizModel[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [chosenCategory, setChosenCategory] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [listType, setListType] = useState('default');
  const [visibleLoader, setVisibleLoader] = useState(true);

  useEffect(() => {
    const getQuizzes = async () => {
      const response = await api.getQuizzes();
      setQuizInfo(response);
      setVisibleLoader(false);
    };
    const getCategories = async () => {
      const response = await api.getCategories();
      setCategories(response);
    };
    getQuizzes();
    getCategories();
  }, []);

  const OpenCategory = () => {
    setModalVisible(!modalVisible);
  };

  const openQuiz = (quiz: QuizModel) => {
    navigation.navigate('QuizInfo', {
      data: quiz,
    });
  };

  let listing = quizInfo;

  switch (listType) {
    case 'search': {
      let quizzes: any[] = [];
      quizInfo.forEach(quiz => {
        if (quiz.name?.toLowerCase().includes(search.toLowerCase())) {
          quizzes.push(quiz);
        }
        listing = quizzes;
      });
      break;
    }
    case 'category': {
      listing = quizInfo.filter(quiz => quiz.category === chosenCategory);
      break;
    }
    case 'default': {
      // If listType is default return only 10 quizzes
      listing = quizInfo.filter((item, index) => index < 10);
      break;
    }
  }

  const cardList = listing.map((quiz, id) => {
    return (
      <View key={id}>
        <Cards
          onPress={() => openQuiz(quiz)}
          category={quiz.category}
          title={quiz.name}
          description={quiz.description}
        />
      </View>
    );
  });

  return (
    <ScrollView className="h-full bg-primary flex flex-column">
      <Heading
        navigation={navigation}
        iconName={true}
        isInvitationShown={true}
      />
      <Search
        setSearch={setSearch}
        onFocus={() => {
          setListType('search');
          setChosenCategory('');
        }}
      />
      <CategoryButton
        category={chosenCategory ? chosenCategory : 'Categories'}
        command={OpenCategory}
      />
      {visibleLoader ? (
        <View className="mt-[200px]">
          <ActivityIndicator
            animating={visibleLoader}
            size={100}
            color="#FFC93C"
          />
        </View>
      ) : null}
      {cardList}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <CategoriesPopup
            setListType={setListType}
            categories={categories}
            closePopup={OpenCategory}
            chooseCategory={setChosenCategory}
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default UserScreen;
