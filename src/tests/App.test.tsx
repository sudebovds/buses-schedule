import { render, screen } from '@testing-library/react';
import Footer from '../components/footer';
import Header from '../components/header';
import ScheduleItem from '../components/schedule/ScheduleItem';

describe('Desctop application rendering', () => {
    it('Render the header', () => {
        render(<Header />);
        const headerTitle = screen.getByText('Buses arriving to');
        expect(headerTitle).toBeInTheDocument()        
    }); 

    it('Render the schedule item with data', () => {
        render(<ScheduleItem 
            late={false}
            busNumber={'15'}
            serviceDay={1528633800}
            arrivalTime={'40 minutes'}
            arrivalDate={'15:40'}
            arrivalTimeLatency={null}
        />);
        
        expect(screen.getAllByText(/40 minutes/i));
        expect(screen.getAllByText(/15:40/i));
    })

    it('Render the content section', () => {
        const { container } = render(<Footer />);
        const footer = container.querySelector('footer');
        expect(footer).toBeInTheDocument();
    });
})
