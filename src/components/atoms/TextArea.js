import styled from "styled-components";

const TextArea = styled.textarea`
  -webkit-appearance: none;
  resize: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 20px;
  font-size: 1.4rem;
  font-weight: 400;
  ::-webkit-scrollbar-track {
    margin: 30px 0;
  }
  ::-webkit-scrollbar {
    width: 0.7rem;
    height: 0.7rem;
  }
  border-radius: 30px;
  padding: 13.5px 22px;
  width: 100%;
  height: calc(100% - 20px);
  min-height: 200px;
  outline: none;
  margin-top: 20px;
`;

export default TextArea;
