import React from 'react';
import SubHeading from '../common/SubHeading';

const SelfIntroduction = () => {
  return (
    <div className="self-introduction">
      <Approach />
      <Background />
      <BeyondDesign />
      <FeaturedIn />
    </div>
  );
};

const Approach = () => {
  return (
    <div className="self-introduction__item self-introduction__item--01">
      <h3>approach</h3>
      <SubHeading level={4}>
        Designing for Impact and <i className="en--em">Clarity</i>
      </SubHeading>
      <div className="paras">
        <p>
          어릴 적부터 포토샵을 독학하여 사람들에게 필요한 제작물을 만들어주거나,
          고등학교 홍보 영상 제작에 참여하는 등 콘텐츠 제작 활동을 꾸준히
          이어왔습니다. 대학에서는 약 270시간 동안 개인적인 영상 제작에 몰두하며
          교내 영상제에서 입상하는 성과를 거두기도 했습니다. 이 과정에서
          콘텐츠가 사람들에게 미치는 영향을 직접 경험하며 단순히 개인이 만들고
          싶은 것이 아니라 사용자에게 필요한 콘텐츠를 제작하고 싶다는 생각이
          들었습니다. 그 흐름 속에서 웹 개발에 입문하였고 사용자 경험을 고려하는
          화면 구현에 흥미를 느껴 웹 퍼블리셔 직무에 지원하게 되었습니다.
        </p>
        <p>
          오늘날의 웹은 단순한 정보 전달을 넘어 사용자의 행동을 예측하고 적절한
          UI를 적절한 순간에 제공하는 인터랙티브한 경험을 만들어내는 도구라고
          생각합니다. 빠르고 정확한 화면 구현 뿐만 아니라 사용자의 몰입도를
          높이는 인터랙티브 요소와 최적화된 UI/UX를 고민하며 더욱 가치 있는 웹
          경험을 제공하는 데 기여하고 싶습니다.
        </p>
      </div>
    </div>
  );
};

const Background = () => {
  return (
    <div className="self-introduction__item self-introduction__item--02">
      <h3>Background</h3>
      <SubHeading level={4}>
        Designing for Impact and <i className="en--em">Clarity</i>
      </SubHeading>
      <div className="paras">
        <p>
          대학에서 영상제작과를 전공하며 다양한 프로젝트를 통해 팀워크와 창의적
          문제 해결 능력을 키워왔습니다. 특히 영상 동아리에서 미술 감독으로
          활동하며 팀원들과 함께 작업을 조율하고 최종적인 비주얼을 책임졌습니다.
          이러한 경험은 단순히 결과물을 제작하는 데서 그치지 않고 구성원들과의
          의견 충돌을 조율하고 제한된 시간과 자원 속에서 최상의 결과를
          만들어내는 법을 배우는 계기가 되었습니다.
        </p>
        <p>
          한 뮤직비디오 제작 프로젝트에서 예산 부족으로 인해 연출의 요구를 모두
          수용하기 어려운 상황이 있었습니다. 이를 해결하기 위해, 소품 예산을
          최소화하는 방안을 모색했습니다. 인근 주류 판매점에 직접 연락하여 빈
          양주 병을 한 박스씩 무료로 제공받았고, 완제품 대신 재료를 구입해
          소품을 직접 제작하는 방식으로 비용을 절감했습니다. 이러한 노력은
          연출팀에게 긍정적으로 받아들여졌고 의견을 조율하는 데에도 도움이
          되었습니다.
        </p>
        <p>
          이 경험을 통해 자원의 한계를 극복하고 협업을 조율하는 방법을 배웠으며,
          이는 웹 퍼블리셔로서 예상치 못한 기술적 문제를 해결하고 팀원들과의
          원활한 협력을 이끄는 데 중요한 자산이 될 것이라 확신합니다.
        </p>
      </div>
    </div>
  );
};

const BeyondDesign = () => {
  return (
    <div className="self-introduction__item self-introduction__item--03">
      <h3>Beyond Design</h3>
      <SubHeading level={4}>
        Designing for Impact and <i className="en--em">Clarity</i>
      </SubHeading>
      <div className="paras">
        <p>
          퍼블리싱 역량 강화를 최우선 과제로 삼아 다변화되는 웹 환경에 유연하게
          대응할 수 있도록 노력하겠습니다. 특히, 최근 점차 중요성이 커지고 있는
          리액트와 같은 라이브러리의 필요성을 깊이 느끼고 있으며, 현재 리액트
          학습을 진행 중입니다. 앞으로도 프로젝트에 필요한 기술이 있다면
          적극적으로 학습하고 이를 업무에 효과적으로 적용하여 귀사의 발전에
          기여할 수 있도록 최선을 다하겠습니다.
        </p>
      </div>
    </div>
  );
};

const FeaturedIn = () => {
  return (
    <div className="self-introduction__item self-introduction__item--04">
      <h3>Featured In</h3>
      <div className="paras">
        <p>제발제발 뽑아주세용 제발룡</p>
      </div>
    </div>
  );
};

export default SelfIntroduction;
