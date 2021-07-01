import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

export function TextField({ ...props }: TextFieldProps) {
  return (
    <S.Wrapper>
      <S.TextField {...props} />
    </S.Wrapper>
  );
}
