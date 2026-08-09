import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap 기본값을 덮어야 하므로 항상 마지막에 로드한다.
import '../styles/global.css';

import { NextComponentType } from 'next';

export default function ResumeApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
