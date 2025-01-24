import { Questions } from '@/types/questions.types';
import QuestionsKeys from './questionsKeys';

const questions: Questions = [
  {
    title: 'Що для вас любов з першого погляду?',
    name: QuestionsKeys.loveAtFirstSight,
    answers: [
      {
        title:
          'Булочка «Крафтяр» з вишнями і фісташковою крихтою з Власної кондитерської',
        image: '',
      },
      {
        title:
          'Поживний смузі «Крафтяр» з апельсиновим соком, манго та соком маракуї',
        image: '',
      },
    ],
  },
  {
    title: 'Як натякнути вам про свої почуття?',
    name: QuestionsKeys.howToHintAboutFeelings,
    answers: [
      { title: 'Коробочкою карамельних та фруктових макаронів', image: '' },
      { title: 'Теплими варениками з картоплею із кулінарії', image: '' },
    ],
  },
  {
    title: 'Що перекусите перед побаченням?',
    name: QuestionsKeys.whatToSnackBeforeDate,
    answers: [
      {
        title: 'Зроблю два бутерброди з хрустким часниковим багетом «Крафтяр»',
        image: '',
      },
      {
        title: 'Їсти не буду, випʼю комбучі й побіжу',
        image: '',
      },
    ],
  },
];

export default questions;
