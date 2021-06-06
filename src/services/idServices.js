import { v4 as uuid } from 'uuid';

const GetNewId = () => {
  return uuid();
};

export default GetNewId;
