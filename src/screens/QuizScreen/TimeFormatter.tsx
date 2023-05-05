const formatTime = seconds => {
  let minutes = Math.floor(seconds / 60);
  let extraSeconds = seconds % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? '0' + extraSeconds : extraSeconds;

  return `${minutes}:${extraSeconds}`;
};

export default formatTime;
