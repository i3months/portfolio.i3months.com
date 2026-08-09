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

/**
 * WCAG 상대 휘도.
 *
 * 위 `luminance()` 는 감마 보정이 없는 선형 합이라 사람이 느끼는 밝기와 어긋난다.
 * 중간 톤 파랑(#4479A1 등)이 0.44 로 계산돼 "충분히 밝다"고 판정되는 문제가 있었으므로,
 * 대비 계산에는 반드시 이 함수를 쓴다.
 */
function relativeLuminance(hex) {
  const [r, g, b] = toRgb(hex.replace('#', '')).map((v) =>
    v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
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

/**
 * 칩 위에 얹히는 로고 색.
 *
 * `TechChip` 은 라이트/다크 두 테마 모두 이 값을 쓴다. 칩 배경이 양쪽 다 어둡기 때문인데,
 * 둘 중 밝은 쪽이 라이트 테마의 `--chip-bg`(#6B7583) 이므로 그 배경을 기준으로 대비를 맞추면
 * 다크 테마(#2A3038)는 자동으로 함께 충족된다.
 *
 * 밝기 임계값으로 판정하면 배경과 우연히 밝기가 같은 색을 걸러낼 수 없다.
 * (예: MySQL #4479A1 은 칩 배경과 대비 1.00:1 — 아이콘이 사실상 보이지 않았다)
 * 그래서 목표 대비에 닿을 때까지 색상(hue)은 유지하고 밝기만 올린다.
 *
 * 대비만 보면 안 되고 반드시 배경보다 "밝은" 쪽으로 올려야 한다.
 * 어두운 브랜드 색(pandas #150458 등)은 회색 칩과의 대비는 넉넉하지만
 * 그대로 두면 다크 테마 칩(#2A3038)에서 1:1 에 가까워져 사라진다.
 */
const CHIP_BG_ON_LIGHT = '#6B7583';
const LOGO_MIN_CONTRAST = 2.6;

function isLegible(color) {
  return (
    contrast(color, CHIP_BG_ON_LIGHT) >= LOGO_MIN_CONTRAST &&
    relativeLuminance(color) > relativeLuminance(CHIP_BG_ON_LIGHT)
  );
}

function toColorOnDark(hex) {
  if (isLegible(`#${hex}`)) {
    return `#${hex}`;
  }

  const hsl = toHsl(toRgb(hex));
  if (hsl.s < 0.18) {
    return '#E8EDF2'; // 무채색 계열은 밝은 회백색으로
  }

  // 채도를 조금 보강해 밝히는 동안 색이 완전히 빠지지 않게 한다.
  const saturation = Math.max(hsl.s, 0.45);
  for (let l = hsl.l; l <= 0.99; l += 0.01) {
    const candidate = toHex({ h: hsl.h, s: saturation, l });
    if (isLegible(candidate)) {
      return candidate;
    }
  }
  return '#E8EDF2';
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
