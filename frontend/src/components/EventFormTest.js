import { render, fireEvent } from '@testing-library/react';
import EventForm from './EventForm';

test('submits event data', () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<EventForm onSubmit={handleSubmit} />);

  fireEvent.change(getByLabelText(/name/i), { target: { value: 'Test Event' } });
  fireEvent.change(getByLabelText(/description/i), { target: { value: 'This is a test event' } });
  fireEvent.click(getByText(/create event/i));

  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'Test Event',
    description: 'This is a test event',
  });
});
