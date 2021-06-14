import styled from 'styled-components';

const avatarVariants = {
  secondary: `background: #f4c414 linear-gradient(45deg, #f4c414, #f45414);`,
  primary: `background: #14bae4 linear-gradient(45deg, #14bae4, #14e4a6);`,
};

const UsersListWrapper = styled.ul`
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(50, 50, 50, .15);
  border-radius: 15px;
  transition: .2s;

  @media (min-width: 768px) {
    padding: 15px 35px;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;

  margin: 20px 0 25px;
  list-style: none;

  transition: .2s;

  &:nth-child(odd) .avatar {
    ${avatarVariants.primary}
  }

  &:nth-child(even) .avatar {
    ${avatarVariants.secondary}
  }
`;

const UserName = styled.span`
  padding-left: 15px;
  color: #aaa;
  letter-spacing: 1.5px;
`;

const Address = styled.p`
  letter-spacing: .2px;
  font-style: italic;
  font-weight: 300;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  margin-right: 30px;
  padding: 15px;

  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 5px 10px 0 rgba(50, 50, 50, .15);
`;

const StyledP = styled.p`
  color: #555;
  text-align: center;
  letter-spacing: 1px;
`;

export { UsersListWrapper, Li, Avatar, StyledP, UserName, Address };
