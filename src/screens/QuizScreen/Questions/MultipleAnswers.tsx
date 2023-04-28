import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {AnswersContext} from '../../../../App';

// const object = {}
// object["propertyName"] = propertyValue;

const MultipleAnswers = ({quizAnswers, quizQuestion}) => {
  const [answers, setAnswers] = useState([]);

  const {allAnswers, setAllAnswers} = useContext(AnswersContext);

  let answerss = {quizAnswers}.quizAnswers;

  console.log(answerss[2]);

  useEffect(() => {
    // console.log('this is answers', answers);
  }, [answers]);

  // <View key={id}>
  //   <View className="flex flex-row items-center m-2">
  //     <CheckBox
  //       disabled={false}
  //       value={toggleCheckBox}
  //       onValueChange={setAnswer}
  //     />
  //     <Text className="text-black text-[18px]">{answer}</Text>
  //   </View>
  // </View>

  return (
    <View className="m-5">
      <Text className="text-black m-2 underline font-medium text-[18px]">
        1. {quizQuestion}
      </Text>
      {/* {answer} */}
    </View>
  );
};

export default MultipleAnswers;
