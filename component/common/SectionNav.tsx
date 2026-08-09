import { MouseEvent, useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

/**
 * ### 우측 고정 섹션 내비게이션
 *
 * @description 페이지의 섹션 제목(`h2`)을 마운트 시점에 훑어 목록을 만든다.
 *              각 섹션 컴포넌트에 id 를 심지 않아도 되므로 섹션이 늘거나 줄어도 손댈 곳이 없다.
 *              현재 보고 있는 섹션은 IntersectionObserver 로 추적한다.
 *              화면 전용 요소이므로 인쇄에서는 숨는다. (`resume-screen-only`)
 */
export function SectionNav({ locale }: { locale: 'ko' | 'en' }) {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>('.container h2'));
    const collected = headings.map((heading, index) => {
      const id = heading.id || `resume-section-${index}`;
      // eslint-disable-next-line no-param-reassign
      heading.id = id;

      /**
       * 제목에 총 기간 배지("2년")가 함께 들어있는 섹션이 있어 그대로 쓰면
       * "경력 사항. 2 년" 처럼 섞인다. 배지를 뺀 텍스트만 라벨로 쓴다.
       * 끝의 마침표는 목록에서 군더더기라 떼어낸다. ("경력 사항." -> "경력 사항")
       */
      const clone = heading.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('.badge').forEach((badge) => badge.remove());
      const label = (clone.textContent || '')
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/\.$/, '');

      return { id, label };
    });

    setSections(collected);
    if (collected.length > 0) {
      setActiveId(collected[0].id);
    }

    // 구형 브라우저에서는 현재 섹션 추적만 생략하고 목록은 그대로 제공한다.
    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      // 화면 상단 근처에 걸린 제목을 현재 섹션으로 본다.
      { rootMargin: '-10% 0px -70% 0px', threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  /**
   * 스크롤을 직접 처리한다.
   *
   * 해시 내비게이션(`<a href="#id">`)에 맡기면 이동이 되지 않는다.
   * Next 라우터가 hashchange 를 가로채는 탓에 부드러운 스크롤 애니메이션이 시작조차 하지 않고,
   * `behavior: 'smooth'` 로 직접 호출해도 같은 이유로 취소된다.
   * (검증: `behavior: 'auto'` 는 정상 이동, `'smooth'` 는 0px)
   *
   * 목차 이동은 즉시 점프가 표준적이고 무엇보다 항상 동작하므로 `'auto'` 로 고정한다.
   * 여백은 `.container h2` 의 `scroll-margin-top` 이 만들어 준다.
   */
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'auto', block: 'start' });

    // 주소창에 현재 섹션을 남긴다. (뒤로가기 히스토리는 더럽히지 않는다)
    window.history.replaceState(null, '', `#${id}`);
  };

  if (sections.length === 0) {
    return null;
  }

  return (
    <nav
      className="section-nav resume-screen-only"
      aria-label={locale === 'ko' ? '섹션 목록' : 'Sections'}
    >
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={section.id === activeId ? 'is-active' : undefined}
              aria-current={section.id === activeId ? 'true' : undefined}
              onClick={(event) => handleClick(event, section.id)}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .section-nav {
          position: fixed;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          z-index: 1020;
          max-height: 70vh;
          overflow-y: auto;
          padding: 2px 0;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: right;
        }

        li {
          margin: 0;
          padding: 0;
        }

        a {
          display: block;
          padding: 3px 2px;
          /**
           * opacity 로 흐리게 만들면 실질 대비가 2.6:1 까지 떨어져 WCAG AA 에 미달한다.
           * 투명도 대신 색으로 위계를 준다.
           */
          color: var(--resume-muted);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        a:hover {
          color: var(--resume-accent);
          text-decoration: none;
        }

        /* 키보드 포커스는 반드시 보여야 한다 */
        a:focus-visible {
          color: var(--resume-accent);
          outline: 2px solid var(--resume-accent);
          outline-offset: 2px;
          border-radius: 3px;
        }

        a.is-active {
          color: var(--resume-accent);
          font-weight: 700;
        }

        /* 본문과 겹칠 수 있는 좁은 화면에서는 감춘다 */
        @media (max-width: 1399.98px) {
          .section-nav {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
