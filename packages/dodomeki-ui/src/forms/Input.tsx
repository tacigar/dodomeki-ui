import { InputHTMLAttributes, forwardRef } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type: 'text' | 'password' | 'url' | 'email';
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
    </div>
  );
});
