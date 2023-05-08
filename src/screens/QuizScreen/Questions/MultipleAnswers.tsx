import React, {useContext, useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {AnswersContext} from '../../../../App';

const MultipleAnswers = ({index, quizAnswers, quizQuestion}) => {
  const {answers, setAnswers} = useContext(AnswersContext);
  const [toggleCheckBox, setToggleCheckBox] = useState([]);

  useEffect(() => {
    setToggleCheckBox(
      quizAnswers.map(answer => ({...answer, isSelected: false})),
    );
  }, [quizAnswers]);

  const setFlagged = answerId => {
    setToggleCheckBox(prev =>
      prev.map(answer => ({
        ...answer,
        isSelected:
          answerId === answer.id ? !answer.isSelected : answer.isSelected,
      })),
    );
  };

  const handleChange = answer => {
    if (answers.length === 0) {
      setAnswers([...answers, answer]);
    } else {
      if (answers.includes(answer)) {
        setAnswers(prev => prev.filter(val => val !== answer));
      } else {
        setAnswers([...answers, answer]);
      }
    }
  };

  let showAnswers = toggleCheckBox.map(quizAnswer => {
    return (
      <TouchableOpacity
        key={quizAnswer.text}
        className="flex flex-row items-center"
        onPress={() => {
          setFlagged(quizAnswer.id);
          handleChange(quizAnswer);
        }}>
        <View>
          <CheckBox
            disabled={false}
            value={quizAnswer.isSelected}
            onValueChange={() => setFlagged(quizAnswer.id)}
          />
        </View>
        <Text className="font-bold text-[18px] m-2">{quizAnswer.text}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View className="m-5">
      <Text className="text-black m-2 underline font-medium text-[18px]">
        {index + 1}. {quizQuestion}
      </Text>
      {showAnswers}
    </View>
  );
};

export default MultipleAnswers;
