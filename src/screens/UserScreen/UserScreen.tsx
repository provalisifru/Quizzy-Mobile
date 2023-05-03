import {useState, useEffect} from 'react';
import {ScrollView, Modal, View} from 'react-native';

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
  time?: any;
}

const UserScreen = ({navigation}: UserScreenProps) => {
  const [quizInfo, setQuizInfo] = useState<QuizModel[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState('');

  useEffect(() => {
    const getQuizzes = async () => {
      const response = await api.getQuizzes();
      setQuizInfo(response);
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
      quizId: quiz.id,
      category: quiz.category,
      name: quiz.name,
      description: quiz.description,
      time: quiz.time,
    });
  };

  let filteredQuizzes;

  filteredQuizzes = quizInfo.filter(quiz => quiz.category === chosenCategory);

  const cardList = chosenCategory
    ? filteredQuizzes.map((quiz, id) => {
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
      })
    : quizInfo.map((quiz, id) => {
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
      <Heading navigation={navigation} iconName={true} />
      <Search />
      <CategoryButton
        category={chosenCategory ? chosenCategory : 'Categories'}
        command={OpenCategory}
      />
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
