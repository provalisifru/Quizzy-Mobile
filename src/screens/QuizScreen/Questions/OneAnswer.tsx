import {Text, View, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useState} from 'react';

const OneAnswer = () => {
  const [checked, setChecked] = useState('');

  const qa = [
    {
      question: 'Where was Lionel Messi born?',
      answers: ['Rosario', 'Buenos Aires', 'Cordoba', 'La Plata'],
    },
  ];

  const answer = qa.map(question => {
    return question.answers.map((answer, id) => {
      return (
        <View key={id}>
          <TouchableOpacity
            className="flex flex-row items-center m-2"
            onPress={() => setChecked(`${answer[id]}`)}>
            <RadioButton
              value={answer[id]}
              status={checked === `${answer[id]}` ? 'checked' : 'unchecked'}
            />
            <Text className="text-black text-[18px]">{answer}</Text>
          </TouchableOpacity>
        </View>
      );
    });
  });

  return (
    <View className="m-5">
      <Text className="text-black m-2 underline font-medium text-[18px]">
        1. {qa[0].question}
      </Text>
      {answer}
    </View>
  );
};

export default OneAnswer;
