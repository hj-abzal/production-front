import { Button } from 'shared/ui/Button/Button';
import { screen, render } from '@testing-library/react';

describe('Button', () => {
    it('should render text', () => {
        const testText = 'Test text';
        render(<Button>{testText}</Button>);
        expect(screen.getByText(testText)).toBeInTheDocument();
    });
});
