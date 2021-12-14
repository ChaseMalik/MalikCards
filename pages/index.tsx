import CustomLightbox from '../src/components/CustomLightbox';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import { ALL_IMAGES } from '../src/constants/images';

export default function Home() {
  const imageLinks = ALL_IMAGES.map((images) => {
    return <CustomLightbox key={images[0].source} images={images} />;
  });
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="app-container mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          {imageLinks}
        </div>
      </main>
      <footer className="app-container">
        <Footer />
      </footer>
    </>
  );
}
