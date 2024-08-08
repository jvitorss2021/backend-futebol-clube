import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import SequelizeUser from '../database/models/user';

const jwtSecret = 'jwtsecret';

const createToken = (email: string, role: string): string =>
  jwt.sign({ email, role }, jwtSecret, { expiresIn: '2d' });

const login = async (email: string, password: string): Promise<string> => {
  const userValid = await SequelizeUser.findOne({ where: { email } });
  if (!userValid || !bcrypt.compareSync(password, userValid.dataValues.password)) {
    throw new Error('Incorrect email or password');
  }
  return createToken(email, userValid.role);
};

export default login;
