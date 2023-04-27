import {Image} from 'react-native';

const CardImage = ({category, classNameText}) => {
  const FootballPhoto = require('./assets/sport.jpg');
  const GeographyPhoto = require('./assets/geography.png');
  const FlagsPhoto = require('./assets/flags.jpg');

  var imgSource = '';

  switch (category) {
    case 'sport':
      imgSource = FootballPhoto;
      break;
    case 'geography':
      imgSource = GeographyPhoto;
      break;
    case 'flags':
      imgSource = FlagsPhoto;
      break;
    default:
      imgSource = FootballPhoto;
  }
  return <Image className={classNameText} source={imgSource} />;
};

export default CardImage;
