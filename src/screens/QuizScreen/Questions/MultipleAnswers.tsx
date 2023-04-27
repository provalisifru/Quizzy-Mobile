import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const MultipleAnswers = () => {
  const [answers, setAnswers] = useState([]);
  const qa = [
    {
      question: 'Where was Lionel Messi born?',
      answers: ['Rosario', 'Buenos Aires', 'Cordoba', 'La Plata'],
    },
  ];

  const answer = qa.map(question => {
    return question.answers.map((answer, id) => {
      const [toggleCheckBox, setToggleCheckBox] = useState(false);
      const setAnswer = newValue => {
        setToggleCheckBox(newValue);
        if (answers.length > 0) {
          answers.forEach(element => {
            // If answer is in array, create new array without it
            if (element === answer) {
              const updatedAnswers = answers.filter(
                newAnswer => newAnswer !== answer,
              );
              // Update state with new array
              setAnswers(updatedAnswers);
            }
            // If answer is not in array just create new array with answer in it
            else {
              setAnswers([...answers, answer]);
            }
          });
        } else if (answers.length === 0) setAnswers([...answers, answer]);=
      };
      return (
        <View key={id}>
          <View className="flex flex-row items-center m-2">
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={setAnswer}
            />
            <Text className="text-black text-[18px]">{answer}</Text>
          </View>
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

export default MultipleAnswers;
