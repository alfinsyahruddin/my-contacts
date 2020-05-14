import Avatar from './avatar.png';

export const generateRandomString = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateRandomData = (length) => {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push({
      id: Math.floor(Math.random() * 1000),
      photo: Avatar,
      name: generateRandomString(15),
      phone: '+62 188 649 7200',
    });
  }
  return result;
};
