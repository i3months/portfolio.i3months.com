import { ICommon } from '../common/ICommon';

export declare namespace ISkill {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78029577-cf1b0100-739b-11ea-9c2c-a41acbe9125c.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/skill.ts
   */
  export interface Payload extends ICommon.Payload {
    /**
     * ### 섹션 제목
     *
     * @description 섹션 상단에 표시될 제목 (예: "SKILL", "기술")
     * @default "SKILL"
     */
    title?: string;

    /**
     * ### 보유 기술 목록
     */
    skills: Skill[];

    /** ### 수치에 대한 설명
     *
     * @description 'SKILL' 타이틀 옆에 붙는 tooltip 이다.
     */
    tooltip?: string;
  }

  export interface Skill {
    /** ### 대분류 */
    category: string;

    /** ### 해당 분류 내 항목들 */
    items: Item[];
  }

  interface Item {
    /** ### 보유 기술 이름 */
    title: string;

    /**
     * ### 보유 기술 수준
     *
     * @description 값을 주면 기술 칩 오른쪽에 작은 숫자 라벨로 붙는다.
     * @value undefined: 숫자 라벨이 붙지 않는다.
     */
    level?: 1 | 2 | 3;
  }
}
