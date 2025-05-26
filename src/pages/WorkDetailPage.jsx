import React, { createContext } from 'react';
import '@styles/work-detail';
import WorkIntro from '@components/work-detail/01_intro';
import WorkDetailSection from '@components/work-detail/02_detail';
import WorkPreview from '@components/work-detail/03_preview';
import { useNavigate, useParams } from 'react-router-dom';
import WORK_DETAIL from '../data/work';

export const WorkContext = createContext();

const processedWorkDetail = WORK_DETAIL.map((work, index, arr) => {
  const next = index === arr.length - 1 ? arr[0] : arr[index + 1];
  return {
    ...work,
    nextWork: {
      title: next.title,
      site: next.site,
      date: next.date,
      sort: next.sort,
    },
  };
});

const WorkDetailPage = () => {
  const { id } = useParams();
  const value = processedWorkDetail[+id - 1];
  const navigate = useNavigate();

  if (!value) navigate('*');

  return (
    <main className="work-detail-main">
      <WorkContext.Provider value={value}>
        <Content key={id} />
      </WorkContext.Provider>
    </main>
  );
};

const Content = () => {
  return (
    <>
      <WorkIntro />
      <WorkDetailSection />
      <WorkPreview />
    </>
  );
};

export default WorkDetailPage;
