import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <Fleet />
            <Destinations />
            <Testimonials />
            <CTASection />
        </>
    );
}
