import { createHeaderTop } from './HeaderTop';

export default {
  title: 'corpALPACO/Header',
  argType: {
    color: {
      control: 'color',
    },
    backgroundColor: {
      control: 'color',
    }
  }
};

const Template = ({...args}) => {
    return createHeaderTop({...args});
}

export const HeaderTop = Template.bind({});

HeaderTop.args = {
  link1,
  link2,
  backgroundColor
  // link1:{
  //     label: '알파코',
  //     href: 'https://corp.alpaco.co.kr',
  //     target: '_self',
  // },
  // link2:{
  //     label: '알파코 내일배움카드',
  //     href: 'https://hi.alpaedu.co.kr/',
  //     target: '_blank'
  // },
  // backgroundColor: '#f5f5f5',
}
