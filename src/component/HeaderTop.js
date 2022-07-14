
import { createInner } from './Inner';

export const createHeaderTop = ({
  link1 = {
    label: '알파코',
    href: 'https://corp.alpaco.co.kr',
    target: '_self',
  },
  link2= {
      label: '알파코 내일배움카드',
      href: 'https://hi.alpaedu.co.kr/',
      target: '_blank'
  },
  backgroundColor= '#f5f5f5',
}) => {

  const headerTop = document.createElement('div');
        headerTop.className = 'header_top';
        headerTop.style.backgroundColor = backgroundColor;
  const inner = createInner({ width: 1760 });
  const headerTopLink = `
    <ul class="family_stie_list">
        <li><a href="${link1.href}" target="${link1.target}">${link1.label}</a></li>
        <li><a href="${link2.href}" target="${link2.target}">${link2.label}</a></li>
    </ul>
  `;

  headerTop.append(inner);
  inner.insertAdjacentHTML('afterbegin', headerTopLink);
  
  return headerTop;
};
