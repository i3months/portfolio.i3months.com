import { CSSProperties, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faLink,
  faStar,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { HrefTargetBlank } from '.';
import { IRow } from './IRow';

// 아이콘 매핑
const iconMap: Record<string, IconDefinition> = {
  github: faGithub,
  linkedin: faLinkedin,
  twitter: faTwitter,
  link: faLink,
  star: faStar,
  envelope: faEnvelope,
  phone: faPhone,
  'map-marker': faMapMarkerAlt,
};

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
}: PropsWithChildren<{ descriptions: IRow.Description[]; option?: { padding?: boolean } }>) {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? 'pt-2' : ''}>
          {descriptions.map((description, descIndex) => {
            return (
              <>
                <Description description={description} key={descIndex.toString()} />
                {description.descriptions ? (
                  <DescriptionRecursion
                    descriptions={description.descriptions}
                    key={descIndex.toString()}
                  />
                ) : (
                  ''
                )}
              </>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  return (
    <ul>
      {descriptions.map((description, index) => {
        return (
          <>
            <Description description={description} key={index.toString()} />
            {description.descriptions ? (
              <DescriptionRecursion
                descriptions={description.descriptions}
                key={index.toString()}
              />
            ) : (
              ''
            )}
          </>
        );
      })}
    </ul>
  );
}

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  const { content, href, postImage, postHref, weight, contentLinks, preIcon } = description;

  // preIcon 렌더링 헬퍼
  const renderIcon = () => {
    if (!preIcon || !iconMap[preIcon]) return null;
    return (
      <>
        <FontAwesomeIcon icon={iconMap[preIcon]} style={{ marginRight: '8px' }} />
      </>
    );
  };

  const component = (() => {
    // contentLinks가 있으면 content와 contentLinks를 조합해서 렌더링
    if (contentLinks && contentLinks.length > 0) {
      return (
        <li style={getFontWeight(weight)}>
          {renderIcon()}
          {content}
          {contentLinks.map((link) => (
            <span key={link.text}>
              {link.href ? <HrefTargetBlank url={link.href} text={link.text} /> : link.text}
            </span>
          ))}
        </li>
      );
    }
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {renderIcon()}
          <HrefTargetBlank url={href} text={content} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)}>
          {renderIcon()}
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {renderIcon()}
          {content} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)}>
          {renderIcon()}
          {content} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {renderIcon()}
          {content} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li style={getFontWeight(weight)}>
          {renderIcon()}
          {content}
        </li>
      </>
    );
  })();

  return component;
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

// Pretendard Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  //
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};
