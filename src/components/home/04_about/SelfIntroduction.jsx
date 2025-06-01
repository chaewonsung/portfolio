import React from 'react';
import SubHeading from '../common/SubHeading';

const SelfIntroduction = () => {
  return (
    <div className="self-introduction">
      <Motivation />
      <Background />
      <Aspiration />
      <Conclusion />
    </div>
  );
};

const Motivation = () => {
  return (
    <div className="self-introduction__item self-introduction__item--01">
      <h3>Motivation</h3>
      <SubHeading level={4}>
        the <i className="en--em">power of content</i> that brings positive
        influence
      </SubHeading>
      <div className="paras">
        <p>
          웹은 단순한 정보 전달을 넘어 사용자의 행동을 예측하고 적절한 UI를
          적절한 순간에 제공하는 인터랙티브한 경험을 만들어내는 도구라고
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
        Creative <i className="en--em">Teamwork</i> and Problem Solving
      </SubHeading>
      <div className="paras">
        <p>
          대학에서 영상제작을 전공하며 다양한 프로젝트를 통해 팀워크와 문제 해결
          능력을 키웠습니다. 영상 동아리 미술 감독으로서 팀 작업을 조율하고 최종
          비주얼을 책임졌으며, 의견 충돌을 조율하고 제한된 시간과 자원 속에서
          최상의 결과를 만드는 법을 배웠습니다.
        </p>
        <p>
          이 경험을 바탕으로 기술적 문제를 효과적으로 해결하고 팀과 원활히
          협력하는 웹 퍼블리셔가 되겠습니다.
        </p>
      </div>
    </div>
  );
};

const Aspiration = () => {
  return (
    <div className="self-introduction__item self-introduction__item--03">
      <h3>aspiration</h3>
      <SubHeading level={4}>
        <i className="en--em">Balancing</i> Efficiency and Quality
      </SubHeading>
      <div className="paras">
        <p>
          효율과 성의 사이에서 최선의 결과물을 내기 위해 끊임없이
          고민하겠습니다. 더 나은 방법을 찾아 탐구하고, 일의 우선순위를 명확히
          판별하여 빠르면서도 완성도 높은 작업물을 만들어 내겠습니다.
        </p>
      </div>
    </div>
  );
};

const Conclusion = () => {
  return (
    <div className="self-introduction__item self-introduction__item--04">
      <h3>Conclusion</h3>
      <div className="paras">
        <p>
          저에게 주어진 기회를 통해 꾸준히 성장하며 회사와 함께 발전하는 인재가
          되겠습니다. 감사합니다.
        </p>
      </div>
    </div>
  );
};

export default SelfIntroduction;
