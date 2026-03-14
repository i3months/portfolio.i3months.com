import { ICommon } from '../common/ICommon';

export declare namespace ILicense {
  export interface Payload extends ICommon.Payload {
    /**
     * ### 섹션 제목
     *
     * @description 섹션 상단에 표시될 제목 (예: "QUALIFICATION", "자격 사항")
     * @default "QUALIFICATION"
     */
    title?: string;

    /** ### 자격증 리스트 */
    list: Item[];
  }

  export interface Item {
    /** ### 자격증명 */
    title: string;

    /** ### 자격증 서브 타이틀 (영문명, 등급, 점수 등) */
    subTitle: string;

    /**
     * ### 취득일
     *
     * @format YYYY-MM
     * @example '2026-03'
     */
    startedAt: string;

    /**
     * ### 만료일 (선택사항)
     *
     * @format YYYY-MM
     * @example '2028-03'
     * @description 유효기간이 있는 자격증의 경우 만료일 표시
     */
    endedAt?: string;
  }
}
