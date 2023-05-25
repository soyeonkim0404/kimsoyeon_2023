import { ThemeProvider } from 'styled-components';
import theme from '@/styles/common.scss';
import Layout from '@/layouts';

const layouts = {
  default: Layout,
};

export default function App({ Component, pageProps }) {
  const SetLayout = layouts[Component.layout] || layouts['default'];
  return (
    <ThemeProvider theme={theme}>
      <SetLayout>
        <Component {...pageProps} />
      </SetLayout>
    </ThemeProvider>
  );
}
