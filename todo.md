# INFLAi 랜딩페이지 데모 개발 계획

## 프로젝트 개요
AI 기반 SNS 성장 컨설팅 플랫폼 INFLAi의 랜딩페이지 데모
- 3페이지 구조: 메인 → 분석 → 결과
- 다크블루 그라데이션 배경으로 고급스러운 디자인
- "입력 → 분석 → 제안"의 순차적 스토리텔링

## 개발할 파일 목록

### 1. 라우팅 및 레이아웃 파일
- `src/App.tsx` - 라우팅 설정 (/, /analyze, /result)
- `src/pages/Index.tsx` - 메인 페이지 (Hero section)
- `src/pages/Analyze.tsx` - 분석 페이지 (URL 입력 + 로딩)
- `src/pages/Result.tsx` - 결과 페이지 (AI 분석 결과 + 제안)

### 2. 컴포넌트 파일
- `src/components/Layout.tsx` - 공통 레이아웃 (다크 배경)
- `src/components/LoadingAnimation.tsx` - 분석 중 로딩 애니메이션
- `src/components/AnalysisResult.tsx` - 분석 결과 표시 컴포넌트

### 3. 스타일 및 설정
- `src/index.css` - 글로벌 스타일 (다크블루 그라데이션)
- `index.html` - 페이지 제목 및 메타데이터 업데이트

## 페이지별 주요 기능

### 메인 페이지 (/)
- Hero section: "AI 기반 SNS 성장 컨설턴트, INFLAi"
- CTA 버튼: "내 계정 분석하기" → /analyze

### 분석 페이지 (/analyze)
- 인스타그램 URL 입력 필드
- "AI 분석 시작" 버튼
- 로딩 애니메이션 + 분석 중 메시지
- 자동으로 /result로 이동

### 결과 페이지 (/result)
- AI 분석 요약 (참여율, 업로드 간격, 주요 주제)
- 콘텐츠 전략 제안 (3개 포스트 아이디어 + 해시태그)
- 성장 개선률 예측 차트
- 홈으로 돌아가기 버튼

## 디자인 컨셉
- 배경: 다크블루 그라데이션 (#0f0f0f → #1a1a2e → #16213e)
- 액센트: 블루 (#0070C0)
- 폰트: Inter (시스템 기본)
- 애니메이션: fade-in, slide-up 효과
- 카드 기반 레이아웃으로 모던한 느낌