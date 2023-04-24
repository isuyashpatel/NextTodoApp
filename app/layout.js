import '../styles/app.scss';
import { Inter } from 'next/font/google';
import Header from './header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Todo App',
  description: 'A app whwere you can store your Todo  List',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
