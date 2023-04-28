import {Text, View, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useContext, useState} from 'react';
import {AnswersContext} from '../../../../App';

const OneAnswer = ({quizQuestion, quizAnswers}) => {
  const [checked, setChecked] = useState('');

  const {allAnswers, setAllAnswers} = useContext(AnswersContext);

  let answers = {quizAnswers}.quizAnswers;

  // console.log(typeof answers[0].text);

  let answeres = answers.map((answer, id) => {
    return (
      <View key={id}>
        <TouchableOpacity
          className="flex flex-row items-center m-2"
          onPress={() => setChecked(`${answer.text}`)}>
          <RadioButton
            onPress={() => setChecked(`${answer.text}`)}
            value={answer.text}
            status={checked === `${answer.text}` ? 'checked' : 'unchecked'}
          />
          <Text className="text-black text-[18px]">{answer.text}</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <View className="m-5">
      <Text className="text-black m-2 underline font-medium text-[18px]">
        1. {quizQuestion}
      </Text>
      {answeres}
    </View>
  );
};

export default OneAnswer;
