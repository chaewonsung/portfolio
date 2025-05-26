const WORK_DETAIL = [
  {
    id: 1,
    title: { en: 'PP Fragment', ko: '프래그먼트' },
    site: 'https://chaewonsung.github.io/react-pp-fragment',
    date: '2025. 04',
    sort: ['Interactive Web', 'Personal Project', 'React + GSAP'],
    contribution: '100%',
    brief:
      'React와 GSAP을 활용해 제작한 인터랙티브 웹사이트로, 반복되는 요소가 많은 구조를 React의 컴포넌트로 효율적으로 구성했고 섹션마다 다양한 GSAP 애니메이션을 적용해 시각적으로 다채롭고 생동감 있는 인터랙션을 구현했습니다.',
    focus:
      '애니메이션 요소가 많은 만큼 사용자의 스크롤에 따라 각 섹션이 뷰포트에 진입할 때만 애니메이션이 실행되도록 구성해 불필요한 리소스 소모를 줄이고 성능을 최적화했습니다. 또한, 텍스트를 줄 단위로 분리하는 기능을 React 패러다임에 맞게 직접 구현하여 재사용성과 유지보수성을 높였습니다. 폰트 굵기 변화로 인해 레이아웃이 흔들리는 문제는 가상 요소를 활용해 안정적으로 해결했습니다.',
    modules: 'React, gsap, sass, lodash, classnames, webpack, eslint',
    image: { prefix: 'work-ppfragment-', count: 6 },
  },
  {
    id: 2,
    title: { en: 'Appknot', ko: '앱노트' },
    site: 'https://chaewonsung.github.io/appknot',
    date: '2024. 08',
    sort: ['Interactive Web', 'Personal Project', 'GSAP + Matter.JS'],
    contribution: '100%',
    brief:
      'GSAP을 활용한 스크롤 애니메이션과 Matter.js를 활용한 도형 인터랙션을 통해 부드러운 모션과 물리 기반의 상호작용을 구현한 인터랙티브 웹사이트입니다. PC 환경에 최적화된 인터랙션을 목표로 구현하였기 때문에 반응형으로는 제작하지 않았습니다.',
    focus:
      'Matter.js를 활용해 사용자와 상호작용하는 물리 기반 인터랙션을 구현했습니다. 사용자가 페이지에 진입하면 도형들이 자연스럽게 떨어지거나, 마우스로 조작을 시작하면 중력 등이 실시간으로 변화하여 사용자 행동에 따라 반응하는 생동감 있는 경험을 제공합니다. 또한, 수평 스크롤을 적용해 콘텐츠 흐름에 변화를 주었고 페이지마다 다채롭고 새로운 터랙션을 구성해 사용자가 탐색 과정에서 지속적으로 흥미를 느낄 수 있도록 구현했습니다.',
    modules: 'jquery, webpack, gsap, matter-js',
    image: { prefix: 'work-appknot-', count: 7 },
  },
  {
    id: 3,
    title: { en: 'Danggn', ko: '당근마켓' },
    site: 'https://chaewonsung.github.io/carrot3',
    date: '2025. 01',
    sort: [
      'Commerce Web',
      'Personal Project',
      'Single Page Application',
      'React + Styled-Components',
    ],
    contribution: '100%',
    brief:
      '리액트로 구현한 첫 번째 프로젝트로, 반복되는 레이아웃을 공통 컴포넌트화하여 재사용성을 높였습니다. 카드 UI는 컴포지션 패턴을 활용하여 컴포넌트를 조합하는 방식으로 구현하였으며, styled-components를 사용하여 스타일 관리의 용이성을 높였습니다.',
    focus:
      '페이지마다 반복되는 레이아웃은 컴포넌트화하여 코드의 일관성과 재사용성을 높였고 슬라이드 요소가 많은 사이트 특성을 고려해 이미지에는 lazy loading을 적용해 초기 로딩 속도를 개선했습니다.',
    modules:
      'React (CRA), Styled-Components, Swiper, classnames, react-responsive',
    image: { prefix: 'work-carrot-', count: 5 },
  },
  {
    id: 4,
    title: { en: 'Dongguk', ko: '동국대산학교육센터' },
    site: 'https://chaewonsung.github.io/dongguk-clone',
    date: '2024. 10',
    sort: ['Interactive Web', 'Personal Project', 'GSAP + SASS'],
    contribution: '100%',
    brief:
      '다채로운 색감과 아이콘을 활용한 반응형 웹사이트입니다. SCSS의 배열과 for 반복문을 활용하여 반복적인 아이콘 배치를 효율적으로 함수화해 구현했습니다.',
    focus:
      '호버 시 편지봉투가 열리는 애니메이션, rotateX를 활용한 슬로건 인터랙션 등 웹사이트의 컨셉에 어울리는 재미있는 동작들을 구현하는 데 집중했습니다.',
    modules: 'Jquery, SASS, Webpack, GSAP, Swiper',
    image: { prefix: 'work-dongguk-', count: 6 },
  },
  {
    id: 5,
    title: { en: 'Chart', ko: '차트' },
    site: 'https://chaewonsung.github.io/chart',
    date: '2024.05',
    sort: [
      'Data Visualization',
      'Personal Project',
      'Single Page Application',
      'React + Chart.JS',
    ],
    contribution: '100%',
    brief:
      '피그마의 무료 시안을 활용해 제작한 프로젝트로, 협업 역량을 기르는 데 중점을 두었습니다. React로 개발하였으며 Chart.js를 활용해 데이터를 시각적으로 표현하는 차트를 구현하였습니다.',
    focus:
      '차트 라이브러리인 Chart.js를 활용해 막대형, 원형, 파이형 등 다양한 형태의 차트를 구현했습니다. 전체적인 레이아웃은 flex-wrap을 활용해 블록 형태의 섹션으로 구성했습니다.',
    modules: 'React, Styled-Components, Chart.js, lodash, webpack',
    image: { prefix: 'work-chart-', count: 5 },
  },
  {
    id: 6,
    title: { en: 'portfolio', ko: '2024 포트폴리오 웹사이트' },
    site: 'https://chaewonsung.github.io/hwangchaewon',
    date: '2024.11',
    sort: [
      'Interactive Web',
      'Personal Project',
      'Single Page Application',
      'GSAP + SASS',
    ],
    contribution: '100%',
    brief:
      '개인 포트폴리오 사이트로, 단순하지만 감각적인 인터랙션을 통해 몰입감을 높였습니다. 작업물 소개 페이지를 풀페이지 모달로 구현하여 자연스러운 화면 전환이 이루어지도록 함으로써 SPA와 유사한 사용자 경험을 제공했습니다.',
    focus:
      '인트로 섹션은 transform 속성을 활용하여 여섯 개의 면으로 3D 박스를 구성하고, 마우스 움직임에 따라 perspective-origin을 동적으로 조정해 입체감을 주었으며, 모바일 환경에서는 화면 높이에 맞춰 반응형으로 구현하였습니다. 또한 작업물 소개는 하나의 모달 컨테이너만 사용하고, 선택한 작업물의 정보를 동적으로 불러오는 방식으로 구현하였으며, 이를 위해 Work 클래스를 만들어 HTML을 생성하고 렌더링을 유연하게 처리하였습니다.',
    modules: 'SASS, Webpack, GSAP',
    image: { prefix: 'work-portfolio-', count: 4 },
  },
];

export default WORK_DETAIL;
