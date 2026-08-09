import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const STORAGE_KEY = 'resume-theme';

/**
 * ### 인쇄 / 다크 모드 컨트롤
 *
 * @description 언어 토글 위에 나란히 붙는 유틸 버튼.
 *              테마는 `html[data-theme]` 로 적용하고 localStorage 에 기억한다.
 *              첫 방문은 OS 설정(prefers-color-scheme)을 따른다.
 *              인쇄는 화면과 동일하게 나와야 하므로 여기서 테마를 바꾸지 않는다.
 *              (종이에서는 항상 라이트로 나오도록 `styles/global.css` 의 `@media print` 가 처리한다)
 */
export function ViewControls({ locale }: { locale: 'ko' | 'en' }) {
  const isKo = locale === 'ko';
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    /**
     * 테마는 `pages/_document.tsx` 의 부트스트랩 스크립트가 첫 페인트 전에 이미 심어둔다.
     * 여기서는 그 값을 읽어 버튼 상태만 맞춘다. (다시 계산하면 화면이 한 번 깜빡인다)
     */
    const applied = document.documentElement.getAttribute('data-theme');
    setTheme(applied === 'dark' ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);

    // 시크릿 모드 등 저장이 막힌 환경에서 예외가 나도 테마 전환 자체는 동작해야 한다.
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      // 저장만 실패한 것이므로 무시한다.
    }
  };

  const isDark = theme === 'dark';

  const themeLabel = (() => {
    if (isDark) {
      return isKo ? '라이트 모드로' : 'Switch to light';
    }
    return isKo ? '다크 모드로' : 'Switch to dark';
  })();

  return (
    <div className="view-controls resume-screen-only">
      <button
        type="button"
        onClick={() => window.print()}
        aria-label={isKo ? '인쇄' : 'Print'}
        title={isKo ? '인쇄 / PDF 저장' : 'Print / Save as PDF'}
      >
        <FontAwesomeIcon icon={faPrint} />
      </button>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isKo ? '화면 테마 전환' : 'Toggle theme'}
        aria-pressed={isDark}
        title={themeLabel}
      >
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
      </button>

      <style jsx>{`
        .view-controls {
          position: fixed;
          right: 28px;
          bottom: 80px;
          z-index: 1030;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          padding: 0;
          border-radius: 999px;
          border: 1px solid var(--resume-line);
          background-color: var(--resume-bg);
          color: var(--resume-muted);
          font-size: 0.86rem;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.08);
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        button:hover {
          color: var(--resume-accent);
          border-color: var(--resume-accent);
        }

        /* 키보드 포커스는 반드시 보여야 한다 */
        button:focus-visible {
          color: var(--resume-accent);
          border-color: var(--resume-accent);
          outline: 2px solid var(--resume-accent);
          outline-offset: 2px;
        }

        @media (max-width: 576px) {
          .view-controls {
            right: 16px;
            bottom: 62px;
            gap: 4px;
          }

          button {
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </div>
  );
}
