import logo from '../../public/assets/images/static/logo.png';

export const createHeaderNavMobile = () => {
    const headerMobile = `
        <div class="drawer">
            <a class="drawer-home" href="#a"><img src="${logo}" alt="알파코로고"></a>
        <div class="drawer-contant">
            <ul class="drawer-drop_down">
                <li>    
                    <button class="drawer-drop_down_btn" type="button">DT교육</button>    
                    <ol class="menu_groups">   
                        <li><a href="/Dt">DT교육</a></li>    
                    </ol>
                </li>
                <li>    
                    <button class="drawer-drop_down_btn" type="button">기업일반교육</button>    
                    <ol class="menu_groups">   
                        <li><a href="/Corp/BookLearning">북러닝</a></li>   
                        <li><a href="/Corp/ELearning">이러닝</a></li>   
                        <li><a href="/Corp/FlippedLearning">플립러닝</a></li>    
                    </ol>
                </li>
                <li>    
                    <button class="drawer-drop_down_btn" type="button">법정의무교육</button>    
                    <ol class="menu_groups">   
                        <li><a href="/Duty/SHP">성희롱예방교육</a></li>   
                        <li><a href="/Duty/DAI">장애인인식개선교육</a></li>   
                        <li><a href="/Duty/PIP">개인정보보호교육</a></li>   
                        <li><a href="/Duty/WBP">직장내 괴롭힘 예방교육</a></li>    
                    </ol></li>
                <li>    
                    <button class="drawer-drop_down_btn" type="button">생애설계 / 전직지원</button>    
                    <ol class="menu_groups">   
                        <li><a href="/LifeNChangeJob/LifePlan">생애설계 프로그램</a></li>   
                        <li><a href="/LifeNChangeJob/OutPlacement">전직지원 프로그램</a></li>   
                        <li><a href="/LifeNChangeJob/ReEmployment">재취업지원 의무화 프로그램</a></li>    
                    </ol></li>
                <li>    
                    <button class="drawer-drop_down_btn" type="button">기업특화교육</button>    
                    <ol class="menu_groups">   
                        <li><a href="/CorpSpeci">커스텀 교육설계</a></li>    
                    </ol>
                </li>
                <li>    
                    <button class="drawer-drop_down_btn" type="button">회사소개</button>    
                    <ol class="menu_groups">   
                        <li><a href="/Intro/Vision">회사소개</a></li>   
                        <li><a href="/Intro/Family">Family &amp; Crew</a></li>    
                    </ol>
                </li>
                <li>    
                    <button class="drawer-drop_down_btn" type="button">고객센터</button>    
                    <ol class="menu_groups">   
                        <li><a href="/Customer_center/News">뉴스 &amp; 공지</a></li>   
                        <li><a href="/Customer_center/EduRequest">교육문의</a></li>   
                        <li><a href="/Customer_center/Aliance">제휴문의</a></li>   
                        <li><a href="/Customer_center/Hire">채용문의</a></li>    
                    </ol>
                </li>
            </ul>
        </div>
            <button type="button" class="drawer-close"><em class="blind">확장 메뉴 닫기</em></button>
        </div>

        <div class="header_gnb_depth2_bg"></div>
    `

    return headerMobile;
}