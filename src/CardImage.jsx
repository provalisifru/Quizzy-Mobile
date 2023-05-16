import {Image} from 'react-native';

const CardImage = ({category, classNameText}) => {
  const SportPhoto = require('./assets/sport.jpg');
  const GeographyPhoto = require('./assets/geography.jpg');
  const SoftlabPhoto = require('./assets/softlab.png');
  const ProgrammingPhoto = require('./assets/programming.jpeg');

  var imgSource = '';

  switch (category.toLowerCase()) {
    case 'sport':
      imgSource = SportPhoto;
      break;
    case 'geography':
      imgSource = GeographyPhoto;
      break;
    case 'softlab':
      imgSource = SoftlabPhoto;
      break;
    case 'programming':
      imgSource = ProgrammingPhoto;
      break;
    default:
      imgSource = SportPhoto;
  }
  return <Image className={classNameText} source={imgSource} />;
};

export default CardImage;
