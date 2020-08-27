import React from 'react';

import Layout from 'components/Layout';
import Meta from 'components/Meta';

import Home from '../sections/Home';

const Index = () => {
  return (
    <>
      <Meta title="Kilo" description="BlockChain" />

      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default Index;
