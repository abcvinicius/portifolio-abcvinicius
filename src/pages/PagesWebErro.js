import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import  Pages from './Pages';

describe('Contato', () =>  {
    test('Email Invalido', async () => {
        render(<Pages />);

        const name = screen.getByTestId('name');

        await userEvent.type(name, "anyValue");
        await userEvent.type(name);


        const requiredError = screen.queryByTestId('email-required');
        expect(requiredError).not.toBeNull();
    })

})