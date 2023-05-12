import {Text, View, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useContext, useState} from 'react';
import {AnswersContext} from '../../../../App';

//  const obj = {
//   key: 'type of question',
//   array: ['array of answers']
//  }

interface OneAnswerProps {
  quizQuestion: any;
  quizAnswers: any;
  index: number;
}

const OneAnswer = ({index, quizQuestion, quizAnswers}: OneAnswerProps) => {
  const {setChecked} = useContext(AnswersContext);

  const [check, setCheck] = useState('');

  let answers = {quizAnswers}.quizAnswers;

  let answer = answers.map((answer: object, id: number) => {
    return (
      <View key={id}>
        <TouchableOpacity
          className="flex flex-row items-center m-2"
          onPress={() => {
            setChecked(answer);
            setCheck(answer.id);
          }}>
          <RadioButton
            onPress={() => {
              setChecked(answer);
              setCheck(answer.text);
            }}
            value={answer.id}
            status={check === `${answer.id}` ? 'checked' : 'unchecked'}
          />
          <Text className="text-black text-[18px]">{answer.text}</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <View className="m-5">
      <Text className="text-black m-2 underline font-medium text-[18px]">
        {index + 1}. {quizQuestion}
      </Text>
      {answer}
    </View>
  );
};

export default OneAnswer;
