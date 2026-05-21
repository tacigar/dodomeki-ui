import { InputHTMLAttributes, Ref } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type: 'text' | 'password' | 'url' | 'email';
  ref?: Ref<HTMLInputElement>;
};

export const Input = ({ ref, ...props }: InputProps) => (
  <div>
    <input ref={ref} {...props} />
  </div>
);
