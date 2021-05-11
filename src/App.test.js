import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App component', () => {
  it('App renders correctly!', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('App shows result after submitting a number.', async () => {
    const { getByTestId, findByTestId } = render(<App />);
    fireEvent.change(getByTestId('num'), { target: { value: 10 } });
    fireEvent.click(getByTestId('calc'));
    expect(await findByTestId('result')).toBeInTheDocument();
    expect(await findByTestId('result')).toHaveTextContent('Resultado: 55');
  });
});
