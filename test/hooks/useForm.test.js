import { renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';
import { act } from 'react-dom/test-utils';

describe('test on useForm', () => {
  const initialForm = {
    name: 'almir',
    email: 'almir@google.com',
  };
  test('should return default values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('shopuld change name', () => {
    const newValue = 'strider';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
    });

    expect(result.current.name).toBe('strider');
    expect(result.current.formState.name).toBe('strider');
  });
  test('shopuld reset the form', () => {
    const newValue = 'strider';
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm } = result.current;
    act(() => {
      onResetForm({ target: { name: 'name', value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
