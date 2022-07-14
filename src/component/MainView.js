import { createHeaderTop } from './HeaderTop';
import { createHeaderNav } from './HeaderNav';

export const createMainView = () => {

  const wrap = document.createElement('div');
        wrap.id = 'wrap';

  const header = document.createElement('header');
        header.id = 'header';


  const headerLink = createHeaderTop({
      link1:{
            label: '알파코',
            href: 'https://corp.alpaco.co.kr',
            target: '_self',
      },
      link2:{
            label: '알파코 내일배움카드',
            href: 'https://hi.alpaedu.co.kr/',
            target: '_blank'
      },
      backgroundColor: '#f5f5f5',
});
const headerNav = createHeaderNav({});
  
  wrap.append(header);
  header.append(headerLink);
  header.append(headerNav);

  return wrap;

};

