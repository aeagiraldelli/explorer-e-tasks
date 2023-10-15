import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  color: ${({ theme }) => theme.COLORS.BLUE_600};

  border: 0;
  height: 56px;
  padding: 0 16px;
  font-weight: 500;
  border-radius: 7px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > span {
    font-size: 1.6rem;
  }

  > svg {
    font-size: 2.2rem;
  }
`;
