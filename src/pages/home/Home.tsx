import BannerSection from '../../components/sections/BannerSection';
import CategorySection from '../../components/sections/CategorySection';
import MostPopularSection from '../../components/sections/MostPopularSection';
import NewArrivalsSection from '../../components/sections/NewArrivalsSection';
import NewsletterSection from '../../components/sections/NewsletterSection';

const Home = () => {
  return (
    <>
      <BannerSection />
      <CategorySection />
      <NewArrivalsSection />
      <MostPopularSection />
      <NewsletterSection />
    </>
  );
};

export default Home;
