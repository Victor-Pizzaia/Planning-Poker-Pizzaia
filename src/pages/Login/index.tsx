import * as React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';

import groupImg from '../../assets/Group.svg';
import * as S from './styles';

type LoginProps = {
  userName: string;
  roomCode: string;
};

export function Login() {
  const [{ userName, roomCode }, setState] = React.useState<LoginProps>({
    userName: '',
    roomCode: '',
  });
  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (roomCode.trim() === '') {
      alert('Código da sala vázio');
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Sala não existe');
      return;
    }

    await database.ref(`rooms/${roomCode}/users`).push(userName);
    history.push(`/rooms/${roomCode}`);
  };

  return (
    <>
      <S.TitleWrapper>
        <S.TitleSpan>Planning Poker do </S.TitleSpan>
        <S.TitleSpan color="green">Pizzaia</S.TitleSpan>
      </S.TitleWrapper>
      <S.CenterWrapper>
        <S.Img src={groupImg} />
        <S.Wrapper onSubmit={onSubmit}>
          <S.Span>Login</S.Span>
          <S.TextContainer>
            <TextField
              placeholder="Nome"
              name="userName"
              value={userName}
              onChange={onChange}
            />
            <TextField
              placeholder="Código da Sala"
              name="roomCode"
              value={roomCode}
              onChange={onChange}
            />
          </S.TextContainer>
          <Button type="submit">Entrar</Button>
          <S.LinkSpan>
            Deseja criar uma sala?{' '}
            <Link
              to="/createRoom"
              style={{ textDecoration: 'none', color: '#00968F' }}
            >
              Clique aqui
            </Link>
          </S.LinkSpan>
        </S.Wrapper>
      </S.CenterWrapper>
    </>
  );
}
