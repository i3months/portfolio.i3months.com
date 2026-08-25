/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV, RESUME_BASE_PATH } = process.env;

/**
 * 미리보기 배포용 하위 경로.
 *
 * `RESUME_BASE_PATH=/new` 로 빌드하면 라우트와 정적 자산이 모두 `/new` 아래에 놓인다.
 * 기존 `/` 배포는 그대로 두고 `docs/new/` 에 새 빌드를 얹어 나란히 비교할 때 쓴다. (`npm run export:preview`)
 */
const basePath = RESUME_BASE_PATH && RESUME_BASE_PATH !== '/' ? RESUME_BASE_PATH : '';

module.exports = withImages({
  basePath,
  assetPrefix: (() => {
    if (basePath) {
      console.log(`> Preview build: basePath/assetPrefix = '${basePath}'`);
      return basePath;
    }
    if (NODE_ENV === 'production' && homepage) {
      try {
        console.log('> Detected homepage url in package.json');
        const { pathname } = new URL(homepage);
        if (pathname !== '/') {
          console.log(`> Apply \'${pathname}\' to assetPrefix(subPath)`);
          return pathname;
        }
        return '';
      } catch {
        console.log('> Can not parse homepage URL not apply assetPrefix(subPath)');
        return '';
      }
    }
    return '';
  })(),
});
// withCSS({
// webpack: config => {
//   config.resolve.alias['@'] = __dirname;
//   return config;
// }
// }),
