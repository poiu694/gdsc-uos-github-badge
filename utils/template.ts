import { VERSION } from './constants';
import getTemplate from './svgTemplate';

const template = (name: string, role: string, posts: number) =>
  getTemplate(name, role, posts, VERSION.BASIC);

export default template;
