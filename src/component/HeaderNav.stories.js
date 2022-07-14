import { createHeaderNav } from './HeaderNav';

export default {
  title: 'corpALPACO/Header',
};

const Template = ({args}) => {
    return createHeaderNav({...args});
}
export const HeaderNav = Template.bind({});

// HeaderNav.args = {
//     color: '#000',
//     backgroundColor: '#fff'
// }