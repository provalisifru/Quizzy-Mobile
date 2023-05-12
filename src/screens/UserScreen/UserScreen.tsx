import {useState, useEffect, useContext, useCallback} from 'react';
import {
  ScrollView,
  Modal,
  View,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Image,
} from 'react-native';

import Heading from '../../feature/Heading/Heading';
import Search from './Search/Search';
import CategoryButton from './CategoryButton/CategoryButton';
import Cards from '../../feature/Cards/Cards';
import CategoriesPopup from './CategoriesPopup/CategoriesPopup';
import api from '../../api/methods';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AnswersContext} from '../../../App';
import {useFocusEffect} from '@react-navigation/native';
const SadSmiley = require('../../assets/sad.png');

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
  const [visibleLoader, setVisibleLoader] = useState(true);
  const [listing, setListing] = useState([]);
  const {userId} = useContext(AnswersContext);

  const getQuizzes = async userId => {
    const response = await api.getQuizzes(userId);
    setQuizInfo(response);
    setVisibleLoader(false);
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await api.getCategories();
      setCategories(response);
    };
    getQuizzes(userId);
    getCategories();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getQuizzes(userId);
    }, []),
  );

  const OpenCategory = () => {
    setModalVisible(!modalVisible);
  };

  const openQuiz = (quiz: QuizModel) => {
    navigation.navigate('QuizInfo', {
      data: quiz,
    });
  };

  const showOnlyTenQuizzes = quizzes => {
    return quizzes.filter((item, index) => index < 10);
  };

  useEffect(() => {
    setListing(showOnlyTenQuizzes(quizInfo));
  }, [quizInfo]);

  useEffect(() => {
    let quizzes: any[] = [];
    if (chosenCategory !== '' && search !== '') {
      setListing(
        showOnlyTenQuizzes(
          listing.filter(quiz => quiz.category === chosenCategory),
        ),
      );
      listing.forEach(quiz => {
        if (quiz.name?.toLowerCase().includes(search.toLowerCase())) {
          quizzes.push(quiz);
        }
      });
      setListing(showOnlyTenQuizzes(quizzes));
    } else if (chosenCategory === '' && search !== '') {
      let newList = quizInfo.filter(quiz =>
        quiz.name?.toLowerCase().includes(search.toLowerCase()),
      );
      setListing(newList);
    } else if (chosenCategory !== '' && search == '') {
      let newList = showOnlyTenQuizzes(
        quizInfo.filter(quiz => quiz.category === chosenCategory),
      );
      setListing(newList);
    } else setListing(showOnlyTenQuizzes(quizInfo));
  }, [chosenCategory, search]);

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView className="h-full bg-primary flex flex-column">
        <Heading
          navigation={navigation}
          iconName={true}
          isInvitationShown={true}
        />
        <Search setSearch={setSearch} />
        <CategoryButton category={'Categories'} command={OpenCategory} />
        {chosenCategory ? (
          <View className="self-center flex flex-row mt-2 items-center">
            <Text className="text-secondary mr-2 text-bold text-[18px]">
              {chosenCategory}
            </Text>
            <Icon
              onPress={() => setChosenCategory('')}
              name="close"
              size={30}
              color="#FFC93C"
            />
          </View>
        ) : null}

        {visibleLoader ? (
          <View className="mt-[200px]">
            <ActivityIndicator
              animating={visibleLoader}
              size={100}
              color="#FFC93C"
            />
          </View>
        ) : null}
        {cardList.length > 0 ? (
          cardList
        ) : (
          <View className="flex items-center mt-[25px]">
            <Text className="text-[24px] text-secondary">
              Quizzes not found
            </Text>
            <View className="w-[300px] h-[300px] mt-[50px]">
              <Image className="w-full h-full" source={SadSmiley}></Image>
            </View>
          </View>
        )}
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
    </TouchableWithoutFeedback>
  );
};

export default UserScreen;
