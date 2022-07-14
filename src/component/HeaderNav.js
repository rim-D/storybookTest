import { createInner } from './Inner';
import { createHeaderNavMobile } from './HeaderNavMB';
import logo from '../../public/assets/images/static/logo.png';

export const createHeaderNav = ({
    color = '#000',
    backgroundColor = '#fff',
}) => {
    const headerNav = document.createElement('div');
          headerNav.className = 'header_nav';
          headerNav.style.backgroundColor = backgroundColor;
          headerNav.style.color = color;

    const inner = createInner({ width: 1760 });
    inner.className = 'gnb_inner';

    const headerNavMobile = createHeaderNavMobile();

    const gnb = `
        <h1 class="header_logo">
            <a href="https://corp.alpaco.co.kr"><img src="${logo}" alt="알파코로고"></a>
        </h1>
        <div class="header_gnb">
            <ul class="depth1">
                <li>    
                    <a href="/Dt">DT교육</a>    
                    <div class="depth2">        
                        <ul style="display: none; height: 59px; padding-top: 10px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;">            
                            <li><a href="/Dt">DT교육</a></li>        
                        </ul>    
                    </div>
                </li>
                <li>    
                    <a href="/Corp">기업일반교육</a>    
                    <div class="depth2">        
                        <ul style="display: none; height: 157px; padding-top: 10px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;">            
                            <li><a href="/Corp/BookLearning">북러닝</a></li>         
                            <li><a href="/Corp/ELearning">이러닝</a></li>            
                            <li><a href="/Corp/FlippedLearning">플립러닝</a></li>       
                        </ul>    
                    </div>
                </li>
                <li>    
                    <a href="/Duty">법정의무교육</a>    
                    <div class="depth2">        
                        <ul style="display: none; height: 206px; padding-top: 10px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;">            
                            <li><a href="/Duty/SHP">성희롱예방교육</a></li>            
                            <li><a href="/Duty/DAI">장애인인식개선교육</a></li>           
                            <li><a href="/Duty/PIP">개인정보보호교육</a></li>            
                            <li><a href="/Duty/WBP">직장내 괴롭힘 예방교육</a></li>        
                        </ul>    
                    </div>
                </li>
                <li>    
                    <a href="/LifeNChangeJob">생애설계 / 전직지원</a>    
                    <div class="depth2">        
                        <ul style="display: none; height: 157px; padding-top: 10px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;">            
                            <li><a href="/LifeNChangeJob/LifePlan">생애설계 프로그램</a></li>            
                            <li><a href="/LifeNChangeJob/OutPlacement">전직지원 프로그램</a></li>            
                            <li><a href="/LifeNChangeJob/ReEmployment">재취업지원 의무화 프로그램</a></li>        
                        </ul>    
                    </div>
                </li>
                <li>    
                    <a href="/CorpSpeci">기업특화교육</a>    
                    <div class="depth2">        
                        <ul style="display: none; height: 59px; padding-top: 10px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;">            
                            <li><a href="/CorpSpeci">커스텀 교육설계</a></li>        
                        </ul>    
                    </div>
                </li>
                <li class="gnb_enquiry_btn">   
                    <div class="btn_area">       
                        <a class="btn_primary -radius" href="/customer_center/EduRequest">교육문의</a>   
                    </div>
                </li>
            </ul>
        </div>
        <button type="button" class="drawer-trigger show_ta_mo"><em class="blind">확장 메뉴</em></button>
    `;
    headerNav.append(inner);
    inner.insertAdjacentHTML('afterbegin', gnb);
    inner.insertAdjacentHTML('afterend', headerNavMobile);

    return headerNav;
};
