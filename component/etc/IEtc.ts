import { ICommon } from '../common/ICommon';

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
  }

  export interface ExtraLink {
    /** ### 링크 제목 */
    title: string;

    /** ### 링크 URL */
    url: string;
  }
}
