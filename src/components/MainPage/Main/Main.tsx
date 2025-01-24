import { appSteps, ExternalLinks } from '@/constants';
import AnimatedAppStepsList from '@AnimationBlocks/AnimatedAppStepsList';
import { FC } from 'react';
import {
  Container,
  Section,
  InfoWrap,
  TitleWrap,
  Title,
  Subtitle,
  AuthLink,
} from './Main.styled';

const Main: FC = () => {
  return (
    <Section>
      <Container>
        <InfoWrap>
          <TitleWrap>
            <Title>Сайт знайомств 2.0</Title>
            <Subtitle>
              Новий тест та любовні передбачення для ваших нових знайомств!
            </Subtitle>
          </TitleWrap>
          <AuthLink href={ExternalLinks.auth}>Увійти через Facebook</AuthLink>
        </InfoWrap>
        <AnimatedAppStepsList steps={appSteps} />
      </Container>
    </Section>
  );
};

export default Main;
