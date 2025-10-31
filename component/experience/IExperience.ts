import { ICommon } from '../common/ICommon';

export declare namespace IExperience {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78032558-27540200-73a0-11ea-83cd-3fd1cea68402.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/experience.ts
   */
  export interface Payload extends ICommon.Payload {
    /**
     * ### 섹션 제목
     *
     * @description 섹션 상단에 표시될 제목 (예: "EXPERIENCE", "경력")
     * @default "EXPERIENCE"
     */
    title?: string;

    /** ### Experience 데이터 목록 */
    list: Item[];
    /** ### 총 경력 기간 표시 유/무 */
    disableTotalPeriod?: boolean;

    /**
     * ### 기간 표시 언어 설정
     *
     * @description 경력 기간을 표시할 언어 ("en": "2 Years 3 Months", "ko": "2 년 3 개월")
     * @default "en"
     */
    durationLocale?: 'en' | 'ko';
  }

  export interface Item {
    /** ### (직장)경험 명 */
    title: string;

    /** ### (직장)수행한 직위/직책 포지션 정보 */
    positions: Position[];
  }

  export interface Position {
    /** ### (직장)역할 명 (or Subtitle) */
    title: string;

    /**
     * ### (직장)경험 시작 일
     *
     * @format YYYY-MM
     * @example "2018-02"
     */

    startedAt: string;
    /**
     * ### (직장)경험 종료 일
     *
     * @format YYYY-MM
     * @example "2021-02"
     * @description 해당 값이 undefined 일 경우 **"재직 중"** 뱃지가 추가로 나타난다.
     */

    endedAt?: string;
    /**
     * ### (직장)경험 설명
     *
     * @description 하나의 `string` 요소가 `<ul>` 태그 안의 `<li>` 가 된다.
     * @todo `IRow.Description[]` 으로 변경
     */

    descriptions: string[];
    /**
     * ### (직장)경험의 키워드
     *
     * @description undefined 가 아닐 경우 해당 경험 하단에 **Skill Keywords** 목록이 추가된다.
     */

    skillKeywords?: string[];
  }
}
