import { PropsWithChildren } from 'react';
import { IOpenSource } from './IOpenSource';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';

export default function OpenSourceRow({
  payload,
}: PropsWithChildren<{ payload: IOpenSource.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
}

/**
 * 레일에 올릴 역할.
 *
 * @description payload 는 역할을 설명 목록의 한 줄로 갖고 있다. 다른 섹션의 레일이 기간으로 채워지는 자리라
 *              오픈소스만 비워두면 빠뜨린 것처럼 보이므로, 이 줄을 목록에서 빼내 레일로 올린다.
 *              payload 는 손대지 않고 표시 단계에서만 옮긴다.
 */
const ROLE_PATTERN = /^(owner|maintainer|contributor)(\s*&\s*(owner|maintainer|contributor))?$/i;

function serialize(item: IOpenSource.Item): IRow.Payload {
  const descriptions = item.descriptions || [];
  const role = descriptions.find(
    (description) => !description.href && ROLE_PATTERN.test((description.content || '').trim()),
  );

  return {
    left: {
      title: role ? role.content.trim() : '',
    },
    right: {
      title: item.title,
      descriptions: role
        ? descriptions.filter((description) => description !== role)
        : descriptions,
    },
  };
}
