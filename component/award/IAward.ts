import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IAward {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/80116477-fd69b600-85c0-11ea-9fe5-5e5e664605f2.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/presentation.ts
   */
  export interface Payload extends ICommon.Payload {
    /**
     * ### 섹션 제목
     *
     * @description 섹션 상단에 표시될 제목 (예: "AWARD", "수상")
     * @default "AWARD"
     */
    title?: string;

    /** ### 수상 목록 */
    list: Item[];
  }

  export interface Item {
    /** ### 수상명 */
    title: string;

    /** ### 수상 서브 타이틀 및 설명 */
    subTitle: string;

    /**
     * ### 수상 시점
     *
     * @format YYYY-MM
     * @example '2010-03'
     */
    at: string;

    descriptions: IRow.Description[];
  }
}
