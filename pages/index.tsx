import { Grid, makeStyles } from '@material-ui/core';
import CustomLightbox from '../src/components/CustomLightbox';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import { ALL_IMAGES } from '../src/constants/images';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

export default function Home() {
  const { root } = useStyles();
  const imageLinks = ALL_IMAGES.map((images) => {
    return (
      <Grid item xs={12} sm={6} lg={4} key={images[0].source}>
        <CustomLightbox images={images} />
      </Grid>
    );
  });
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={`app-container ${root}`}>
        <Grid container spacing={2} alignItems="center">
          {imageLinks}
        </Grid>
      </main>
      <footer className="app-container">
        <Footer />
      </footer>
    </>
  );
}
