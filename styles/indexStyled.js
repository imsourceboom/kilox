import styled from 'styled-components';

const maxWidth = 1200;
export const Section = styled.section`

  .container {
    min-width: 320px;
    margin: 0 auto;
  }

  i {
    font-style:normal;
  }

  article.intro {
    margin-top: 104px;
    padding: 0 16px;
    font-weight: bold;
    font-size: 1.5em;

    p {
      margin-bottom: 11px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  article.preview {
    /* max-width: ${maxWidth}px; */
    position: relative;
    margin-top: 100px;
    width: 100%;
    padding: 10px 0;
    overflow: hidden;

    picture {
      img {
        position: relative;
        z-index:10;
        width: 93%;
        max-width: 381.062px;
        display: block;
        max-height: 812px;
        border-radius: 10px;
        margin: 0 auto;
        box-shadow: ${({ theme }) => theme.shadow};
      }
    }
  }

  article.description {
    margin: 160px 0;
    padding: 160px 16px;
    background-color: ${({ theme }) => theme.descriptionBack};
    color: #dfe6e9;

    i {
      margin-right: 10px;
    }

    .kilox-is {
      font-size: 40px;
      padding-bottom: 2em;
    }

    .kilox-is, .wrapper, .middle-comment {
      margin: 0 auto;
      max-width: 650px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    .middle-comment {
      padding: 80px 0;
      font-size: 40px;
      line-height: 1.3;
    }

    .box {
      width: 100%;

      &:first-child {
        margin-bottom: 64px;
      }
    }

    .title {
      font-size: 20px;
      margin-bottom: 15px;
    }

    .about {
      font-size: 15px;
    }
  }

  article.join {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    .join-button {
      width: 220px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(231,235,237, 1);
      color: rgba(190,190,190,1);
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      margin-bottom: 20px;
    }

    .devicons {
      display: flex;
      align-items: center;

      svg {
        margin-right: 20px;
        width: 24px;

        &:nth-child(2) {
          fill: ${({ theme }) => theme.devicon};
          width: 23px;
        }

        &:last-child {
          margin-right: 0;
          width: 21px;
        }
      }
    }
  }

  article.suggest {
    font-size: 32px;
    padding: 0 16px;
  }

  article.contact {
    padding: 150px 16px 150px;
    font-size: 20px;
    font-weight:lighter;
    text-align: center;

    i {
      margin-right: 10px;
    }
  }

  @media (min-width: 768px) {
    article.intro {
      margin-top: 120px;
      font-size: 2em;

      p {
        text-align: center;

        br {
          display: none;
        }
      }
    }

    article.join {
      flex-direction: row;

      .join-button {
        margin-right: 30px;
        margin-bottom: 0;
      }
    }

    article.description {
      .kilox-is {
        font-size: 40px;
        text-align: center;
      }

      .box {
        width: 45%;

        &:first-child {
          margin-right: 10%;
          margin-bottom: 0;
        }
      }

      .middle-comment {
        font-size: 48px;
        text-align: center;
        white-space: nowrap;
        line-height: 1.5;
        padding: 80px 0;
      }
    }

    article.suggest {
      font-size: 48px;
      text-align: center;

      br {
        display: none;
      }
    }

    article.contact {
      padding: 180px 0;
      font-size: 24px;

      i {
        margin-right: 12px;
      }
    }
  }
`;
