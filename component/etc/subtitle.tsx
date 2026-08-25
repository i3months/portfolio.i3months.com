import { PropsWithChildren } from 'react';
import { HrefTargetBlank } from '../common';
import { IEtc } from './IEtc';

/**
 * ### 기타 경험 항목의 보조 줄
 *
 * @description `subTitle` 안에 링크를 끼워 넣는 세 가지 방식(`subTitleInlineLink`, `subTitleLinks`,
 *              `subTitleLinksPrefix`)을 한 곳에서 처리한다.
 *              기타 경험 섹션과 활동 & 자격 압축 목록이 함께 쓴다.
 */
export function EtcSubTitle({ item }: PropsWithChildren<{ item: IEtc.Item }>) {
  if (item.subTitleInlineLink) {
    const { text, href, position = 'before' } = item.subTitleInlineLink;
    const link = <HrefTargetBlank url={href} text={text} />;

    if (position === 'before') {
      return (
        <span>
          {link} {item.subTitle}
        </span>
      );
    }
    return (
      <span>
        {item.subTitle} {link}
      </span>
    );
  }

  if (item.subTitleLinks) {
    return (
      <div>
        {item.subTitle && <div>{item.subTitle}</div>}
        <div>
          {item.subTitleLinksPrefix && <span>{item.subTitleLinksPrefix} · </span>}
          {item.subTitleLinks.map((link, index) => (
            <span key={index.toString()}>
              {index > 0 && ' · '}
              {link.href ? (
                <HrefTargetBlank url={link.href} text={link.text} />
              ) : (
                <span>{link.text}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return <span>{item.subTitle}</span>;
}
