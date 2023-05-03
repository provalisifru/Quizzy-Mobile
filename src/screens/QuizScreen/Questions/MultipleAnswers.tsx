import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {AnswersContext} from '../../../../App';

const MultipleAnswers = ({quizAnswers, quizQuestion}) => {
  const {answers, setAnswers} = useContext(AnswersContext);

  const handleChange = answer => {
    if (answers.length === 0) {
      setAnswers([...answers, answer]);
    } else
      answers.forEach(element => {
        if (element === answer) {
          setAnswers(answers.filter(ans => ans != answer));
        } else setAnswers([...answers, answer]);
      });
  };

  console.log(answers);

  let showAnswers = quizAnswers.map(quizAnswer => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
      <TouchableOpacity
        key={quizAnswer.text}
        className="flex flex-row items-center"
        onPress={() => {
          setToggleCheckBox(!toggleCheckBox);
          handleChange(quizAnswer.text);
        }}>
        <View>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
        </View>
        <Text className="font-bold text-[18px] m-2">{quizAnswer.text}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View className="m-5">
      <Text className="text-black m-2 underline font-medium text-[18px]">
        1. {quizQuestion}
      </Text>
      {showAnswers}
    </View>
  );
};

export default MultipleAnswers;
