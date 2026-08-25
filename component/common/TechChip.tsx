import { CSSProperties, PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

import { BrandLogo, BrandLogos } from './techLogos';

/**
 * ### 표기 이름 -> 브랜드 로고 매핑
 *
 * @description 키는 `normalize()` 를 통과한 형태(소문자, 영숫자만)여야 한다.
 *              표기 이름이 로고 slug 와 같으면(`python`, `docker` 등) 여기에 적지 않아도 자동으로 붙는다.
 *              로고가 없는 개념 키워드(RAG, LLM, EKF ...)는 매핑하지 않으면 점 마커로 렌더링된다.
 */
const LogoAlias: Record<string, string> = {
  // 언어 / 런타임
  java: 'openjdk',
  jdk: 'openjdk',
  kotlin: 'openjdk',
  cpp: 'cplusplus',
  nodejs: 'nodedotjs',
  node: 'nodedotjs',

  // 프론트엔드
  reactjs: 'react',
  reactnative: 'react',
  vue: 'vuedotjs',
  vuejs: 'vuedotjs',
  nextjs: 'nextdotjs',
  d3js: 'd3',
  materialui: 'mui',

  // 백엔드 / 프레임워크
  springframework: 'spring',
  springbatch: 'spring',
  springsecurity: 'spring',
  springdatajpa: 'spring',
  springcloud: 'spring',
  springmvc: 'spring',
  jpa: 'hibernate',

  // 인프라 / 클라우드
  aws: 'amazonwebservices',
  gcp: 'googlecloud',
  gcs: 'googlecloud',
  cloudrun: 'googlecloud',
  cloudsql: 'googlecloud',
  cloudarmor: 'googlecloud',
  cloudstorage: 'googlecloud',
  computeengine: 'googlecloud',
  gce: 'googlecloud',
  bigquery: 'googlecloud',
  dockercompose: 'docker',
  k8s: 'kubernetes',
  tomcat: 'apachetomcat',
  jmeter: 'apachejmeter',

  // 데이터 / 메시징
  sqlserver: 'microsoftsqlserver',
  mssql: 'microsoftsqlserver',
  postgres: 'postgresql',
  pgvector: 'postgresql',
  kafka: 'apachekafka',
  elastic: 'elasticsearch',
  elk: 'elasticsearch',

  // ML / LLM
  transformers: 'huggingface',
  huggingface: 'huggingface',
  hf: 'huggingface',
  gemini: 'googlegemini',
  claude: 'anthropic',
  gpt: 'openai',
  chatgpt: 'openai',
  sklearn: 'scikitlearn',
  torch: 'pytorch',
  // NVIDIA 스택은 개별 로고가 없어 NVIDIA 마크를 공용으로 쓴다.
  tritoninferenceserver: 'nvidia',
  triton: 'nvidia',
  nccl: 'nvidia',
  rdma: 'nvidia',
  cuda: 'nvidia',
  tensorrt: 'nvidia',

  // 하드웨어 / 임베디드
  stm32: 'stmicroelectronics',
  stm: 'stmicroelectronics',
  cortexm4: 'arm',
  cortexm0: 'arm',
};

function normalize(name: string) {
  return name
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]/g, '');
}

/** 표기 이름에 대응하는 브랜드 로고를 찾는다. 없으면 undefined. */
export function findBrandLogo(name: string): BrandLogo | undefined {
  const key = normalize(name);
  return BrandLogos[LogoAlias[key] || key];
}

/**
 * ### 칩 색상
 *
 * @description 실제 값은 `styles/global.css` 의 `--chip-*` 변수가 갖는다.
 *              배경은 페이지 배경과 거의 같은 명도라 로고 색이 칩을 구분하는 유일한 색이다.
 *              다크 테마에서 변수만 바뀌므로 이 컴포넌트는 손댈 필요가 없고,
 *              인쇄 시에도 화면과 같은 색으로 나온다.
 */
const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.1em 0.62em 0.1em 0.5em;
  border-radius: 5px;
  border: 1px solid var(--chip-border);
  background: var(--chip-bg);
  color: var(--chip-text);
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.65;
  white-space: nowrap;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: var(--chip-border-hover);
    background: var(--chip-bg-hover);
  }

  &[data-size='sm'] {
    gap: 0.34em;
    padding: 0.06em 0.55em 0.06em 0.45em;
    font-size: 0.7rem;
  }

  /* 모바일에서는 칩이 여러 줄을 차지하므로 한 톤 더 조인다. */
  @media (max-width: 767.98px) {
    font-size: 0.69rem;

    &[data-size='sm'] {
      gap: 0.3em;
      padding: 0.04em 0.48em 0.04em 0.4em;
      font-size: 0.66rem;
    }
  }

  /**
   * 인쇄용 크기
   *
   * 인쇄 폭(A4 약 700px)은 위 모바일 분기에 걸리므로 값을 다시 지정해야 한다.
   * 다만 화면과 같은 rem 값을 쓰면 안 된다. 인쇄 본문은 10.5pt(약 14px)로 줄어드는데
   * 칩은 rem(루트 16px) 기준이라 함께 줄지 않아 본문 대비 커 보인다.
   * 종이에서는 칩이 본문을 읽는 흐름을 끊지 않아야 하므로 화면 비율(본문의 72%)보다
   * 더 낮은 본문의 약 62%(작은 칩 57%)까지 내렸다. 로고 크기는 em 단위이므로 함께 줄어든다.
   * 주의: 이 주석은 템플릿 리터럴 안이므로 백틱을 쓰면 문자열이 끊긴다.
   */
  @media print {
    gap: 0.28em;
    padding: 0.04em 0.36em 0.04em 0.28em;
    border-radius: 3px;
    font-size: 0.54rem;

    &[data-size='sm'] {
      gap: 0.26em;
      padding: 0.02em 0.32em 0.02em 0.26em;
      font-size: 0.5rem;
    }
  }
`;

const Logo = styled.svg`
  width: 0.98em;
  height: 0.98em;
  flex: 0 0 auto;
`;

const Marker = styled.span`
  width: 0.32em;
  height: 0.32em;
  margin: 0 0.16em;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--chip-marker);
`;

const Level = styled.span`
  margin-left: 0.1em;
  color: var(--chip-level);
  font-size: 0.82em;
  font-weight: 500;
`;

const List = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 0.32rem 0.36rem;
  align-items: center;

  @media (max-width: 767.98px) {
    gap: 0.26rem 0.3rem;
  }

  /* 인쇄에서는 칩이 작아지므로 간격도 함께 좁힌다. */
  @media print {
    gap: 0.18rem 0.22rem;
  }
`;

export function TechChip({
  name,
  level,
  size = 'md',
  className,
}: PropsWithChildren<{ name: string; level?: number; size?: 'md' | 'sm'; className?: string }>) {
  const logo = findBrandLogo(name);
  /**
   * 밝은/어두운 배경용 색을 둘 다 넘기고, 어느 쪽을 쓸지는 CSS(`.resume-chip-logo`)가
   * 현재 테마를 보고 고른다. 인쇄에서는 항상 밝은 배경용이 선택된다.
   */
  const logoStyle = logo
    ? ({
        '--tech-chip-logo-light': logo.colorOnLight,
        '--tech-chip-logo-dark': logo.colorOnDark,
      } as CSSProperties)
    : undefined;

  return (
    <Chip data-size={size} className={className}>
      {logo ? (
        <Logo
          className="resume-chip-logo"
          viewBox="0 0 24 24"
          style={logoStyle}
          aria-hidden="true"
          focusable="false"
        >
          <path d={logo.path} fill="currentColor" />
        </Logo>
      ) : (
        <Marker aria-hidden="true" />
      )}
      {name}
      {level ? <Level>{level}</Level> : ''}
    </Chip>
  );
}

/**
 * ### 칩 목록
 *
 * @param limit 처음부터 보여줄 개수. 넘치는 칩은 "+N" 버튼으로 펼친다.
 *              접어서 감추는 것이 2개 미만이면 버튼이 칩보다 거추장스러우므로 그냥 다 보여준다.
 *              접힌 칩은 DOM 에 남아 있고 CSS 로만 감춘다. 덕분에 인쇄에서는 클릭 없이 모두 나온다.
 */
export function TechChipList({
  names,
  size = 'md',
  className,
  limit,
}: PropsWithChildren<{ names: string[]; size?: 'md' | 'sm'; className?: string; limit?: number }>) {
  const [expanded, setExpanded] = useState(false);

  const overflow = limit ? names.length - limit : 0;
  const hiddenCount = overflow >= 2 ? overflow : 0;
  const collapsed = hiddenCount > 0 && !expanded;

  return (
    <List className={className}>
      {names.map((name, index) => (
        <TechChip
          key={index.toString()}
          name={name}
          size={size}
          className={collapsed && limit && index >= limit ? 'resume-chip-hidden' : undefined}
        />
      ))}
      {hiddenCount > 0 && (
        <button
          type="button"
          className="resume-chip-more resume-screen-only"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label={expanded ? 'Show fewer' : `Show ${hiddenCount} more`}
        >
          {expanded ? `−${hiddenCount}` : `+${hiddenCount}`}
        </button>
      )}
    </List>
  );
}
