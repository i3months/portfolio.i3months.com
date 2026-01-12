import { ICommon } from '../common/ICommon';
import { IRow } from '../common/IRow';

export declare namespace IEtc {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78058862-e40b8a80-73c3-11ea-89fe-7d907528ca78.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/etc.ts
   */
  export interface Payload extends ICommon.Payload {
    /**
     * ### 섹션 제목
     *
     * @description 섹션 상단에 표시될 제목 (예: "EXTRAS", "기타")
     * @default "EXTRAS"
     */
    title?: string;

    /** ### 기타 항목 리스트 */
    list: Item[];

    /** ### 추가 링크 리스트 (선택사항) */

    extraLinks?: ExtraLink[];

    /**
     * ### 추가 링크 섹션 제목
     *
     * @description Extra Links 섹션의 제목 (예: "Extra Links", "추가 링크")
     * @default "Extra Links"
     */
    extraLinksTitle?: string;
  }

  export interface Item {
    /** ### 기타 항목 제목 */
    title: string;

    /** ### 기타 항목 서브 타이틀 */
    subTitle: string;

    /**
     *  ### 기타 항목 시작 시점
     *
     * @format YYYY-MM
     * @example '2014-09'
     */
    startedAt: string;

    /**
     *  ### 기타 항목 종료 시점
     *
     * @format YYYY-MM
     * @example '2015-03'
     */
    endedAt?: string;

    /**
     * ### 기타 항목 설명 (선택사항)
     *
     * @description 링크를 포함한 상세 설명을 추가할 수 있습니다.
     */
    descriptions?: IRow.Description[];

    /**
     * ### 서브타이틀 링크 항목들 (선택사항)
     *
     * @description subTitle에 표시될 링크 가능한 항목들 (예: 발표 제목들)
     */
    subTitleLinks?: SubTitleLink[];

    /**
     * ### 서브타이틀 링크 앞에 표시될 텍스트 (선택사항)
     *
     * @description subTitleLinks 앞에 표시될 텍스트 (예: "스터디 및 세미나")
     */
    subTitleLinksPrefix?: string;
  }

  export interface SubTitleLink {
    /** ### 링크 텍스트 */
    text: string;

    /** ### 링크 URL (선택사항) */
    href?: string;
  }

  export interface ExtraLink {
    /** ### 링크 제목 */
    title: string;

    /** ### 링크 URL */
    url: string;
  }
}
