import { CSSProperties, PropsWithChildren } from 'react';
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
 * @description 칩 배경·테두리·글자는 항목과 무관하게 단색으로 통일한다.
 *              색을 갖는 요소는 로고뿐이다.
 *              농도를 바꾸려면 여기 한 곳만 만지면 전체에 반영된다.
 */
const ChipColor = {
  background: '#EEF1F5',
  border: '#DCE1E8',
  text: '#2B3138',
  hoverBackground: '#E4E9F0',
  hoverBorder: '#C9D1DB',
  marker: '#9AA3AD',
  level: '#868E97',
};

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.1em 0.58em 0.1em 0.48em;
  border-radius: 6px;
  border: 1px solid ${ChipColor.border};
  background: ${ChipColor.background};
  color: ${ChipColor.text};
  font-size: 0.83rem;
  font-weight: 600;
  line-height: 1.65;
  white-space: nowrap;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${ChipColor.hoverBorder};
    background: ${ChipColor.hoverBackground};
  }

  &[data-size='sm'] {
    gap: 0.34em;
    padding: 0.06em 0.5em 0.06em 0.42em;
    font-size: 0.765rem;
  }
`;

const Logo = styled.svg`
  width: 0.98em;
  height: 0.98em;
  flex: 0 0 auto;
  color: var(--tech-chip-logo);
`;

const Marker = styled.span`
  width: 0.32em;
  height: 0.32em;
  margin: 0 0.16em;
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${ChipColor.marker};
`;

const Level = styled.span`
  margin-left: 0.1em;
  color: ${ChipColor.level};
  font-size: 0.82em;
  font-weight: 500;
`;

const List = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 0.32rem 0.36rem;
  align-items: center;
`;

export function TechChip({
  name,
  level,
  size = 'md',
}: PropsWithChildren<{ name: string; level?: number; size?: 'md' | 'sm' }>) {
  const logo = findBrandLogo(name);
  const logoStyle = logo ? ({ '--tech-chip-logo': logo.colorOnLight } as CSSProperties) : undefined;

  return (
    <Chip data-size={size}>
      {logo ? (
        <Logo viewBox="0 0 24 24" style={logoStyle} aria-hidden="true" focusable="false">
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

export function TechChipList({
  names,
  size = 'md',
  className,
}: PropsWithChildren<{ names: string[]; size?: 'md' | 'sm'; className?: string }>) {
  return (
    <List className={className}>
      {names.map((name, index) => (
        <TechChip key={index.toString()} name={name} size={size} />
      ))}
    </List>
  );
}
