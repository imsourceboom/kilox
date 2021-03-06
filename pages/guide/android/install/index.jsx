import React from 'react';

import Layout from 'components/Layout';
import LayoutGuide from 'components/LayoutGuide';

import TouchAnimation from 'components/TouchAnimation';

import Meta from 'components/Meta';

const AndroidInstall = () => {
  return (
    <>
      <Meta
        title="KiloX - Android용 KiloX Wallet 애플리케이션 설치 가이드"
        description="프리톤 블록체인의 올인원 봇 킬로엑스의 Android용 KiloX Wallet 애플리케이션 설치 이미지 가이드입니다."
      />
      <Layout>
        <LayoutGuide>
          <article className="app">
            <div className="wrapper">
              <h1 className="title">
                <i>설치하기</i>
              </h1>
              <div className="images-list-box">
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>1. 구글 플레이 스토어 접속</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation bottom="45" right="40" />
                    <img src={require('@/guide/android/install/store.jpg')} alt="" />
                  </figure>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>2. KiloX Wallet 검색</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation top="4" left="50" />
                    <img src={require('@/guide/android/install/home.jpg')} alt="" />
                  </figure>
                  <p className="order-description">
                    구글 플레이 스토어 검색창에 KiloX Wallet을 검색하세요
                  </p>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>3. KiloX Wallet 선택</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation top="21" right="30" />
                    <img src={require('@/guide/android/install/search.jpg')} alt="" />
                  </figure>
                  <p className="order-description">
                    검색 결과로 나온 KiloX Wallet을 선택하세요
                  </p>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>4. 설치</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation top="34" right="26" />
                    <img src={require('@/guide/android/install/kilox.jpg')} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </article>
        </LayoutGuide>
      </Layout>
    </>
  );
};

export default AndroidInstall;
