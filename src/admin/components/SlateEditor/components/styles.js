import styled from 'styled-components';

export const SlateEditorOverlay  = styled.div`
  position: fixed;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.75);
  margin: 0;
  padding: 0;
  z-index: 1000;
  // pointer-events: none;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
`;

export const Wrapper  = styled.div`
  position: absolute;
    top: 0;
    left: calc(50% - 250px);
    top: calc(50% - 100px);
    z-index: 1030;
    cursor: auto;
    user-select: text;
    text-align: left;
    width: 500px;
`;

export const Inner  = styled.div`
  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 4px;
  padding: 20px;
  pointer-events: auto;

  .title {
    margin: 0;
    padding: 5px 0 4px;
    border-bottom: 1px solid $catskill-white;
    color: $slate-gray;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .btn {
    border: none;
  }

  form input,
  form .btn {
    pointer-events: auto;
  }
`;
