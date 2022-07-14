import { createButton } from './Button';

export default {
    title: 'corpALPACO/Button',
    argTypes: {
        whiteMode: { 
            control: 'boolean',
            description: '화이트 버전 사용여부 true / false',
            defaultValue: 'true' ,
        },
        borderWidth: { 
            control: 'number', 
            description: '버튼 아웃라인 두께',
            defaultValue: 1 ,
        },
        borderColor: { 
            control: 'color',
            description: '버튼 아웃라인 색상',
        },
        backgroundColor: { 
            control: 'color',
            description: '버튼 색상',
        },
        color: { 
            control: 'color',
            description: '폰트 색상',
        },
        label: { 
            control: 'text',
            description: '버튼 문구', 
        },
        btnType: {
            control: { 
                type: 'select',
                description: '버튼 스타일 선택',
            },
            options: ['primary', 'edu_enquiry', 'edu_enquiry-sub'],
        },
        elementType: {
            control: { type: 'select'},
            description: '버튼 : 액션을 취함 & 링크 : 페이지 이동 선택',
            defaultValue: 'button',
            options: ['button', 'a']
        },
    },
    parameters: {
        docs: {
          description: {
            component: '교육문의 버튼 UI',
          },
        },
      },

};


const Template = ({ ...args}) => {
    return createButton({ ...args});
}

export const eduEnquiry = Template.bind({});
eduEnquiry.args = {
    whiteMode: false,
    label: '교육 문의하기',
    btnType: 'edu_enquiry',
    borderColor: '#00a2be',
    backgroundColor: '#00a2be',
    color: '#fff',
}
export const eduEnquirySub = Template.bind({});
eduEnquirySub.args = {
    whiteMode: false,
    label: '교육 문의하기',
    btnType: 'edu_enquiry-sub',
    borderColor: '#00a2be',
    backgroundColor: '#00a2be',
    color: '#fff',
}

export const eduEnquirySubWhite = Template.bind({});
eduEnquirySubWhite.args = {
    elementType: 'a',
    label: '알파코 북러닝 과정리스트 받아보기',
    btnType: 'edu_enquiry-sub',
    borderColor: '#00a2be',
    backgroundColor: '#fff',
    color: '#00a2be',
}