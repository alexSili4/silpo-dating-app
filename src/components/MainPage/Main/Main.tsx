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
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const Main: FC = () => {
  return (
    <Section>
      <GeneralContainer>
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
      </GeneralContainer>
    </Section>
  );
};

export default Main;
