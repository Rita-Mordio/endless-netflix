# Endless Netflix

넷플릭스 시청 중 인트로, 아웃트로, 줄거리 요약을 자동으로 건너뛰어주는 Chrome 확장프로그램입니다.

## 기능

- 인트로 자동 건너뛰기
- 다음 에피소드 자동 재생
- 줄거리 요약 자동 건너뛰기
- 각 기능 개별 ON/OFF 설정
- 다국어 UI 지원 (한국어, 영어, 일본어, 독일어, 스페인어, 프랑스어)

## 설치 방법

Chrome 웹 스토어에서 설치할 수 있습니다.

👉 [Chrome 웹 스토어에서 설치하기](https://chromewebstore.google.com/detail/nobnaedjpdlicdljpaceglchapfkcnkh?utm_source=item-share-cb)

## 사용 방법

1. 넷플릭스(netflix.com)에서 콘텐츠를 재생합니다.
2. Chrome 툴바의 확장프로그램 아이콘을 클릭합니다.
3. 원하는 기능을 토글로 ON/OFF 합니다.

## 프로젝트 구조

```
endless-netflix/
├── manifest.json        # 확장프로그램 설정 (Manifest V3)
├── background.js        # 서비스 워커 - 초기 설정값 등록
├── popup.html           # 팝업 UI
├── popup.js             # 팝업 토글 이벤트 처리
├── languageSettings.js  # 언어 설정 (한국어/영어)
├── scripts/
│   └── index.js         # 넷플릭스 페이지에 주입되는 콘텐츠 스크립트
└── images/              # 확장프로그램 아이콘
```

## 권한

- `storage` - 사용자 설정값 저장

## 라이선스

이 프로젝트의 소스 코드는 참고 목적으로만 공개되어 있습니다.
무단 복제, 수정, 재배포 및 2차 저작물 제작을 금지합니다.

© 2025 \<RitaMordio\>. All rights reserved.

---

# Endless Netflix

A Chrome extension that automatically skips intros, outros, and recaps while watching Netflix.

## Features

- Auto skip intro
- Auto play next episode
- Auto skip recap
- Toggle each feature individually
- Multi-language UI support (Korean, English, Japanese, German, Spanish, French)

## Installation

Available on the Chrome Web Store.

👉 [Install from Chrome Web Store](https://chromewebstore.google.com/detail/nobnaedjpdlicdljpaceglchapfkcnkh?utm_source=item-share-cb)

## Usage

1. Play any content on Netflix (netflix.com).
2. Click the extension icon in the Chrome toolbar.
3. Toggle each feature ON/OFF as desired.

## Project Structure

```
endless-netflix/
├── manifest.json        # Extension config (Manifest V3)
├── background.js        # Service worker - registers default settings
├── popup.html           # Popup UI
├── popup.js             # Popup toggle event handlers
├── languageSettings.js  # Language settings (Korean/English)
├── scripts/
│   └── index.js         # Content script injected into Netflix
└── images/              # Extension icons
```

## Permissions

- `storage` - Saves user preferences

## License

This source code is made public for reference purposes only.
Unauthorized copying, modification, redistribution, or creation of derivative works is strictly prohibited.

© 2025 \<RitaMordio\>. All rights reserved.
