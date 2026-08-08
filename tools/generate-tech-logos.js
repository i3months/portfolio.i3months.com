/* eslint-disable no-console */
/**
 * component/common/techLogos.ts 를 생성하는 스크립트.
 *
 * simple-icons(CC0-1.0) 에서 필요한 브랜드만 골라 path 데이터와 색을 굽는다.
 * 새 기술을 추가하려면 아래 SLUGS 에 simple-icons slug 를 넣고 실행하면 된다.
 *
 *   node tools/generate-tech-logos.js
 *
 * slug 를 모를 때는 https://simpleicons.org 에서 검색하면 된다.
 * 최신 버전에서 빠진 브랜드(상표 정책으로 제거된 AWS, SQL Server 등)는
 * 값으로 구버전 번호를 지정해 그 버전에서 가져온다.
 */
const fs = require('fs');
const https = require('https');
const path = require('path');

const LATEST = '16';

const SLUGS = {
  // 언어 / 런타임
  python: LATEST,
  javascript: LATEST,
  typescript: LATEST,
  openjdk: LATEST,
  c: LATEST,
  cplusplus: LATEST,
  nodedotjs: LATEST,

  // 프론트엔드
  react: LATEST,
  vuedotjs: LATEST,
  nextdotjs: LATEST,
  quasar: LATEST,
  mui: LATEST,
  storybook: LATEST,
  jquery: LATEST,
  d3: LATEST,
  playwright: '11',

  // 백엔드 / 프레임워크
  spring: LATEST,
  springboot: LATEST,
  fastapi: LATEST,
  hibernate: LATEST,

  // 인프라 / 클라우드
  amazonwebservices: '13',
  googlecloud: LATEST,
  nginx: LATEST,
  apachetomcat: LATEST,
  docker: LATEST,
  kubernetes: LATEST,
  linux: LATEST,
  istio: LATEST,
  terraform: LATEST,
  prometheus: LATEST,
  grafana: LATEST,
  apachejmeter: LATEST,
  git: LATEST,
  github: LATEST,

  // 데이터 / 메시징
  redis: LATEST,
  mariadb: LATEST,
  mysql: LATEST,
  microsoftsqlserver: '11',
  postgresql: LATEST,
  mongodb: LATEST,
  elasticsearch: LATEST,
  rabbitmq: LATEST,
  apachekafka: LATEST,

  // ML / LLM
  pytorch: LATEST,
  tensorflow: LATEST,
  scikitlearn: LATEST,
  pandas: LATEST,
  numpy: LATEST,
  jupyter: LATEST,
  huggingface: LATEST,
  vllm: LATEST,
  ray: LATEST,
  nvidia: LATEST,
  langchain: LATEST,
  googlegemini: LATEST,
  anthropic: LATEST,
  openai: '11',

  // 하드웨어 / 임베디드
  stmicroelectronics: LATEST,
  arm: '11',
};

/** 자동 보정 결과가 브랜드 인상과 어긋나는 경우만 손으로 지정한다. */
const DARK_OVERRIDES = {
  amazonwebservices: '#FF9900',
};

const LIGHT_OVERRIDES = {
  // 검정 단색 로고는 밝은 칩에서 너무 무거워 보여 살짝 눌러 쓴다.
  openjdk: '#4A5058',
  github: '#24292F',
  nextdotjs: '#24292F',
  apachekafka: '#3B3B3D',
  anthropic: '#3B3B3D',
};

const OUTPUT = path.join(__dirname, '..', 'component', 'common', 'techLogos.ts');

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'user-agent': 'resume-nextjs-icon-generator' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          resolve(get(res.headers.location));
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`${res.statusCode} ${url}`));
          return;
        }
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => resolve(body));
      })
      .on('error', reject);
  });
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/\./g, 'dot')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]/g, '');
}

/** 버전별 메타데이터(slug -> hex, title)를 모아 하나로 합친다. */
async function loadMeta(versions) {
  const meta = {};
  for (const version of versions) {
    const isLegacy = Number(version) < 14;
    const url = isLegacy
      ? `https://cdn.jsdelivr.net/npm/simple-icons@${version}/_data/simple-icons.json`
      : `https://cdn.jsdelivr.net/npm/simple-icons@${version}/data/simple-icons.json`;
    const raw = JSON.parse(await get(url));
    const icons = Array.isArray(raw) ? raw : raw.icons;
    icons.forEach((icon) => {
      const slug = icon.slug || slugify(icon.title);
      if (!meta[slug]) {
        meta[slug] = { title: icon.title, hex: icon.hex.toUpperCase() };
      }
    });
  }
  return meta;
}

function toRgb(hex) {
  return [0, 2, 4].map((i) => parseInt(hex.substr(i, 2), 16) / 255);
}

function luminance([r, g, b]) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function toHsl([r, g, b]) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const delta = max - min;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  let h = 0;
  if (delta !== 0) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
  }
  return { h: (((h * 60) % 360) + 360) % 360, s, l };
}

function toHex({ h, s, l }) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  const rgb = [
    [c, x, 0],
    [x, c, 0],
    [0, c, x],
    [0, x, c],
    [x, 0, c],
    [c, 0, x],
  ][Math.floor(h / 60) % 6].map((v) => Math.round((v + m) * 255));

  return `#${rgb
    .map((v) =>
      v
        .toString(16)
        .padStart(2, '0')
        .toUpperCase(),
    )
    .join('')}`;
}

/** 어두운 브랜드 컬러는 다크 배경에서 안 보이므로 밝기를 올린다. */
function toColorOnDark(hex) {
  const rgb = toRgb(hex);
  if (luminance(rgb) >= 0.3) {
    return `#${hex}`;
  }

  const hsl = toHsl(rgb);
  if (hsl.s < 0.18) {
    return '#E8EDF2'; // 무채색 계열은 밝은 회백색으로
  }
  return toHex({ h: hsl.h, s: Math.max(hsl.s, 0.55), l: Math.max(hsl.l, 0.68) });
}

/** 반대로 너무 밝은 브랜드 컬러(JavaScript 노랑 등)는 흰 배경에서 안 보인다. */
function toColorOnLight(hex) {
  const rgb = toRgb(hex);
  if (luminance(rgb) <= 0.62) {
    return `#${hex}`;
  }

  const hsl = toHsl(rgb);
  if (hsl.s < 0.18) {
    return '#57606A'; // 무채색 계열은 중간 회색으로
  }
  return toHex({ h: hsl.h, s: Math.min(hsl.s, 0.95), l: Math.min(hsl.l, 0.4) });
}

async function main() {
  const versions = [...new Set(Object.values(SLUGS))].sort((a, b) => Number(b) - Number(a));
  const meta = await loadMeta(versions);

  const rows = [];
  const missing = [];
  for (const [slug, version] of Object.entries(SLUGS)) {
    let svg;
    try {
      svg = await get(`https://cdn.jsdelivr.net/npm/simple-icons@${version}/icons/${slug}.svg`);
    } catch (error) {
      missing.push(slug);
      continue;
    }
    const matched = /\sd="([^"]+)"/.exec(svg);
    if (!matched || !meta[slug]) {
      missing.push(slug);
      continue;
    }
    const colorOnLight = LIGHT_OVERRIDES[slug] || toColorOnLight(meta[slug].hex);
    rows.push({
      slug,
      title: meta[slug].title,
      color: `#${meta[slug].hex}`,
      colorOnLight,
      colorOnDark: DARK_OVERRIDES[slug] || toColorOnDark(meta[slug].hex),
      rgb: toRgb(colorOnLight.slice(1))
        .map((v) => Math.round(v * 255))
        .join(', '),
      path: matched[1],
    });
    console.log(`  ok ${slug} (${meta[slug].title})`);
  }

  if (missing.length) {
    console.warn(`\n!! 찾지 못한 slug: ${missing.join(', ')}`);
  }

  const body = rows
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map(
      (row) =>
        `  ${row.slug}: {\n` +
        `    title: '${row.title}',\n` +
        `    color: '${row.color}',\n` +
        `    colorOnLight: '${row.colorOnLight}',\n` +
        `    colorOnDark: '${row.colorOnDark}',\n` +
        `    rgb: '${row.rgb}',\n` +
        `    path:\n      '${row.path}',\n` +
        `  },`,
    )
    .join('\n');

  const output = `/* eslint-disable */
/**
 * 브랜드 로고 패스 데이터 (simple-icons, CC0-1.0)
 *
 * @see https://github.com/simple-icons/simple-icons
 * @description 이 파일은 \`node tools/generate-tech-logos.js\` 로 생성된다. 직접 수정하지 않는다.
 *              viewBox 는 모두 \`0 0 24 24\` 이며 단일 path 로 구성된다.
 *              \`color\` 는 브랜드 원본 색이고, \`colorOnLight\` / \`colorOnDark\` 는
 *              밝은/어두운 배경에서 대비를 확보하도록 명도를 보정한 색이다.
 *              \`rgb\` 는 \`colorOnLight\` 의 RGB 값으로, 칩 배경·테두리를 옅은 틴트로
 *              깔 때 \`rgba(\${rgb}, 0.07)\` 처럼 알파만 얹어 쓰기 위한 것이다.
 *              표기 이름과 slug 를 연결하는 별칭은 \`component/common/TechChip.tsx\` 에 있다.
 */
export interface BrandLogo {
  title: string;
  color: string;
  colorOnLight: string;
  colorOnDark: string;
  /** colorOnLight 의 \`r, g, b\` 값 (rgba() 에 그대로 끼워 쓴다) */
  rgb: string;
  path: string;
}

export const BrandLogos: Record<string, BrandLogo> = {
${body}
};
`;

  fs.writeFileSync(OUTPUT, output, 'utf8');
  console.log(`\n${rows.length}개 아이콘을 ${path.relative(process.cwd(), OUTPUT)} 에 기록했다.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
